import styled from "styled-components";
import { Title, Description, Outer } from "../landing-page-components/common";
import Button from "../landing-page-components/Button/button";

export function Section2() {
  let images = [
    "/static/landing-page/img1.png",
    "/static/landing-page/img2.png",
    "/static/landing-page/img3.png",
    "/static/landing-page/img4.png",
    "/static/landing-page/img5.png",
    "/static/landing-page/img6.png",
    "/static/landing-page/img7.png",
    "/static/landing-page/img8.png",
  ];
  return (
    <Container>
      <Outer>
        <Wrapper>
          <ContentContainer>
            <div>
              <Title color="#000">
                Export High-resolution patterns, make interesting designs
              </Title>
              <Description color="#000">
                Raaatio lets you export unlimited High-resolution patterns that
                you can use in your projects.
              </Description>
              <ButtonContainer>
                <Button label="try for free" path="/app"></Button>
              </ButtonContainer>
            </div>
          </ContentContainer>
          <GridContainer>
            {images.map((x, i) => {
              return <ImageItem key={i} src={x} />;
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
  position: relative;
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
  height: 400px;
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
