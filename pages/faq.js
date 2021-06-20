import FaqSection from "../landing-page-components/faq";
import { Layout } from "../landing-page-components/layout";
import styled from "styled-components";

export default function Faq() {
  return (
    <Layout>
      <Wrapper>
        <FaqSection />
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
  padding: 10%;
`;
