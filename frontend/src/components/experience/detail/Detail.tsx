import React from "react";
import ReactMarkdown from "react-markdown";
import * as S from "./Detail.style";
import Comment from "./comment/Comment";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  const markdown = "## ㅎㅇㅎㅇ";
  return (
    <S.EntrieWrap>
      <div>
        <S.GoBackButton onClick={() => navigate("/experience")}>
          {"< 뒤로가기"}
        </S.GoBackButton>
        <S.Title>Title</S.Title>
      </div>
      <S.ContentsWrap>
        <p>조수현 - 2023. 06. 22</p>
      </S.ContentsWrap>
      <ReactMarkdown>{markdown}</ReactMarkdown>
      <Comment />
    </S.EntrieWrap>
  );
};

export default Detail;
