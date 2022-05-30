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

export const Table = styled.table`
  width: 250px;
  min-height: 150px;
  margin-left: 250px;
  position: absolute;
  top: 450px;
`;

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

export const Description = styled.h4`
  width: 100%;
  margin-top: 20px;
  padding-left: 50px;
  padding-right: 30px;
  align: justify;
`;

export const Title = styled.h2`
  font-size: 35px;
  position: absolute;
  top: 250px;
  color: black;
  margin-bottom: 40px;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;

export const Button = styled.button`
  border: none;
  padding: 10px;
  color: black;
  background-color: transparent;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  top: 230px;
  left: 65%;
  position: absolute;

  &:hover {
    background-color: black;
    transform: scale(1.1);
    border-radius: 20px;
    color: white;
  }
  transition: all 0.4s ease 0s;
`;

export const DeleteButton = styled.button`
  position: relative;
  border: none;
  background-color: white;
  top: 5px;
  right: 20px;
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
  top: -28px;
  right: -20px;
  cursor: pointer;
  &:hover {
    background-color: black;
    transform: scale(1.1);
    border-radius: 10px;
  }
  transition: all 0.4s ease 0s;
`;

export const AddButton = styled.button`
  border: none;
  background-color: white;
  top: 240px;
  position: absolute;
  right: 160px;
  padding: 0px;
  cursor: pointer;
  &:hover {
    background-color: black;
    transform: scale(1);
    border-radius: 870px;
  }
  transition: all 0.4s ease 0s;
`;

export const Label = styled.h5`
  position: absolute;
  right: 190px;
  top: 240px;
`;
export const Container = styled.div`
  margin-top: 30px;
`;

export const ReportButton = styled.h5`
  border: none;
  padding: 10px;
  color: black;
  background-color: transparent;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  top: 230px;
  left: 55%;
  position: absolute;

  &:hover {
    background-color: black;
    transform: scale(1.1);
    border-radius: 20px;
    color: white;
  }
  transition: all 0.4s ease 0s;
`;
