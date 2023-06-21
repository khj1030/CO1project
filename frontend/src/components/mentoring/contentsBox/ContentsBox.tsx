import React, { Dispatch, SetStateAction } from "react";
import * as S from "./ContentsBox.style";
import LogoImg from "../../../asset/Logo.svg";

const ContentsBox = ({
  setState,
}: {
  setState: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <S.MainContainer onClick={() => setState(true)}>
      <S.ImageWrap>
        <S.UserImage src={LogoImg} alt="" />
        <div>
          <S.NameElement>이름</S.NameElement>
          <S.YearSalesFont>연매출 1억</S.YearSalesFont>
        </div>
      </S.ImageWrap>
      <S.PriceWrap>
        <S.PerTimes>1시간 /</S.PerTimes>
        <p>50000</p>
      </S.PriceWrap>
    </S.MainContainer>
  );
};

export default ContentsBox;
