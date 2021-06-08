import styled from "styled-components";

export const Button = styled.button`
  margin: 10px 0px;
  width: 100%;
  padding: 20px 30px;
  border: none;
  background-color: ${(props) => (props.color ? props.color : "#000")};
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  max-width: 300px;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  grid-area: canvas;
`;

export const ButtonContainer = styled.div`
  padding: 20px;
  width: 300px;
  background-color: #f9f9f9;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const Canvas = styled.canvas`
  background-color: #fff;
  max-width: 600px;
  max-height: 600px;
  width: 100%;
  height: 100%;

  box-sizing: border-box;
`;

export const CanvasContainer = styled.div`
  padding: 5px;
  border: 1px solid #000000;
  box-shadow: 10px 10px 0px rgba(30, 29, 96, 0.4);
  border-radius: 2px;
  background-color: #fff;
  box-sizing: border-box;
`;
