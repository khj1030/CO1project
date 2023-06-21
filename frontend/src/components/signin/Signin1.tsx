import * as S from "./Signin1.style"

const Signin1 = () => {
    return(
        <S.Body>
            <S.Wrapper>
                회원가입

                <S.InputWrapper>
                    아이디
                    <S.Input/>
                </S.InputWrapper>

                <S.InputWrapper>
                    비밀번호
                    <S.Input type="password"/>
                </S.InputWrapper>

                <S.InputWrapper>
                    비밀번호 확인
                    <S.Input type="password"/>
                </S.InputWrapper>

                <S.NextBtn>다음 단계</S.NextBtn>

            </S.Wrapper>
        </S.Body>
    )
}

export default Signin1;