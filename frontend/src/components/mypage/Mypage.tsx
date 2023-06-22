import BoxComponent from "./BoxComponent";
import * as S from "./Mypage.style"

const Mypage = () => {
    return(
        <S.Body>
            <S.Wrapper>
                <S.ProfileWrapper>
                    <S.ProfileImg src="data:image/jpeg;base64,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" />
                    <S.ProfileName>배경민</S.ProfileName>
                    <S.ChangePosi>투자자로 전환</S.ChangePosi>
                </S.ProfileWrapper>

                <S.RightComponent>
                    
                <S.MentoWrapper>
                    멘토
                    <S.MentoBoxWrapper>
                        <S.MentoBox>
                            <S.BoxTitle>멘토 신청 현황</S.BoxTitle>

                            <BoxComponent/>
                            <BoxComponent/>
                            <BoxComponent/>

                        </S.MentoBox>

                        <S.MentoBox>
                            <S.BoxTitle>멘티 시간 조율 현황</S.BoxTitle>

                            <BoxComponent/>
                            <BoxComponent/>
                            <BoxComponent/>

                        </S.MentoBox>

                    </S.MentoBoxWrapper>
                </S.MentoWrapper>


                <S.ShortCutWrapper>

                    바로가기
                    
                    <S.ShortCutBtnsWrapper>
                        <S.ShotCutBtn>투자모집</S.ShotCutBtn>
                        <S.ShotCutBtn>경험공유</S.ShotCutBtn>
                        <S.ShotCutBtn>멘토링</S.ShotCutBtn>
                        <S.ShotCutBtn>홈 화면</S.ShotCutBtn>
                    </S.ShortCutBtnsWrapper>
                </S.ShortCutWrapper>
                
                </S.RightComponent>

            </S.Wrapper>
        </S.Body>
    )
}

export default Mypage;