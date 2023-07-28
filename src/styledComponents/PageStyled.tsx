import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
export const PageContainer = styled.div`
  ${tw`w-full h-full`}
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

export const CartPageContainer = styled.div`
  ${tw`justify-center items-center w-11/12`}
  padding: 3rem;
  display: flex;
  flex-direction: column;
`;

export const CartTitle = styled.h2`
  text-align: center;
  font-size: 30px;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

export const CartItemContainer = styled.div`
  ${tw`w-11/12 flex flex-col justify-start`}
`;

export const ItemBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  margin: 0.5rem;
  width: 17.5rem;
  height: 9.5rem;
  border-radius: 2rem;
`;

export const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CartList = styled.div`
  ${tw`flex justify-start`}
  flex-wrap: wrap;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
`;
export const Button = styled.button`
  margin: 0 0.5rem;
`;

export const ItemInfoP = styled.p`
  margin: 0.5rem 0.5rem;
`;

export const CartImg = styled.img`
  border-radius: 2rem;
  width: 150px;
  height: 150px;
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const PriceContainer = styled.p`
  margin-bottom: 1rem;
`;
export const Total = styled.span`
  margin-right: 0.5rem;
`;

export const NoCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem;
  width: 50rem;
  height: 30rem;
  background-color: #f8f1f1;
  border-radius: 1rem;
  box-shadow: 1px 2px 4px 3px #c0c0c0;
  padding: 2rem;
`;

export const NotIn = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #025464;
  margin-bottom: 1rem;
`;

export const GoBtn = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #f8f1f1;
  background-color: #025464;
  padding: 1rem;
  border-radius: 1rem;
  :hover {
    font-size: 2rem;
  }
`;
