import React, { useEffect, useState } from "react";
import API from "../../../util/API";
import { IInvestorValue } from "../../../types/IInvestorValue";

const Modal = ({ investorId }: { investorId: number }) => {
  const [investorValue, setInvestorValue] = useState<IInvestorValue>();

  useEffect(() => {
    API.get(`api/investor/${investorId}`)
      .then((e) => {
        console.log(e);
        let copy: IInvestorValue = e.data;
        setInvestorValue(copy);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [investorId]);

  return (
    <div>
      <div>
        <p>{investorValue?.title}</p>
        <div>목표 금액 : {investorValue?.totalPrice}</div>
      </div>
      <p>{investorValue?.user.nickname}</p>
      <p>{investorValue?.introduction}</p>
      <button>투자하기</button>
    </div>
  );
};

export default Modal;
