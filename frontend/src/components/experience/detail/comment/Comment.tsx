import React, { useState } from "react";
import * as S from "./Comment.style";

const Comment = () => {
  const [commentArray, setCommentArray] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
  ]);
  const [newCommnetValue, setNewCommentValue] = useState<string>("");
  return (
    <S.MainContainer>
      <S.Title>댓글 달기</S.Title>
      {commentArray.map((v, i) => (
        <CommentContents key={i} />
      ))}
      <S.AddComment
        type="text"
        placeholder="댓글 달기"
        value={newCommnetValue}
        onChange={(e) => setNewCommentValue(e.target.value)}
      />
    </S.MainContainer>
  );
};

export default Comment;

const CommentContents = () => {
  return (
    <S.UserContentsWrap>
      <S.UserImg src="" alt="" />
      <div>
        <S.UserNameContents>name</S.UserNameContents>
        <div>context</div>
      </div>
    </S.UserContentsWrap>
  );
};
