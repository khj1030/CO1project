import styled from "styled-components";

export const Body = styled.div`
    width: 100%;
    height: calc(100vh - 5vh);

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Wrapper = styled.div`
display: flex;
`

export const ProfileWrapper = styled.div`
    margin-right: 3rem;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ProfileImg = styled.img`
    margin-bottom: 0.3rem;

    width: 15rem;
    height: 15rem;
    border-radius: 50%;
`

export const ProfileName = styled.div`
    font-family: 'Pretendard';
    font-weight: 600;
    font-size: 2rem;
`

export const ChangePosi = styled.button`
    margin-top: 1rem;

    background: #3840B4;
    border-radius: 50px;

    width: 12.5rem;
    height: 3rem;

    font-family: 'Pretendard';
    font-weight: 600;
    font-size: 1.5rem;
    color: #FFFFFF;
    border: none;
`

export const RightComponent = styled.div`

`

export const MentoWrapper = styled.div`
font-size: 1.8rem;
font-weight: 800;
`

export const MentoBoxWrapper = styled.div`
margin-top: 3rem;

display: flex;

`

export const MentoBox = styled.div`
    margin-right: 1.5rem;

    width: 24rem;
    height: 35rem;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 24px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BoxTitle = styled.div`
    margin-bottom: 1rem;

    width: 13rem;
    height: 4rem;

    background: #3840B4;
    border-radius: 27px;

    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 1.2rem;
    color: #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const ShortCutWrapper = styled.div`
    margin-top: 5rem;

    font-size: 1.7rem;
    font-weight: 800;
`

export const ShortCutBtnsWrapper = styled.div`
    padding: 1.5rem 1.7rem;

    background: #FAFAFC;
    border-radius: 30px;

    display: flex;
`

export const ShotCutBtn = styled.button`
    margin-right: 1rem;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
    border: none;

    font-size: 1.2rem;
    font-weight: 800;

    width: 12rem;
    height: 6.5rem;
`