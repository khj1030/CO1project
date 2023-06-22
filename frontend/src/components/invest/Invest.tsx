import * as S from "./Invest.style"
import PulsInvest from "../../asset/PlusInvest.svg"

const Invest = () => {
    let Cnt = [1,2,3,4];

    return(
        <>
            <S.Wrapper>
                <S.Title>투자자 모집</S.Title>
                <S.SubTitle>내가 키우고 싶은 회사에 투자 하세요.</S.SubTitle>
            
                    {
                        Cnt.map((val)=>(
                            <S.ContentWrapper>
                            { Cnt.map((val)=>(
                                <S.ContentBox>
                                    <S.ContentTitle>준범 치킨</S.ContentTitle>
                                    <S.Content>준범치킨은 1912년 처음 개업하여 현대 치킨의 어머니 역할을 톡톡히 하였으며 현재도 꾸준한
            안녕하세요 감사해요 잘있어요 다시만나요 또 만날 때는 우리 웃으면서 눈물은 저 꽃나무 뒤로 넘겨두고 곧 다시 만날 그 날을 위해....</S.Content>
                                    <S.Info>
                                        <S.ContentName>한준범</S.ContentName>
                                        <S.LeftDays>7일 남음</S.LeftDays>
                                    </S.Info>
                                </S.ContentBox>
                            )) }
                            </S.ContentWrapper>
                        ))
                    }
            
            </S.Wrapper>
            <S.PulsIcon src={PulsInvest} />
        </>
    )
}

export default Invest