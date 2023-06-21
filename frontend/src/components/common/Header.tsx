import React from "react";
import * as S from "./Header.style";
import Logo from "../../asset/Logo.svg";

const Header = () => {
  return (
    <S.MainHeaderWrap>
      <S.SubHeaderWrap>
        <S.LogoWrap>
          <S.LogoImg src={Logo} alt="" />
          <span>대다</span>
        </S.LogoWrap>
        <S.ContentsWrap>
          <span>경험 공유</span>
          <span>멘토링</span>
          <span>투자 모집</span>
          <span>내정보</span>
        </S.ContentsWrap>
      </S.SubHeaderWrap>
    </S.MainHeaderWrap>
  );
};

export default Header;
