import { Link } from "react-router-dom";
import styled from "styled-components";

export const PageContainer = styled.div`
  min-height: calc(100% - 5rem - 4rem);
  padding-top: 5rem;
`;

export const PageMainContainer = styled.div`
  padding: 1rem;
`;

export const RandomDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50rem;
  padding: 3rem;
  border: 2px solid #3ded97;
  border-radius: 1rem;
  background-color: rgb(0 248 111 / 42%);
`;
export const RandomContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 3rem 0;
`;
export const GoChoicePage = styled(Link)`
  margin-top: 0.5rem;
  font-size: 2rem;
  font-weight: bold;
  :hover {
    color: #3ded97;
  }
`;
