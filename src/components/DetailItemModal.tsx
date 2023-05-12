import { useState } from "react";
import styled from "styled-components";

export const ModalContainer = styled.div`
  // Modal을 구현하는데 전체적으로 필요한 CSS를 구현
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ModalBackdrop = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
  z-index: 1; //위치지정 요소
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ModalBtn = styled.button`
  background-color: var(--coz-purple-600);
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ExitBtn = styled(ModalBtn)`
  background-color: #4000c7;
  border-radius: 10px;
  text-decoration: none;
  margin: 10px;
  padding: 5px 10px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  width: 500px;
  height: 200px;
  background-color: #ffffff;
  > div.desc {
    margin: 50px;
    font-size: 20px;
    color: var(--coz-purple-600);
  }
`;

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ModalContainer>
        <ModalBtn> Open Modal</ModalBtn>

        {isOpen ? (
          <ModalBackdrop>
            <ModalView onClick={(e) => e.stopPropagation()}>
              <ExitBtn>x</ExitBtn>
              <div className="desc">HELLO FEJIGU!</div>
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
};
