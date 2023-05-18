import { useState } from "react";
import styled from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const onInc = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };
  const onDec = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <Container>
      <Ptag>일수 선택 </Ptag>
      <BtnContainer>
        <Button onClick={onInc}>
          <AiOutlinePlus size={15} />
        </Button>
        <p>{count}</p>
        <Button onClick={onDec}>
          <AiOutlineMinus size={15} />
        </Button>
      </BtnContainer>
    </Container>
  );
};
const Ptag = styled.p`
  font-size: 1.1rem;
  font-weight: bolder;
  color: #025464;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
`;
const BtnContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0.2rem;
  margin: 0 0.5rem;
`;
