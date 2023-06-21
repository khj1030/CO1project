import styled from "styled-components";

export const Body = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Wrapper = styled.div`
    width: 500px;
    height: 573px;  

    border: 1px solid #B8B8B8;
    border-radius: 10px;    

    font-family: 'Pretendard';
    font-weight: 600;
    font-size: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const InputWrapper = styled.div`
    margin-top: 1rem;

    font-family: 'Pretendard';
    font-weight: 600;
    font-size: 1rem;
`

export const Input = styled.input`
    margin-top: 0.5rem;

    display: block;
    
    width: 25rem;
    height: 2.5rem;

    border: 1px solid #B8B8B8;
    border-radius: 5px; 
`

export const NextBtn = styled.button`
    margin-top: 10%;

    width: 30%;
    height: 7%;
    
    background: #386CF4;
    border: none;
    border-radius: 5px;

    font-family: 'Pretendard';
    font-weight: 600;
    font-size: 1.5rem;
    color: #FFFFFF;
`
