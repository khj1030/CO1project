import React, { useState } from "react";
import Title from "../common/form/Title";
import * as S from "../../styles/Form.style";
import Modal from "./modal/Modal";
import ContentsBox from "./contentsBox/ContentsBox";

const Mentoring = () => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [array, setArray] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  return (
    <>
      {isModalActive && (
        <S.Background onClick={() => setIsModalActive(false)} />
      )}
      <S.FormBody>
        {isModalActive && <Modal />}
        <Title title="멘토링" context="다양한 멘토를 만나보세요." />
        <>
          <S.ListWrap>
            {array.map((v, i) => (
              <ContentsBox key={i} setState={setIsModalActive} />
            ))}
          </S.ListWrap>
        </>
      </S.FormBody>
    </>
  );
};

export default Mentoring;
