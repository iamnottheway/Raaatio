import styled from "styled-components";
import Link from "next/link";

const Button = ({ label, textColor, bg, shadow, path }) => {
  return (
    <>
      {path ? (
        <Link href={path}>
          <ButtonWrapper textColor={textColor} bg={bg} shadow={shadow}>
            {label ? label : "text"}
          </ButtonWrapper>
        </Link>
      ) : (
        <a href="https://gum.co/XPQDt" target="_blank">
          <ButtonWrapper textColor={textColor} bg={bg} shadow={shadow}>
            {label ? label : "text"}
          </ButtonWrapper>
        </a>
      )}
    </>
  );
};

const ButtonWrapper = styled.button`
  background-color: ${(props) => (props.bg ? props.bg : "#4627FF")};
  box-shadow: ${(props) =>
    props.shadow ? props.shadow : "6px 6px 0px rgba(20, 29, 107, 0.25);"};
  border-radius: 1px;
  padding: 20px 20px;
  border: 1px solid #000;
  color: ${(props) => (props.textColor ? props.textColor : "#fff")};
  cursor: pointer;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  border-radius: 2px;

  :active {
    box-shadow: 1px 1px 0px rgba(20, 29, 107, 0.1);
  }
`;

export default Button;
