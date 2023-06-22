import React, { useState } from "react";
import * as S from "./Header.style";
import Logo from "../../../asset/Logo.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(()=>{
    if(localStorage.getItem('accessToken')){
      setIsLogin(true)
    }
  },[])

  return (
    <S.MainHeaderWrap>
      <S.SubHeaderWrap>
        <S.LogoWrap onClick={() => navigate("/")}>
          <S.LogoImg src={Logo} alt="" />
          <span>대다</span>
        </S.LogoWrap>
        <S.ContentsWrap>
          <span onClick={() => navigate("/experience")}>경험 공유</span>
          <span onClick={() => navigate("/mentor")}>멘토링</span>
          <span>투자 모집</span>
          {isLogin ? 
          <>
            <span onClick={()=>{navigate('/mypage')}}>내정보</span> 
            <span onClick={()=>{localStorage.removeItem('accessToken')}}>로그아웃</span> 
          </>
          : <span onClick={()=>{navigate('/signup')}}>로그인</span>}
        </S.ContentsWrap>
      </S.SubHeaderWrap>
    </S.MainHeaderWrap>
  );
};

export default Header;
