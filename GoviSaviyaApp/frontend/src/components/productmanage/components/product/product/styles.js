import styled from "styled-components";

export const Container = styled.div`
  padding: 50px;
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const ImageContainer = styled.div`
  margin: 20px;
  width: 50%;
  margin-right: 10px;
`;

export const Image = styled.img`
  width: 90%;
  height: 100%;
`;

export const InfoContainer = styled.div`
  margin: 15px;
  top: 0px;
  width: 37%;
  height: 350px;
  background-color: #f5fbfd;
  position: relative;
  padding: 20px;
`;

export const Title = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  margin: 10px;
  top: 0px;
`;

export const ProductName = styled.h2`
  position: absolute;
  top: 0px;
`;

export const Size = styled.h2`
  position: relative;
  padding-left: 250px;
  top: 0;
`;

export const Price = styled.h3`
  top: 62px;
  font-size: 20px;
  position: relative;
  margin: 10px;
`;

export const Quantity = styled.h3`
  top: 85px;
  font-size: 20px;
  position: relative;
  margin: 10px;
`;

export const AddButton = styled.button`
  top: 40px;
  position: relative;
  margin: 10px;
  left: 128px;
  padding: 2px;
  border: none;
  cursor: pointer;
`;

export const RemoveButton = styled.button`
  top: 40px;
  position: relative;
  margin: 10px;
  left: 110px;
  padding: 2px;
  border: none;
  cursor: pointer;
`;

export const TotalPrice = styled.h3`
  top: 50px;
  position: relative;
  margin: 10px;
`;

export const ButtonBuy = styled.button`
  top: 80px;
  left: 50px;
  position: relative;
  width: 150px;
  background-color: #008cba;
  border: none;
  border-radius: 5px;
  padding: 16px 32px;
  text-align: center;
  color: white;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
`;

export const ButtonAdd = styled.button`
  top: 80px;
  position: relative;
  left: 80px;
  width: 150px;
  background-color: #008cba;
  border: none;
  border-radius: 5px;
  padding: 16px 32px;
  text-align: center;
  color: white;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
`;
