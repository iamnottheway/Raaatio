import styled from "styled-components";
import Popup from "reactjs-popup";

const ActivatePopup = () => {
  return (
    <Popup trigger={<ActionButton>Activate Pro</ActionButton>} modal nested>
      {(close) => (
        <PopupContainer>
          <Text>License activation</Text>
          <InputField placeholder="KEY"></InputField>
          <ActionButton
            style={{ width: "100%", height: 60, margin: "10px 0px" }}
          >
            Activate
          </ActionButton>
        </PopupContainer>
      )}
    </Popup>
  );
};

const Pricingpopup = () => {
  return (
    <Popup trigger={<ActionButton>Pricing</ActionButton>} modal nested>
      {(close) => (
        <PopupContainer>
          <Text>Pricing </Text>
          <Heading>$60 (1 year license)</Heading>
          <List>
            <li>Export at a Higher resolution</li>
            <li>More patterns (soon)</li>
            <li>Personal and Commercial use</li>
          </List>

          <ActionButton
            bg="#6082FB"
            color="#fff"
            style={{ width: "100%", height: 60, margin: "10px 0px" }}
          >
            Buy Pro for $60
          </ActionButton>
        </PopupContainer>
      )}
    </Popup>
  );
};

const Heading = styled.h1`
  margin: 0px;
`;

const List = styled.ul`
  margin: 0px;
  font-size: 16px;
  padding: 0px;
  list-style: none;

  li {
    margin: 10px 0;
    font-size: 16px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 140%;
  margin: 5px 0;
`;

const InputField = styled.input`
  width: 100%;
  height: auto;
  padding: 10px;
  margin: 4px 0px;
  border: 1px solid #dcdce9;
  box-sizing: border-box;
  border-radius: 2px;

  :focus {
    outline-color: #6171ff;
  }
`;

const PopupContainer = styled.div`
  width: 350px;
  height: auto;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #000000;
  box-shadow: 10px 10px 0px rgba(30, 29, 96, 0.45);
  border-radius: 2px;
  margin: 0px 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 350px) {
    width: 270px;
  }
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <LogoContainer>
        <p>noiseisnice</p>
      </LogoContainer>
      <ButtonContainer>
        <Pricingpopup></Pricingpopup>
        <ActivatePopup></ActivatePopup>
        <ActionButton bg="#6082FB" color="#fff">
          Buy Pro for $60
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
