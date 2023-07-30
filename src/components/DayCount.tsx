import styled from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useRef, useState } from "react";
import InformModal from "./Common/InformModal";
import ConfirmModal from "./Common/ConfirmModal";
import { itemProps } from "../page/ChoiceItemPage";
interface CounterProps {
  checkedList: number;
  items: number;
  itemsList: itemProps[];
}

export const Counter = ({ checkedList, items, itemsList }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [randomArray, setRandomArray] = useState<Array<number>>([]);
  const zeroRef = useRef<HTMLDialogElement>(null);
  const randomRef = useRef<HTMLDialogElement>(null);
  //randomArray는 인덱스가 들어가있다.
  //itemsList에서 인덱스를 찾는다
  //사진과 이름만 넣는다.
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
  //랜덤뽑기
  const getRandom = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min) + min);
  const onRandomBtnClick = () => {
    if (count === 0) {
      if (!zeroRef.current) return;
      zeroRef.current.showModal();
      setTimeout(() => {
        if (!zeroRef.current) return;
        zeroRef.current.close();
      }, 1000);
    } else {
      for (let i = 1; i <= count; i++) {
        if (checkedList === 0) {
          setRandomArray((prev) => [...prev, getRandom(0, items)]);
        } else {
          setRandomArray((prev) => [...prev, getRandom(0, checkedList)]);
        }
      }
      if (!randomRef.current) return;
      randomRef.current.showModal();
    }
  };
  const onCancelClick = () => {
    setRandomArray([]);
    setCount(0);
  };
  console.log(randomArray);
  return (
    <>
      <Container>
        <div
          className="btn btn-sm btn-outline btn-accent"
          onClick={onRandomBtnClick}
        >
          랜덤 선택
        </div>
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
      <ConfirmModal
        onConfirm={() => console.log("hji")}
        onCancel={onCancelClick}
        dialogRef={randomRef}
      >
        <div>
          <h1>장바구니에 넣으시겠습니까?</h1>
          {}
        </div>
      </ConfirmModal>
      <InformModal dialogRef={zeroRef} inform="갯수를 골라주세요" />
      {/* <InformModal dialogRef={randomRef} inform="갯수를 골라주세요" /> */}
    </>
  );
};
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
