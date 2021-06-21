import styled from "styled-components";
import { Title, Outer } from "../landing-page-components/common";
import Button from "../landing-page-components/Button/button";
import { links } from "./Button/utitls";

export function PricingCard({ type = "free" }) {
  let data = {
    free: {
      title: "Free plan",
      desp: "Perfect for personal websites or personal projects",
      price: "$0 forever",

      features: [
        "Export Resolutions up to 800x800",
        "Personal use only",
        "More patterns (soon)",
      ],
    },
    pro: {
      title: "Pro plan",
      desp: "Perfect if you're looking for high quality patterns to use in client projects or a commercial website",
      price: "$60/year",
      features: [
        "High Resolution Export (up to 4k)",
        "Personal & Commercial use",
        "Premium patterns (soon)",
      ],
    },
  };
  return (
    <PricingCardWrapper>
      <div>
        <PricingTitle>{data[type].title}</PricingTitle>
        <PricingHeading>{data[type].price}</PricingHeading>
        <Text>{data[type].desp}</Text>
        <PricingList>
          {data[type].features.map((x, i) => {
            return <li key={i}>{x}</li>;
          })}
        </PricingList>
      </div>
      {type === "free" && (
        <Button
          label="try for free"
          bg="#fff"
          textColor="#000"
          path="/app"
        ></Button>
      )}
      {type === "pro" && (
        <Button
          label="Upgrade for $60"
          bg="#4627FF"
          textColor="#fff"
          path={links.proLink}
          self={false}
        ></Button>
      )}
    </PricingCardWrapper>
  );
}

const Text = styled.p`
  font-size: 14px;
  line-height: 180%;
  margin: 5px 0;
  font-family: "Inter", sans-serif;
`;

const PricingTitle = styled.h1`
  font-size: 20px;
  font-family: Inter;
`;

const PricingHeading = styled.h2`
  font-family: Inter;
  margin: 10px 0;
  font-size: 30px;
`;

const PricingList = styled.ul`
  /* list-style: none; */
  margin: 0px;
  padding: 0;
  padding-left: 16px;

  li {
    margin: 10px 0;
    font-family: Inter;
    font-size: 14px;
  }
`;

const PricingCardWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 10px 10px 0px rgba(30, 29, 96, 0.45);
  border-radius: 2px;
  padding: 30px 20px;
  width: 100%;
  max-height: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export function Pricing() {
  return (
    <Container>
      <Outer style={{ position: "relative" }}>
        <Wrapper>
          <ContentContainer>
            <div>
              <Title color="#000">
                Not sure if you wanna buy it yet? Try the generator first
              </Title>

              <ButtonContainer>
                <Button label="try for free" path="/app"></Button>
              </ButtonContainer>
            </div>
          </ContentContainer>
          <PricingContainer>
            <PricingCard />
          </PricingContainer>
          <PricingContainer2>
            <PricingCard type="pro" />
          </PricingContainer2>
        </Wrapper>
        <PropImage src="/static/landing-page/donut-orange.png"></PropImage>
      </Outer>
    </Container>
  );
}

const PropImage = styled.img`
  position: absolute;
  top: 5%;
  left: 10%;
  z-index: 1;
`;

const Container = styled.div`
  padding: 15% 0;
  background-color: #f4f7ff;
  overflow-x: hidden;
  height: auto;

  @media (max-width: 500px) {
    padding: 45% 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;

  button {
    margin-right: 20px !important;
  }
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 20;
  width: 100%;
  height: 100%;
  background-color: inherit;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  grid-template-areas: "content content pricingCard pricingCard2";

  @media (max-width: 1000px) {
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "content content . ."
      "pricingCard pricingCard pricingCard2 pricingCard2 ";
  }

  @media (max-width: 600px) {
    grid-template-rows: auto 1fr 1fr;
    grid-template-areas:
      "content content . ."
      "pricingCard pricingCard pricingCard pricingCard"
      "pricingCard2 pricingCard2 pricingCard2 pricingCard2";
  }

  @media (max-width: 400px) {
    grid-template-areas:
      "content content content content"
      "pricingCard pricingCard pricingCard pricingCard"
      "pricingCard2 pricingCard2 pricingCard2 pricingCard2";
  }
`;

const ContentContainer = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h1 {
    max-width: 400px;
  }

  div {
    > * {
      margin: 10px 0;
    }
  }
`;

const PricingContainer = styled.div`
  grid-area: pricingCard;
  display: grid;
  place-items: center;
`;

const PricingContainer2 = styled.div`
  grid-area: pricingCard2;
  display: grid;
  place-items: center;
`;
