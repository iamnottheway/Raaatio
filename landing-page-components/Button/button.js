import styled from "styled-components";

const Button = ({ label, textColor, bg, shadow }) => {
  return (
    <ButtonWrapper textColor={textColor} bg={bg} shadow={shadow}>
      {label ? label : "text"}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  background-color: ${(props) => (props.bg ? props.bg : "#4627FF")};
  box-shadow: ${(props) =>
    props.shadow ? props.shadow : "6px 6px 0px rgba(20, 29, 107, 0.25);"};
  border-radius: 1px;
  padding: 24px 60px;
  border: 1px solid #000;
  color: ${(props) => (props.textColor ? props.textColor : "#fff")};
  cursor: pointer;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
`;

export default Button;
