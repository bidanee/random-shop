import styled from "styled-components";

export const List = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 5rem;
`;
export const Title = styled.h2`
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 20px;
`;
export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  border: 1px solid black;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const ItemCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 22%;
  border: 1px solid black;
  margin: 0.5rem;
`;
export const Img = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
`;