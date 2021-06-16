import styled from "styled-components";
import { Title, Description, Outer } from "../landing-page-components/common";
import Button from "../landing-page-components/Button/button";

export function Section2() {
  let images = [
    "/static/landing-page/1.png",
    "/static/landing-page/2.png",
    "/static/landing-page/3.png",
    "/static/landing-page/4.png",
    "/static/landing-page/1.png",
    "/static/landing-page/2.png",
    "/static/landing-page/3.png",
    "/static/landing-page/4.png",
  ];
  return (
    <Container>
      <Outer>
        <Wrapper>
          <ContentContainer>
            <div>
              <Title color="#000">
                Add unique pattern combinations to your product branding or
                website
              </Title>
              <Description color="#000">
                NoiseWave gives you the ability to generate unique patterns
                using noise.
              </Description>
              <ButtonContainer>
                <Button label="try the editor"></Button>
              </ButtonContainer>
            </div>
          </ContentContainer>
          <GridContainer>
            {images.map((x) => {
              return <ImageItem src={x} />;
            })}
          </GridContainer>
        </Wrapper>
      </Outer>
    </Container>
  );
}

const Container = styled.div`
  padding: 100px 0;
  background-color: #fff6f6;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: inherit;

  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "content content . ."
    "images images images images";
  grid-gap: 30px;

  @media (max-width: 1000px) {
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "content content content content"
      "images images images images";
  }

  @media (max-width: 500px) {
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "content content content content"
      "images images images images";
  }
`;

const ContentContainer = styled.div`
  grid-area: content;
  display: grid;
  place-items: center;

  div {
    p {
      max-width: 500px !important;
    }
    > * {
      margin: 10px 0;
    }
  }
`;

const ImageItem = styled.img`
  width: 100%;
  height: 450px;
  background-color: #aaa;
  overflow: hidden;
`;

const GridContainer = styled.div`
  grid-area: images;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;

  button {
    margin-right: 20px !important;
  }
`;
