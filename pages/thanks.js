import { Layout } from "../landing-page-components/layout";
import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";

export default function Thankyou() {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Raaatio - Thank you for purchasing Raaatio Pro</title>
        <meta
          name="title"
          content="Raaatio - Thank you for purchasing Raaatio Pro"
        />
        <meta
          name="description"
          content="Raaatio - Thank you for purchasing Raaatio Pro"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://raaatio.me/" />
        <meta
          property="og:title"
          content="Raaatio - Thank you for purchasing Raaatio Pro "
        />
        <meta
          property="og:description"
          content="Raaatio - Thank you for purchasing Raaatio Pro"
        />
      </Head>
      <Wrapper>
        <FaqCardContainer>
          <Heading>Thank you for purchasing Raaatio Pro!</Heading>
          <Description>
            Your License code has been sent to the email you used to buy Raaatio
            Pro with. You can use the license to activate Raaatio Pro by
            clicking on the activate button in the app header.{" "}
            <a href="/app">Go to app</a>
          </Description>
          {/* <img src="/otto-pro-activation-example.png"></img> */}
        </FaqCardContainer>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f4f7ff;
`;

const FaqCardContainer = styled.div`
  max-width: 800px;
  width: 100%;
  height: 100%;
  /* padding: 10px; */
  background: inherit;
  border-radius: 20px;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;

const Heading = styled.h1`
  font-size: ${(props) => (props.size ? `${props.size}px` : "30px")};
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  line-height: 154.5%;
  margin: 5px 0;
  /* or 51px */

  color: #000000;
`;

const Description = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 187.5%;
  margin: 0px;
`;
