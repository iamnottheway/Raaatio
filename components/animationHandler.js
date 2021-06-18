import { useContext } from "react";
import CanvasComponent from "./canvasHandler";
import { RenderContext } from "../context/contexts";

import PropertiesBar from "./properties-bar";

import styled from "styled-components";

const AnimationComponent = () => {
  const context = useContext(RenderContext);
  const { renderParams } = context;

  return (
    <Wrapper>
      <CanvasComponent animationData={renderParams}></CanvasComponent>
      <PropertiesBar />
    </Wrapper>
  );
};

export default AnimationComponent;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "canvas sidebar";
  place-items: center;
  grid-gap: 20px;

  padding: 0 10%;

  .canvas {
    grid-area: canvas;
  }

  .sidebar {
    grid-area: sidebar;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-template-areas: "canvas" "sidebar";
    /* margin-top: 30%; */
  }
`;
