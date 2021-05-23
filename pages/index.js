import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import Draggable from "react-draggable"; // The default

const CanvasComponent = ({ animationData }) => {
  const canvasRef = useRef(undefined);
  const offscreenCanvasRef = useRef(undefined);
  const workerRef = useRef(undefined);

  useEffect(() => {
    if (canvasRef) {
      const { current: canvas } = canvasRef;

      const offscreen = canvas.transferControlToOffscreen();
      offscreen.width = 600;
      offscreen.height = 600;
      const worker = new Worker("/sw.js");

      worker.postMessage({ canvas: offscreen }, [offscreen]);

      offscreenCanvasRef.current = offscreen;
      workerRef.current = worker;
    }
  }, []);

  useEffect(() => {
    if (offscreenCanvasRef && workerRef) {
      const { current: worker } = workerRef;

      worker.postMessage({ type: "run_canvas", animData: animationData });
    }
  }, [animationData]);

  function downloadURI(uri, name) {
    let link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function download(e) {
    if (workerRef && canvasRef) {
      const { current: canvas } = canvasRef;

      let img = canvas.toDataURL("image/png");
      downloadURI(img, "download.png");

      // const { current: worker } = workerRef;
      // worker.postMessage({ type: "download" });
    }
  }

  return (
    <Wrapper>
      <Canvas ref={canvasRef}></Canvas>
      <Button className="nodrag" onClick={download}>
        Download
      </Button>
    </Wrapper>
  );
};

const AnimationComponent = () => {
  const [animParams, setAnimParams] = useState({
    n1: 0,
    n2: 0,
  });
  const [color, setColor] = useState("#aabbcc");

  function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  useEffect(() => {
    setAnimParams({
      ...animParams,
      n1: randomNumber(1, 300),
      n2: randomNumber(1, 300),
      distortion: randomNumber(1, 300),
      xMargin: randomNumber(1, 300),
      color: color,
    });
  }, []);

  function randomize() {
    setAnimParams({
      ...animParams,
      n1: randomNumber(1, 300),
      n2: randomNumber(1, 300),
      distortion: randomNumber(1, 300),
      xMargin: randomNumber(1, 300),
      color: color,
    });
  }

  return (
    <>
      <CanvasComponent animationData={animParams}></CanvasComponent>
      <Draggable cancel=".nodrag">
        <SettingsContainer>
          <Button className="nodrag" onClick={randomize}>
            Randomize
          </Button>
          <div>
            <HexColorPicker
              className="nodrag"
              color={color}
              onChange={setColor}
            />
          </div>
        </SettingsContainer>
      </Draggable>
    </>
  );
};

export default function Index() {
  return <AnimationComponent />;
}

const Button = styled.button`
  margin: 10px 0px;
  width: 100%;
  padding: 20px 30px;
  border: none;
  background-color: #000;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  max-width: 300px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #f9f9f9;
  display: grid;
  place-items: center;
`;

const SettingsContainer = styled.div`
  padding: 20px;
  position: fixed;
  bottom: 50px;
  left: 50px;
  width: 300px;
  background-color: #f9f9f9;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  .react-colorful {
    width: 100%;
  }
`;

const Canvas = styled.canvas`
  background-color: #000;
  width: 600px;
  height: 600px;
`;
