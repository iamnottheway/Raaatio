import styled from "styled-components";
import { Outer } from "../landing-page-components/common";

export const Footer = () => {
  return (
    <FooterWrapper>
      <Outer>
        <Wrapper>
          <List>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms and Condition</li>
          </List>
        </Wrapper>
        <hr color="#2C2C2C"></hr>
        <Text>Copyright &#169; Joel Benjamin</Text>
      </Outer>
    </FooterWrapper>
  );
};

const List = styled.ul`
  color: #fff;
  list-style: none;
  padding: 0px;
  font-family: Inter;
  font-size: 12px;

  li {
    margin: 10px 0;
  }
`;

const FooterWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #000;
  padding: 30px 0;
`;

const Text = styled.div`
  color: #fff;
  font-size: 12px;
  font-family: Inter;
  padding: 20px 0;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  grid-gap: 30px;
`;
