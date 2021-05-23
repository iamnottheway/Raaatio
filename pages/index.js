import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import Draggable from "react-draggable"; // The default
import Head from "next/head";

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
    }
  }

  return (
    <Wrapper>
      <Draggable>
        <Canvas ref={canvasRef}></Canvas>
      </Draggable>
      <Draggable cancel=".nodrag">
        <ButtonContainer>
          <Button className="nodrag" onClick={download} color="#383fff">
            Download
          </Button>
        </ButtonContainer>
      </Draggable>
      <EmailContainer>
        <Description>
          Updates on this project? Made by{" "}
          <a href="https://twitter.com/iamnottheway" target="_blank">
            jbnj
          </a>
        </Description>
        <a href="https://airtable.com/shrOLfyNZ6in20FAp" target="_blank">
          <Button>Hellz ya!</Button>
        </a>
      </EmailContainer>
    </Wrapper>
  );
};

const Description = styled.p`
  font-family: sans-serif;
  margin: 5px 0px;
`;

const EmailContainer = styled.div`
  position: fixed;
  top: 5%;
  right: 5%;
  background-color: #f9f9f9;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 20px;
`;

const AnimationComponent = () => {
  const [animParams, setAnimParams] = useState({
    n1: 0,
    n2: 0,
  });
  const [color, setColor] = useState("#fff");

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
  return (
    <>
      <Head>
        <title>NoiseIsNice - A very nice noise pattern generator</title>
        <meta
          name="title"
          content="NoiseIsNice - A very nice noise pattern generator"
        />
        <meta
          name="description"
          content="NoiseIsNice - A very nice noise pattern generator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://noiseisnice.com" />
        <meta
          property="og:title"
          content="NoiseIsNice - A very nice noise pattern generator"
        />
        <meta
          property="og:description"
          content="NoiseIsNice - A very nice noise pattern generator"
        />
        <meta property="og:image" content="https://noiseisnice.com/cover.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://noiseisnice.com" />
        <meta
          property="twitter:title"
          content="NoiseIsNice - A very nice noise pattern generator"
        />
        <meta
          property="twitter:description"
          content="NoiseIsNice - A very nice noise pattern generator"
        />
        <meta
          property="twitter:image"
          content="https://noiseisnice.com/cover.png"
        />
      </Head>

      <AnimationComponent />
    </>
  );
}

const Button = styled.button`
  margin: 10px 0px;
  width: 100%;
  padding: 20px 30px;
  border: none;
  background-color: ${(props) => (props.color ? props.color : "#000")};
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

const ButtonContainer = styled.div`
  padding: 20px;
  width: 300px;
  background-color: #f9f9f9;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
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
