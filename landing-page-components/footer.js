import styled from "styled-components";
import { Outer } from "../landing-page-components/common";

export const Footer = () => {
  return (
    <FooterWrapper>
      <Outer>
        <Wrapper>
          <Text>hello</Text>
        </Wrapper>
      </Outer>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: #000;
`;

const Text = styled.div`
  color: #fff;
  font-size: 14px;
  font-family: Inter;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  background-color: inherit;
`;
