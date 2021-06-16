import styled from "styled-components";
import { Title, Description, Outer } from "../landing-page-components/common";
import Button from "../landing-page-components/Button/button";

const Features = [
  {
    title: "Export unlimited patterns",
    desp: "NoiseWave doesn’t restrict you to a set number of downloads. You can download as many generative patterns as you want.",
  },
  {
    title: "High Resolution export (pro)",
    desp: "Looking for High resolution patterns? Fear not, NoiseWave let’s you export Hi-res patterns for upto 4K.",
  },
  {
    title: "Personal and Commercial use (pro)",
    desp: "Use generative patterns by NoiseWave on personal or commercial projects. Unlimited use and you don’t even need to attribute.",
  },
];

function FeatureItem({ title, desp }) {
  return (
    <FeatureContainer>
      <div>
        <FeatureHeading>{title}</FeatureHeading>
        <FeatureDescription>{desp}</FeatureDescription>
      </div>
    </FeatureContainer>
  );
}

const FeatureContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center; ;
`;

const FeatureHeading = styled.h3`
  font-family: Inter;
  font-weight: 500;
  font-size: 28px;
  line-height: 129.5%;
  margin: 10px 0;
  max-width: 300px;

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

const FeatureDescription = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 181.5%;
  margin: 0px 0;
  color: #7c7c7c;
  max-width: 350px;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export function Section3() {
  return (
    <Container>
      <Outer style={{ position: "relative" }}>
        <Wrapper>
          <ContentContainer>
            <div>
              <Title color="#000">
                Add unique pattern combinations to your product branding or
                website
              </Title>
              <Description color="#686868">
                NoiseWave doesn’t restrict you to a set number of downloads. You
                can download as many generative patterns as you want.
              </Description>
              <ButtonContainer>
                <Button label="try the editor"></Button>
              </ButtonContainer>
            </div>
          </ContentContainer>
          <GridContainer>
            {Features.map((x) => {
              return <FeatureItem title={x.title} desp={x.desp} />;
            })}
          </GridContainer>
        </Wrapper>
        <PropImage src="/static/landing-page/donut-pink.png"></PropImage>
      </Outer>
    </Container>
  );
}

const PropImage = styled.img`
  position: absolute;
  top: 5%;
  right: -10%;
  z-index: 1;
`;

const Container = styled.div`
  padding: 100px 0;
  background-color: #fffdf6;
  overflow-x: hidden;
`;

const GridContainer = styled.div`
  grid-area: features;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  grid-gap: 30px;
  margin-top: 100px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;

  button {
    margin-right: 20px !important;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: inherit;
  position: relative;
  z-index: 20;

  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "content content . ."
    "features features features features";

  @media (max-width: 1000px) {
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "content content content ."
      "features features features features";
  }

  @media (max-width: 500px) {
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "content content content content"
      "features features features features";
  }
`;

const ContentContainer = styled.div`
  grid-area: content;
  display: grid;
  place-items: center;

  div {
    > * {
      margin: 10px 0;
    }
  }
`;
