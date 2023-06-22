import styled from "styled-components";

export const MainWrap = styled.nav`
  width: 100%;
  padding: 1.5rem;
  border: 2px solid #ebebeb;
  margin-bottom: 3rem;
`;

export const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
`;
export const Context = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const InputContents = styled.input`
  width: 97%;
  padding: 1.5%;
  font-size: 0.8rem;
  background-color: #f1f1f1;
  border: none;
  box-shadow: none;
`;

export const FileInputContents = styled.input`
  position: absolute;
  font-size: 0.8rem;
  border: none;
  box-shadow: none;
  background-color: blue;
  padding: 0.5rem;
  width: 7.5rem;
  opacity: 0;
`;

export const GetFileButton = styled.button`
  background-color: #23e9b4;
  font-size: 0.8rem;
  color: white;
  border: none;
  padding: 0.5rem 2rem;
  border-radius: 5px;
`;
