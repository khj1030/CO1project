import React, { useEffect, useState } from "react";
import API from "../../../util/API";
import { IInvestorValue } from "../../../types/IInvestorValue";
import * as S from "./Modal.style";

const Modal = ({ investorId }: { investorId: number }) => {
  const [investorValue, setInvestorValue] = useState<IInvestorValue>();

  useEffect(() => {
    API.get(`api/investor/${investorId}`)
      .then((e) => {
        let copy: IInvestorValue = e.data;
        setInvestorValue(copy);
      })
      .catch((_) => {});
  }, [investorId]);

  return (
    <S.MainContainer>
      <S.SubContainer>
        <S.TitleContentsWrap>
          <S.Title>{investorValue?.title}</S.Title>
          <S.TotalPrice>목표 금액 : {investorValue?.totalPrice}</S.TotalPrice>
        </S.TitleContentsWrap>
        <S.NameElement>{investorValue?.user.nickname}</S.NameElement>
        <S.TextAreaIntroduceElement>
          {investorValue?.introduction}
        </S.TextAreaIntroduceElement>
        <S.InvestButton>투자하기</S.InvestButton>
      </S.SubContainer>
    </S.MainContainer>
  );
};

export default Modal;
