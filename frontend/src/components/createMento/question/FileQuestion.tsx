import React, { Dispatch, SetStateAction, ChangeEvent } from "react";
import * as S from "./Question.style";

interface IFileQuestionProps {
  title: string;
  context: string;
  state: File | undefined;
  setState: Dispatch<SetStateAction<any>>;
}

const FileQuestion = (props: IFileQuestionProps) => {
  const ImageOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    props.setState(file);
  };
  return (
    <S.MainWrap>
      <S.Title>{props.title}</S.Title>
      <S.Context>{props.context}</S.Context>
      <>
        <S.FileInputContents type="file" onChange={ImageOnChangeHandler} />
        <S.GetFileButton>사진 불러오기</S.GetFileButton>
      </>
    </S.MainWrap>
  );
};

export default FileQuestion;
