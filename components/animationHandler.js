import { useContext } from "react";
import CanvasComponent from "./canvasHandler";
import { RenderContext } from "../context/renderContext";

import PropertiesBar from "./properties-bar";

const AnimationComponent = () => {
  const context = useContext(RenderContext);
  const { renderParams } = context;

  return (
    <>
      <CanvasComponent animationData={renderParams}></CanvasComponent>
      <PropertiesBar />
    </>
  );
};

export default AnimationComponent;
