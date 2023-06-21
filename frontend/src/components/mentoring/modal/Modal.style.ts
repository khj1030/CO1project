import styled from "styled-components";

export const MainContainer = styled.nav`
  position: fixed;
  width: 28rem;
  height: 31rem;
  background-color: white;
  box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  margin-left: 50%;
  padding: 3rem;
`;

export const ImgContentsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const UserImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 10rem;
`;

export const IntroduceBox = styled.p`
  width: 70%;
  padding: 0.5rem 0.5rem;
  height: 3rem;
  background-color: #eeeeee;
  display: block;
  border-radius: 0 50rem 50rem 0;
`;

export const CommonFont = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
  color: black;
  margin: 0.2rem 0rem;
`;

export const PriceTime = styled.p`
  margin-right: 0.3rem;
`;

export const PriceWrap = styled.p`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: #9a9a9d;
`;

export const YearSalesFont = styled.p`
  font-weight: 600;
  font-size: 1rem;
  color: #9a9a9d;
`;

export const ContactContainer = styled.p`
  width: 90%;
  height: 10rem;
  padding: 5%;
  background-color: gray;
  margin: 1rem 0;
`;

export const RequestButton = styled.button`
  padding: 0.5rem 2rem;
  box-shadow: none;
  border: none;
  border-radius: 5rem;
  background-color: #23e9b4;
  color: white;
  font-weight: 600;
`;
