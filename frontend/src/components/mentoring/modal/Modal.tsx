import React from "react";
import { IMentorValue } from "../../../types/IMentorValue";
import * as S from "./Modal.style";

const Modal = () => {
  return (
    <>
      <S.MainContainer>
        <S.ImgContentsWrap>
          <S.UserImage src="" alt="" />
          <S.IntroduceBox>소개</S.IntroduceBox>
        </S.ImgContentsWrap>
        <S.CommonFont>이름</S.CommonFont>
        <S.PriceWrap>
          <S.PriceTime>1시간 / </S.PriceTime>
          <S.CommonFont> 30000</S.CommonFont>
        </S.PriceWrap>
        <S.YearSalesFont>연매출 : </S.YearSalesFont>
        <S.ContactContainer>연락처~~~</S.ContactContainer>
        <S.RequestButton>요청하기</S.RequestButton>
      </S.MainContainer>
    </>
  );
};

export default Modal;
