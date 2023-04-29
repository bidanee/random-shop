import { Link } from "react-router-dom";
import styled from "styled-components";

export const Image = styled.img`
  width: 10rem;
  height: 10rem;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const NameLabel = styled.label`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #c0c0c0;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-left: 2px;
`;
export const Input = styled.input`
  margin: 0 0 0 0.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  ::placeholder {
    color: #c1c1c1;
  }
`;
export const MiniButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 6rem;
  width: 7rem;
  font-size: 1.2rem;
`;
export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 350px;
  width: 22rem;
  height: 26rem;
  border: 3px solid #49d69b;
  border-radius: 1.5rem;
`;
export const ChangeForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  width: 22rem;
  height: 3rem;
  border: 3px solid #49d69b;
  border-radius: 1.5rem;
`;

export const GoPage = styled(Link)`
  text-decoration: underline;
  color: #69f0ae;
`;
