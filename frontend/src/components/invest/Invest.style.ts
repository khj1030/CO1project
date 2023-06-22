import styled from "styled-components";

export const Wrapper = styled.div`
    width: 90rem;

    margin: auto;
`

export const Title = styled.div`
    margin-top: 4.5rem;

    font-size: 3.5rem;
    font-family: Pretendard;
    font-weight: 600;
`

export const SubTitle = styled.div`
    font-size: 2rem;
    font-family: "Pretendard";
    font-weight: 600;
`

export const ContentWrapper = styled.div`
    margin-top: 4rem;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const ContentBox = styled.div`
    margin-bottom: 4.5rem;
    padding: 1rem;

    width: calc(18.125rem - 1rem);
    height: calc(10.5rem - 1rem);

    border-radius: 20px;
    border: 1px solid #386CF4;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ContentTitle = styled.div`
    font-size: 1rem;
    font-family: "Pretendard";
    font-weight: 600;
`

export const Content = styled.div`
    margin: auto;
    margin-top: 0.5rem;

    font-size: 0.8rem;
    font-family: "Pretendard";


    width: 80%;
    height: 50%;

    overflow: hidden;
`

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ContentName = styled.div`
    font-size: 0.9rem;
    font-family: "Pretendard";
    font-weight: 700;
`

export const LeftDays = styled.div`
    width: 5rem;
    height: 1.5rem;

    border-radius: 13px;
    background: #386CF4;

    color: #FFF;
    font-size: 0.8rem;
    font-family: "Pretendard";
    font-weight: 300;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const PulsIcon = styled.img`
    position: fixed;
    right: 7rem;
    bottom: 5rem;
`