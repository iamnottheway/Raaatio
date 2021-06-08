import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderWrapper>
      <LogoContainer>
        <p>noiseisnice</p>
      </LogoContainer>
      <ButtonContainer>
        <ActionButton>Activate Pro</ActionButton>
        <ActionButton bg="#6082FB" color="#fff">
          Buy Pro
        </ActionButton>
      </ButtonContainer>
    </HeaderWrapper>
  );
};

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 50px;
  background-color: #fff;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #000000;
  box-shadow: 0px 10px 0px rgba(49, 46, 205, 0.21);
  padding: 10px 7%;
  margin: 0 auto;
  z-index: 10;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ActionButton = styled.button`
  margin: 0px 5px;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 4px 4px 0px rgba(20, 29, 107, 0.25);
  border-radius: 1px;
  background: ${(props) => (props.bg ? props.bg : "#fff")};
  color: ${(props) => (props.color ? props.color : "#000")};
  padding: 10px 20px;
  cursor: pointer;

  :active {
    box-shadow: 2px 2px 0px rgba(20, 29, 107, 0.25);
  }
`;
