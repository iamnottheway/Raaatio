import styled from "styled-components";
import { Title, Description, Outer } from "../landing-page-components/common";
import Button from "../landing-page-components/Button/button";

export function PricingCard({ type = "free" }) {
  let data = {
    free: {
      title: "Free plan",
      price: "$0 forever",
      features: [
        "Export Resolutions upto 800x800",
        "Personal use only",
        "More patterns (soon)",
      ],
    },
    pro: {
      title: "Pro plan",
      price: "$60 per year",
      features: [
        "High Resolution Export (upto 4k)",
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
        <PricingList>
          {data[type].features.map((x) => {
            return <li>{x}</li>;
          })}
        </PricingList>
      </div>
      {type === "free" && (
        <Button label="try the editor" bg="#fff" textColor="#000"></Button>
      )}
      {type === "pro" && (
        <Button label="Upgrade for $60" bg="#4627FF" textColor="#fff"></Button>
      )}
    </PricingCardWrapper>
  );
}

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
  list-style: none;
  margin: 0px;
  padding: 0;

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
  padding: 50px 20px;
  padding-top: 100px;
  width: 100%;
  height: 450px;
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
                Stop waiting <br></br> try the editor out
              </Title>

              <ButtonContainer>
                <Button label="try the editor"></Button>
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
  padding: 150px 0;
  background-color: #f4f7ff;
  overflow-x: hidden;
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
