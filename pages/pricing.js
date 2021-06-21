import { Pricing } from "../landing-page-components/pricing";
import { Layout } from "../landing-page-components/layout";
import styled from "styled-components";

export default function PricingPage() {
  return (
    <Layout>
      <Wrapper>
        <Pricing />
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f7ff;
`;
