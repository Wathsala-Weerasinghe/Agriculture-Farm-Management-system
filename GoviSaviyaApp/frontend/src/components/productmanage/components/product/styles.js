import styled from "styled-components";

export const Section = styled.div`
  padding: 10px;
  display: grid;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 15%;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
`;

export const Slide = styled.div`
  height: 70%;
  padding: 10px;
  width: 15%;
  display: flex;
  flex-direction: column:
`;

export const Container = styled.div`
  margin: 20px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  padding: 0px;
`;

export const Title = styled.h1`
  color: black;
  padding: 10px;
  margin-top: 20px;
  margin-left: 40%;
`;

export const Image = styled.img`
  height: 60%;
  width: 100%;
  position: relative;
  margin: 10px;
  padding-left: 30px;
  right: 10px;
  top: -50px;
  margin-bottom: 10px;
`;

export const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 10px;
  top: 70%;
  padding-left: 30px;
`;

export const ProductName = styled.h5`
  padding-left: 10px;
`;

export const Size = styled.h5`
  padding-left: 10px;
`;

export const Price = styled.h5`
  top: 83%;
  position: absolute;
  display: flex;
  padding-right: 50%;
`;

export const Button = styled.button`
  border: none;
  padding: 15px;
  width: 80px;
  background-color: #008cba;
  color: black;
  cursor: pointer;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  top: 79%;
  left: 68%;
  position: absolute;
  border-radius: 10%;
`;
