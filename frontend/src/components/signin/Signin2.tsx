import * as S from "./Signin2.style"

const Signin2 = () => {
    return(
        <>
            <S.Body>
                <S.Wrapper>
                    회원가입

                    <S.InputWrapper>
                        닉네임
                        <S.Input/>
                    </S.InputWrapper>

                    <S.InputWrapper>
                        이메일
                        <S.CheckerWrap>
                            <S.InputWithBtn type="email"/>
                            <S.CheckBtn>전송</S.CheckBtn>
                        </S.CheckerWrap>
                    </S.InputWrapper>

                    <S.InputWrapper>
                        <div>이메일 확인</div>
                        <S.CheckerWrap>
                            <S.InputWithBtn type="email"/>
                            <S.CheckBtn>확인</S.CheckBtn>
                        </S.CheckerWrap>
                    </S.InputWrapper>

                    <S.InputWrapper>
                        연락처
                        <S.Input type="password"/>
                    </S.InputWrapper>

                    <S.NextBtn>다음 단계</S.NextBtn>

                </S.Wrapper>
            </S.Body>
        </>
    )
}

export default Signin2;