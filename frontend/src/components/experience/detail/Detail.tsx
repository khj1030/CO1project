import React from "react";
import ReactMarkdown from "react-markdown";
import * as S from "./Detail.style";
import Comment from "./comment/Comment";

const Detail = () => {
  const markdown = "## ㅎㅇㅎㅇ";
  return (
    <S.EntrieWrap>
      <S.Title>Title</S.Title>
      <S.ContentsWrap>
        <p>조수현 - 2023. 06. 22</p>
      </S.ContentsWrap>
      <ReactMarkdown>{markdown}</ReactMarkdown>
      <Comment />
    </S.EntrieWrap>
  );
};

export default Detail;
