import styled from "styled-components";

export const MainContainer = styled.div`
  position: fixed;
  right: 0;
  background-color: white;
  border-radius: 2rem 0rem 0rem 2rem;
  border: 1px solid #9a9a9d;
  padding: 2rem;
  width: 25rem;
  height: 25rem;
`;

export const SubContainer = styled.div`
  position: relative;
`;

export const TitleContentsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: 700;
  width: 45%;
  overflow: hidden;
  word-wrap: break-word;
`;

export const TotalPrice = styled.div`
  color: white;
  font-weight: 600;
  padding: 0.5rem 2rem;
  background-color: #386cf4;
  border-radius: 0.5rem;
`;

export const NameElement = styled.p`
  color: #9a9a9d;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
`;

export const TextAreaIntroduceElement = styled.p`
  font-size: 0.8rem;
  width: 100%;
  height: 15rem;
  margin-bottom: 1rem;
  overflow: hidden;
  word-wrap: break-word;
`;

export const InvestButton = styled.button`
  box-shadow: none;
  border: none;
  border-radius: 0.5rem;
  color: white;
  background-color: #23e9b4;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.5rem 2.5rem;
`;
