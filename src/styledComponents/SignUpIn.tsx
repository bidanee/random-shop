import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

export const Image = styled.img`
  width: 10rem;
  height: 10rem;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const NameLabel = styled.label`
  ${tw`
  flex flex-col mb-4 px-6
`}
`;
export const Input = styled.input`
  ${tw` mt-1 text-sm placeholder-gray-400 border-b-2 px-4`}
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
  ${tw` flex flex-col items-center mt-24 w-full h-fit`}
`;
export const FormContainer = styled.div`
  ${tw` flex flex-col justify-start items-center w-1/4 min-w-max h-fit border-solid  border-4 border-green-300 rounded-2xl`}
`;
export const ChangeForm = styled.div`
  ${tw`flex items-center justify-center mt-2 w-1/4 min-w-max border-solid  border-4 border-green-300 rounded-2xl h-9`}
`;

export const GoPage = styled(Link)`
  text-decoration: underline;
  color: #69f0ae;
`;
