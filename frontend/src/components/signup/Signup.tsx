import { ReactElement } from "react";
import * as S from "./Signup.style"


const Signup = ():ReactElement => {
    return(
        <S.Body>
            <S.Wrapper>
                <S.Title>로그인</S.Title>

                <S.InputWrapper>
                    아이디
                    <S.Input/>
                </S.InputWrapper>

                <S.InputWrapper>
                    비밀번호
                    <S.Input/>
                </S.InputWrapper>

                <S.Hint>계정이 없으신가요?</S.Hint>

                <S.LoginBtn>로그인</S.LoginBtn>

            </S.Wrapper>
        </S.Body>
    )
}

export default Signup;