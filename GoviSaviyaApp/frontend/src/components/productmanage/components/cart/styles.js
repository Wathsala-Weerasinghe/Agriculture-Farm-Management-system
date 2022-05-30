import styled from "styled-components";

export const Container = styled.div`
  padding: 50px;
  display: flex;
  margin-top: 90px;
  margin-bottom: 30px;
  position: relative;
`;

export const Wrapper = styled.div`
  padding: 10px;
  position: relative;
`;

export const Title = styled.h1`
  font-weight: 300;
  text-align: left;
`;

export const Top = styled.div`
  width: 100%;
  padding: 10px;
`;

export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  background-color: black;
  color: white;
  margin-left: 84%;
  margin-right: 0px;
  width: 200px;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  postion: relative;
  width: 100%;
`;

export const Info = styled.div`
  flex: 3;
  margin-right: 100px;
  min-width: 70%;
  position: relative;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 70%;
  position: relative;
`;

export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  margin-right: -105px;
`;

export const Image = styled.img`
  width: 200px;
`;

export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProductName = styled.span`
  font-size: 20px;
  font-weight: 400;
  margin-top: -15px;
`;

export const Size = styled.span`
  font-size: 20px;
  font-weight: 400;
  margin-top: 15px;
`;

export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 400;
  margin-top: -30px;
`;

export const Quantity = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-left: 15px;
  margin-top: 5px;
`;

export const Price = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-top: -2px;
`;

export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 40vh;
  width: 700px;
`;

export const SummaryTitle = styled.h3`
  font-weight: 500;
  margin-left: 0px;
`;

export const SummaryItem = styled.div`
  margin: 30px 45px;
  display: flex;
  font-weight: 500;
  font-size: 24px;
`;

export const SummaryText = styled.div`
  margin-right: 30px;
`;

export const TotalPrice = styled.span``;

export const CheckButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  margin-top: 15px;
`;

export const AddButton = styled.button`
  top: 8px;
  position: relative;
  margin: 10px;
  left: 8px;
  padding: 2px;
  border: none;
  cursor: pointer;
`;

export const RemoveButton = styled.button`
  top: 8px;
  position: relative;
  margin: 10px;
  left: 10px;
  padding: 2px;
  border: none;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  position: relative;
  border: none;
  background-color: white;
  top: -5px;
  left: 750px;
  cursor: pointer;
  height: 10px;
`;
