import styled from "styled-components";

export const Section = styled.div`
  display: grid;
  padding: 5px;
  flex-direction: column;
  flex: 1;
  margin-top: 120px;
  margin-bottom: 180px;
  margin-right: 10px;
  grid-template-columns: repeat(3, 1fr);
`;

export const Container = styled.div`
  flex: 1;
  margin: 50px;
  height: 260px;
  position: relative;
  margin-bottm: 30px;
`;

export const Image = styled.img`
  min-height: 50vh;
  min-width: 100%;
  overflow: hidden;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  position: aboslute;
`;

export const Description = styled.h5`
  width: 100%;
  margin-top: 20px;
  padding-left: 50px;
  padding-right: 30px;
  align: justify;
`;

export const Title = styled.h1`
  font-size: 35px;
  position: absolute;
  top: 120px;
  color: black;
  margin-bottom: 40px;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;

export const Button = styled.button`
  border: none;
  padding: 10px;
  color: white;
  background-color: transparent;
  cursor: pointer;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  top: 130px;
  left: 25%;
  position: absolute;

  &:hover {
    background-color: black;
    transform: scale(1.1);
    border-radius: 20px;
  }
  transition: all 0.4s ease 0s;
`;
