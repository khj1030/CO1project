import styled from "styled-components";

export const MainContainer = styled.nav`
  display: inline-block;
  width: 12rem;
  height: 7rem;
  margin: 1rem 2rem;
  padding: 1rem;
  background-color: white;
  border: 1px solid #b8b8b8;
  border-radius: 5px;
`;

export const ImageWrap = styled.div`
  display: flex;
`;

export const UserImage = styled.img`
  margin-right: 1rem;
`;

export const NameElement = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
`;

export const YearSalesFont = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #9a9a9d;
`;

export const PriceWrap = styled.span`
  font-szie: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

export const PerTimes = styled.p`
  font-size: 0.6rem;
  color: #9a9a9d;
  margin-right: 0.3rem;
`;
