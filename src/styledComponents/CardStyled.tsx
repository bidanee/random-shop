import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 5rem;
`;
export const Title = styled.h2`
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 20px;
  font-weight: bold;
`;
export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2rem;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const ItemCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 200px;
  height: 250px;
  margin: 0.2rem;
  padding-top: 0.5rem;
  border: 4px solid #3ded97;
  border-radius: 16px;
`;

export const Img = styled.img`
  border-radius: 2rem;
  width: 150px;
  height: 150px;
  :hover {
    width: 160px;
    height: 160px;
  }
`;
export const DescDiv = styled.div`
  width: 100%;
  /* border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem; */
  /* background-color: #3ded97; */
  padding: 5px;
`;
export const ItemInfo = styled.div`
  margin-top: 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ItemP = styled.div`
  text-align: center;
  font-size: 18px;
`;
export const FillHeartICon = styled(AiFillHeart)`
  cursor: pointer;
`;
export const HeartICon = styled(AiOutlineHeart)`
  cursor: pointer;
`;
export const OpenTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-weight: 700;
  font-size: 16px;
  input {
    display: none;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  width: 56rem;
  height: 22rem;
`;
