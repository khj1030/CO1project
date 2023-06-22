import React, { useState } from "react";
import * as S from "../createMento/CreateMento.style";
import { useNavigate } from "react-router-dom";
import Question from "../createMento/question/Question";
import API from "../../util/API";

const CreateInvest = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [introduce, setIntroduce] = useState<string>("");

  const ServerConnect = async () => {
    if (title === "" || price === "" || introduce === "") {
      alert("정확한 값을 입력해주세요.");
      return;
    }
    if (window.confirm("투자를 받으시겠습니까?")) {
      await API.post(
        `api/investor/create`,
        {
          title: title,
          totalPrice: price,
          introduction: introduce,
        },
        {
          headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODgwNTUwMDgsInVzZXJJZCI6MX0.MlAFw0pA4HSSBE9GXXYf-yWiBIA3icHZUapQlRwTfxM`,
          },
        }
      )
        .then((_) => alert("성공적으로 게시되었습니다."))
        .catch((_) => {});
      navigate("/invest");
    }
  };

  return (
    <S.MainForm>
      <S.GoBackButton onClick={() => navigate("/invest")}>
        {"< 뒤로가기"}
      </S.GoBackButton>
      <S.Title>투자 폼 작성</S.Title>
      <Question
        title="프로젝트의 제목이 어떻게 되시나요?"
        context="프로젝트의 이름은 사람들의 이목의 관심을 결정합니다. 신중히 생각하여 자신만의 마케팅을 시전해보세요."
        setState={setTitle}
        state={title}
      />
      <Question
        title="이 프로젝트의 가치는 얼마인가요?"
        context="실현시키기 위해 필요한 돈을 직접 측정해보세요, 돈은 실현에 매우 중요해요."
        setState={setPrice}
        state={price}
      />
      <Question
        title="당신의 서비스에 대해 소개해 주세요"
        context="당신을 뭐라고 하는 사람은 없습니다. 당당하게 자신을 소개하듯이 글을 작성해주세요."
        setState={setIntroduce}
        state={introduce}
      />
      <S.SubminButton onClick={ServerConnect}>투자 폼 작성하기</S.SubminButton>
    </S.MainForm>
  );
};

export default CreateInvest;
