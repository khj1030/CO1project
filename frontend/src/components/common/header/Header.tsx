import React, { useState, useEffect } from "react";
import * as S from "./Header.style";
import Logo from "../../../asset/Logo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isLogin, setIsLogin] = useState<boolean>();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  const LogOut = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      localStorage.removeItem("accessToken");
      window.location.reload();
    }
  };

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
          <span onClick={() => navigate("/invest")}>투자 모집</span>
          {isLogin ? (
            <>
              <span
                onClick={() => {
                  navigate("/mypage");
                }}
              >
                내정보
              </span>
              <span onClick={LogOut}>로그아웃</span>
            </>
          ) : (
            <span
              onClick={() => {
                navigate("/signup");
              }}
            >
              로그인
            </span>
          )}
        </S.ContentsWrap>
      </S.SubHeaderWrap>
    </S.MainHeaderWrap>
  );
};

export default Header;
