import React from "react";
import * as S from "./ContentsBox.style";
import LogoImg from "../../../asset/Logo.svg";
import { useNavigate } from "react-router-dom";

const ContentsBox = ({ isInPhoto, id }: { isInPhoto: boolean; id: number }) => {
  const navigate = useNavigate();
  return (
    <S.MainContainer onClick={() => navigate(`/experience/${id}`)}>
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
