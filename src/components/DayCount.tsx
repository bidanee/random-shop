import styled from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import InformModal from "./Common/InformModal";
import ConfirmModal from "./Common/ConfirmModal";
import { itemProps } from "../page/ChoiceItemPage";
import itemData from "../../public/data/itemData.json";
import { useRecoilState } from "recoil";
import { ItemsState } from "../service/atoms";
import { json } from "react-router";
interface CounterProps {
  checkedList: number;
  itemsList: number;
}

export const Counter = ({ checkedList, itemsList }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [items] = useRecoilState(ItemsState);
  const [randomArray, setRandomArray] = useState<Array<number>>([]);

  const zeroRef = useRef<HTMLDialogElement>(null);
  const randomRef = useRef<HTMLDialogElement>(null);
  const randomItems = items.filter((item) => randomArray.includes(item.id));
  const userId = JSON.parse(localStorage.getItem("user")).email;
  const cart = JSON.parse(localStorage.getItem(`${userId}.cart`)) || [];
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
          setRandomArray((prev) => [...prev, getRandom(0, itemsList)]);
        } else {
          setRandomArray((prev) => [...prev, getRandom(0, checkedList)]);
        }
      }
      if (!randomRef.current) return;
      randomRef.current.showModal();
    }
  };

  const onConfirmClick = () => {
    setRandomArray([]);
    setCount(0);
    randomItems.map((item) => {
      cart.push(item.id);
    });
    localStorage.setItem(`${userId}.cart`, JSON.stringify(cart));
  };

  const onCancelClick = () => {
    setRandomArray([]);
    setCount(0);
  };
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
        onConfirm={onConfirmClick}
        onCancel={onCancelClick}
        dialogRef={randomRef}
      >
        <div>
          <h1 className="mt-4 mb-6 text-base">장바구니에 넣으시겠습니까?</h1>

          <div className="flex items-center justify-center">
            {randomItems &&
              randomItems.map((item) => {
                return (
                  <div
                    className=" flex flex-col items-center mx-2"
                    key={item.name}
                  >
                    <div className="flex items-center ">
                      <img
                        className="mask mask-squircle w-32 h-32"
                        src={item.image}
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p>{item.name}</p>
                      <p>{item.price.toLocaleString()} 원</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </ConfirmModal>
      <InformModal dialogRef={zeroRef} inform="갯수를 골라주세요" />
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
