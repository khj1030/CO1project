import React, { useState } from "react";
import Title from "../common/form/Title";
import * as S from "../../styles/Form.style";
import Modal from "./modal/Modal";

const Mentoring = () => {
  const [isModalActive, setIsModalActive] = useState<boolean>(true);
  return (
    <>
      {isModalActive && (
        <S.Background onClick={() => setIsModalActive(false)} />
      )}
      <S.FormBody>
        {isModalActive && <Modal />}
        <Title title="멘토링" context="다양한 멘토를 만나보세요." />
        <></>
      </S.FormBody>
    </>
  );
};

export default Mentoring;
