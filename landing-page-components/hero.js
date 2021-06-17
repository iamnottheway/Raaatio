import styled from "styled-components";
import { Title, Description, Outer } from "../landing-page-components/common";
import Button from "../landing-page-components/Button/button";

export function Hero() {
  return (
    <HeroWrapper>
      <Outer style={{ position: "relative" }}>
        <Wrapper>
          <HeroContentContainer>
            <div>
              <Title color="#fff">
                Generative patterns for your app, website or product branding{" "}
              </Title>
              <Description color="#fff">
                NoiseWave gives you the ability to generate unique patterns
                using noise.
              </Description>
              <ButtonContainer>
                <Button label="try the editor" path="/app"></Button>
                <Button label="buy for $60" bg="#fff" textColor="#000"></Button>
              </ButtonContainer>
            </div>
          </HeroContentContainer>
        </Wrapper>
        <PropImage src="/static/landing-page/hero-bg-prop.png"></PropImage>
      </Outer>
    </HeroWrapper>
  );
}

const PropImage = styled.img`
  position: absolute;
  top: -100%;
  right: -10%;
  z-index: 0;

  @media (max-width: 600px) {
    /* width: 500px; */
    right: -100%;
  }
`;

const HeroWrapper = styled.div`
  padding: 200px 0;
  background-color: #000;
  overflow: hidden;

  @media (max-width: 1000px) {
    padding: 20% 0;
  }

  @media (max-width: 500px) {
    padding: 50px 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;

  button {
    margin-right: 20px !important;

    @media (max-width: 500px) {
      margin: 0;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 3;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: "content content image image";
  grid-gap: 30px;

  @media (max-width: 1000px) {
    grid-template-rows: auto 1fr;

    grid-template-areas:
      "content content content ."
      "image image image image ";
  }

  @media (max-width: 500px) {
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "content content content content"
      "image image image image ";
  }
`;

const HeroContentContainer = styled.div`
  grid-area: content;
  display: grid;
  place-items: center;

  @media (max-width: 500px) {
    place-items: flex-start;
  }

  div {
    > * {
      margin: 10px 0;
    }

    @media (max-width: 500px) {
      margin: 0px;
      display: flex;
      flex-direction: column;
    }
  }
`;

const HeroImageContainer = styled.div`
  grid-area: image;
  display: grid;
  place-items: center;
`;
