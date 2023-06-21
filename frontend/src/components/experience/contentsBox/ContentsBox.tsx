import React from "react";
import * as S from "./ContentsBox.style";
import LogoImg from "../../../asset/Logo.svg";

const ContentsBox = ({ isInPhoto }: { isInPhoto: boolean }) => {
  return (
    <S.MainContainer>
      {isInPhoto && <S.ImageArea url={LogoImg} />}
      <S.SubContainer>
        <S.Title>제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 </S.Title>
        <S.ImageContents>
          <S.ImageElement src={LogoImg} alt="" />
          <div>
            <p>이름</p>
            <S.PriceContext>price</S.PriceContext>
          </div>
        </S.ImageContents>
      </S.SubContainer>
    </S.MainContainer>
  );
};

export default ContentsBox;
