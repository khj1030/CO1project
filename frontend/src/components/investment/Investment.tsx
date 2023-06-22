import * as S from "./Investment.style"

const Investment = () => {
    return(
        <S.Body>
            <S.Wrapper>
                <S.Title>투자자 모집</S.Title>
                <S.SubTitle>내가 키우고 싶은 회사에 투자 하세요.</S.SubTitle>

                <S.Subnail>
                    <S.ComponentTitle>준범 치킨</S.ComponentTitle>
                    <S.Content>준범치킨은 1912년 처음 개업하여 현대 치킨의 어머니 역할을 톡톡히 하였으며 현재도 꾸준한 ....</S.Content>

                    <S.UnderInfo>
                        <S.Author>한준범</S.Author>
                        <S.LeftDays>7일 남음</S.LeftDays>
                    </S.UnderInfo>
                
                </S.Subnail>

            </S.Wrapper>
        </S.Body>
    )
}

export default Investment