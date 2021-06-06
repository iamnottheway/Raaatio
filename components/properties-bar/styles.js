import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: all 0.2s;
`;

export const RowContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;

  @media (max-width: 400px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 5px;
  }
`;

export const InputField = styled.input`
  width: 100%;
  height: 30px;
  padding: 10px;
  margin: 4px 0px;
  border: 1px solid #dcdce9;
  box-sizing: border-box;
  border-radius: 2px;

  :focus {
    outline-color: #6171ff;
  }
`;

export const InputFieldLabel = styled.label`
  margin: 0px;
  margin: 5px 0px;
  font-size: 10px;
  color: #333;
  text-transform: uppercase;
  font-family: sans-serif;
  font-weight: 500;
`;

export const SettingsContainer = styled.div`
  padding: 20px;
  /* position: fixed;
  bottom: 50px;
  left: 50px; */
  width: 100%;
  max-width: 300px;
  background-color: #fff;

  border: 1px solid #000000;
  box-shadow: 10px 10px 0px rgba(30, 29, 96, 0.45);
  border-radius: 2px;

  * {
    transition: height 0.1s ease-in;
  }
`;

export const Button = styled.button`
  margin: 10px 0px;
  width: 100%;
  padding: 20px 30px;
  border: none;
  background-color: ${(props) => (props.color ? props.color : "#fff")};
  color: ${(props) => (props.color ? "#fff" : "#000")};
  border-radius: 6px;
  cursor: pointer;
  max-width: 300px;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 6px 6px 0px rgba(20, 29, 107, 0.25);
  border-radius: 1px;

  :focus {
    outline-color: #6171ff;
  }

  :active,
  :hover {
    box-shadow: 2px 2px 0px rgba(20, 29, 107, 0.25);
  }
`;

export const ColorSquare = styled.div`
  background-color: ${(props) => props.color};
  margin: 0px;
  margin-right: 10px;
  width: 28px;
  height: 28px;
  cursor: pointer;
  border: 1px solid #000000;
  box-shadow: 3px 3px 0px rgba(30, 29, 96, 0.45);
  border-radius: 1px;
`;

export const Picker = styled.div`
  position: relative;
  padding: 10px;
  border: 1px solid rgba(39, 37, 117, 0.16);
  border-radius: 2px;
  margin: 5px 0px;

  p {
    margin: 0px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #000000;
    text-transform: uppercase;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .popover {
    position: absolute;
    left: 50px;
    top: 15px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    z-index: 10;
  }
`;
