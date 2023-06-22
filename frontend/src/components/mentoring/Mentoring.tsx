import React, { useEffect, useState } from "react";
import Title from "../common/form/Title";
import * as S from "../../styles/Form.style";
import Modal from "./modal/Modal";
import ContentsBox from "./contentsBox/ContentsBox";
import { useNavigate } from "react-router-dom";
import API from "../../util/API";
import { IServerMentorListValue } from "../../types/IMentorValue";

const Mentoring = () => {
  const navigate = useNavigate();
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [array, setArray] = useState<IServerMentorListValue[]>([]);
  useEffect(() => {
    API.get(`api/mentoring/all`)
      .then((e) => {
        console.log(e);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      {isModalActive && (
        <S.Background onClick={() => setIsModalActive(false)} />
      )}
      <S.FormBody>
        <S.AddBtn onClick={() => navigate("/creatementoring")}>
          <p>+</p>
        </S.AddBtn>
        {isModalActive && <Modal />}
        <Title title="멘토링" context="다양한 멘토를 만나보세요." />
        <S.ListWrap>
          {array.map((v, i) => (
            <ContentsBox key={i} setState={setIsModalActive} />
          ))}
        </S.ListWrap>
      </S.FormBody>
    </>
  );
};

export default Mentoring;
