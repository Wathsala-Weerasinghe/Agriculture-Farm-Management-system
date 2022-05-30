import styled from "styled-components";

export const Section = styled.div`
  display: grid;
  padding: 5px;
  flex-direction: column;
  flex: 1;
  margin-top: 120px;
  margin-bottom: 100px;
  margin-right: 10px;
`;

export const Container = styled.div``;

export const Image = styled.img`
  height: 80px;
  width: 80%;
  overflow: hidden;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  position: aboslute;
`;

export const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  margin: 10px;
  top: 70%;
  padding-left: 30px;
`;

export const ProductName = styled.h4`
  padding-left: 1px;
`;

export const Size = styled.h4`
  padding-left: 10px;
  width: 50px;
`;

export const Price = styled.h4`
  top: 83%;
  position: absolute;
  display: flex;
  padding-right: 50%;
`;

export const AddButton = styled.button`
  border: none;
  background-color: white;
  top: 250px;
  position: absolute;
  right: 110px;
  padding: 0px;
  &:hover {
    background-color: black;
    transform: scale(1);
    border-radius: 870px;
  }
  transition: all 0.4s ease 0s;
`;

export const Label = styled.h5`
  position: absolute;
  right: 140px;
  top: 250px;
`;

export const DeleteButton = styled.button`
  position: relative;
  border: none;
  background-color: white;
  top: 5px;
  right: 5px;
  cursor: pointer;
  &:hover {
    background-color: black;
    transform: scale(1.1);
    border-radius: 10px;
  }
  transition: all 0.4s ease 0s;
`;

export const EditButton = styled.button`
  position: relative;
  border: none;
  background-color: white;
  top: 4px;
  right: 0px;
  cursor: pointer;
  &:hover {
    background-color: black;
    transform: scale(1.1);
    border-radius: 10px;
  }
  transition: all 0.4s ease 0s;
`;
