import React, { Dispatch, SetStateAction } from "react";
import * as S from "./Invest.style";

interface IInvestContentsValue {
  title: string;
  name: string;
  introduce: string;
  investorId: number;
  setModalActiveState: Dispatch<SetStateAction<boolean>>;
  setModalState: Dispatch<SetStateAction<number>>;
}

const ContentsBox = (props: IInvestContentsValue) => {
  return (
    <S.ContentBox
      onClick={() => {
        props.setModalActiveState(true);
        props.setModalState(props.investorId);
      }}
    >
      <S.ContentTitle>{props.title}</S.ContentTitle>
      <S.Content>{props.introduce}</S.Content>
      <S.Info>
        <S.ContentName>{props.name}</S.ContentName>
        <S.LeftDays>7일 남음</S.LeftDays>
      </S.Info>
    </S.ContentBox>
  );
};

export default ContentsBox;
