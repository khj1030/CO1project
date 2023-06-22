import { useEffect, useState } from "react";
import API from "../../util/API";
import { IServerUserValue } from "../../types/IServerUserValue";
import Title from "../common/form/Title";
import * as S from "../../styles/Form.style";
import { useNavigate } from "react-router-dom";
import ContentsBox from "./contentsBox/ContentsBox";
import Modal from "./modal/Modal";

type Content = {
  title: string;
  introduction: string;
  nickname: string;
  investorId: number;
};

interface IServerGetValue {
  introduction: string;
  createDate: string;
  investorId: number;
  modifiedDate: string;
  title: string;
  totalPrice: any;
  user: IServerUserValue;
}

const Invest = () => {
  const navigate = useNavigate();
  //let Cnt = [1,2,3,4,5,6,7,8,9];
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [investorId, setInvestorId] = useState<number>(0);
  const [contentData, setContentData] = useState<Content[]>([]);
  const [isLodding, setIsLodding] = useState<boolean>(true);

  useEffect(() => {
    API.get("/api/investor")
      .then((res) => {
        let serverData: IServerGetValue[] = res.data;
        let copy: Content[] = [];
        // eslint-disable-next-line array-callback-return
        serverData.map((val) => {
          copy.push({
            title: val.title,
            introduction: val.introduction,
            nickname: val.user.nickname,
            investorId: val.investorId,
          });
        });
        setContentData([...copy]);
        setIsLodding(false);
      })
      .catch((err) => {
        console.error(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLodding) {
    return <>로딩중입니다.........</>;
  }

  return (
    <>
      {isModalActive && (
        <S.Background
          onClick={() => {
            setIsModalActive(false);
            setInvestorId(0);
          }}
        />
      )}
      <S.FormBody>
        <S.AddBtn onClick={() => navigate("/creatementoring")}>
          <p>+</p>
        </S.AddBtn>
        {isModalActive && <Modal investorId={investorId} />}
        <Title
          title="투자자 모집"
          context="내가 키우고 싶은 회사에 투자 하세요."
        />
        <S.ListWrap>
          {contentData.map((val, idx) => (
            <ContentsBox
              key={idx}
              title={val.title}
              name={val.nickname}
              introduce={val.introduction}
              investorId={val.investorId}
              setModalActiveState={setIsModalActive}
              setModalState={setInvestorId}
            />
          ))}
        </S.ListWrap>
      </S.FormBody>
    </>
  );
};

export default Invest;
