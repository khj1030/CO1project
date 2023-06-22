import * as S from "./Invest.style"
import PulsInvest from "../../asset/PlusInvest.svg"
import {useEffect,useState} from "react"
import API from "../../util/API";

type Content = {
    title : string,
    introduction : string,
    nickname : string
}

const Invest = () => {
    let Cnt = [1,2,3,4,5,6,7,8,9];
    const [contentData, setContentData] = useState<Content[]>([{
        title : "",
        introduction : "",
        nickname : ""
    }])
    const [isLodding, setIsLodding] = useState<boolean>(true);

    useEffect(()=>{
        API.get('/api/investor')
        .then((res)=>{
            (res.data).map((val:any) => {
                setContentData([...contentData,{
                    title : val.title,
                    introduction : val.introduction,
                    nickname : val.user.nickname
                }])
            })
            setIsLodding(false)
        })
        .catch((err)=>{
            console.error(err)
        })
    },[])

    if(isLodding){
        return(<>
            로딩중입니다.........
        </>)
    }

    return(
        <>
            <S.Wrapper>
                <S.Title>투자자 모집</S.Title>
                <S.SubTitle>내가 키우고 싶은 회사에 투자 하세요.</S.SubTitle>
            
                <S.ContentWrapper>
                { contentData.map((val:any,idx:any)=>(
                    <S.ContentBox key={idx} >
                        <S.ContentTitle>{val.title}</S.ContentTitle>
                        <S.Content>{val.introduction}</S.Content>
                        <S.Info>
                            <S.ContentName>{val.nickname}</S.ContentName>
                            <S.LeftDays>{idx}일 남음</S.LeftDays>
                        </S.Info>
                    </S.ContentBox>
                )) }
                </S.ContentWrapper>
                        

            </S.Wrapper>
            <S.PulsIcon src={PulsInvest} />
        </>
    )
}

export default Invest