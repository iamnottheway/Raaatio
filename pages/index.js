import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import Slider from "react-rangeslider";

import "react-rangeslider/lib/index.css";

const CanvasComponent = ({ animationData }) => {
  const canvasRef = useRef(undefined);
  const dbRef = useRef(undefined);
  const offscreenCanvasRef = useRef(undefined);
  const workerRef = useRef(undefined);

  useEffect(() => {
    if (canvasRef) {
      const { current: canvas } = canvasRef;
      // const { current: db } = dbRef;

      const offscreen = canvas.transferControlToOffscreen();
      offscreen.width = 1000;
      offscreen.height = 1000;
      const worker = new Worker("/sw.js");

      worker.postMessage({ canvas: offscreen }, [offscreen]);

      offscreenCanvasRef.current = offscreen;
      workerRef.current = worker;
    }
  }, []);

  useEffect(() => {
    if (offscreenCanvasRef && workerRef) {
      // const { current: offscreen } = offscreenCanvasRef;
      const { current: worker } = workerRef;
      // const { current: db } = dbRef;

      worker.postMessage({ type: "run_canvas", animData: animationData });
    }
  }, [animationData]);

  return (
    <Wrapper>
      <Canvas ref={canvasRef}></Canvas>
      <DrawingBoard ref={dbRef}></DrawingBoard>
    </Wrapper>
  );
};

const DrawingBoard = styled.div`
  width: 500px;
  height: 500px;
  border: 1px soild #000;
  display: none;
`;

const AnimationComponent = () => {
  const frameRef = useRef(undefined);
  const [animParams, setAnimParams] = useState({
    n1: 0,
    n2: 0,
  });

  const [value, setValue] = useState(1);

  function animate() {
    setAnimParams({
      ...animParams,
      n1: value,
      n2: value,
    });

    frameRef.current = requestAnimationFrame(animate);
  }

  const handleChange = (value) => {
    setValue(value);
    requestAnimationFrame(animate);
  };

  return (
    <>
      <CanvasComponent animationData={animParams}></CanvasComponent>
      <SettingsContainer>
        <Slider min={1} max={10} value={value} onChange={handleChange} />
      </SettingsContainer>
    </>
  );
};

export default function Index() {
  return <AnimationComponent />;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: blue;
  display: flex;
`;

const SettingsContainer = styled.div`
  padding: 20px;
  position: fixed;
  bottom: 50px;
  left: 50px;
  width: 300px;
  background-color: #f9f9f9;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

const Canvas = styled.canvas`
  background-color: red;
`;
