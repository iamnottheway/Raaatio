import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import Draggable from "react-draggable"; // The default
import Head from "next/head";

const CanvasComponent = ({ animationData }) => {
  const canvasRef = useRef(undefined);
  const offscreenCanvasRef = useRef(undefined);
  const workerRef = useRef(undefined);
  const [offscreenTransfered, setOffscreenTransfered] = useState(false);

  useEffect(() => {
    if (canvasRef && !offscreenTransfered) {
      const { current: canvas } = canvasRef;

      const offscreen = canvas.transferControlToOffscreen();
      offscreen.width = 600;
      offscreen.height = 600;
      const worker = new Worker("/sw.js");

      worker.postMessage({ canvas: offscreen }, [offscreen]);
      setOffscreenTransfered(true);

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
          Hi! If you'd like an update on this project, please leave you're
          email. Made by {""}
          <a href="https://twitter.com/iamnottheway" target="_blank">
            @iamnottheway
          </a>
        </Description>
        <a href="https://airtable.com/shrOLfyNZ6in20FAp" target="_blank">
          <Button>Yes, please!</Button>
        </a>
      </EmailContainer>
    </Wrapper>
  );
};

const Description = styled.p`
  font-family: sans-serif;
  margin: 5px 0px;
  font-size: 14px;
  max-width: 250px;
  line-height: 150%;
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
    n1: 1,
    n2: 1,
    color: "#fff",
    backgroundColor: "#58acbc",
    bgEnabled: true,
    xMargin: 1,
    outsideMargin: 20,
    distortion: 10,
    shouldRecalculate: true,
  });

  const {
    n1,
    n2,
    color,
    outsideMargin,
    distortion,
    backgroundColor,
    bgEnabled,
  } = animParams;

  function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  function randomize() {
    setAnimParams({
      ...animParams,
      n1: randomNumber(1, 300),
      n2: randomNumber(1, 300),
      distortion: randomNumber(1, 300),
      color: color,
    });
  }

  function onChangeInput(event) {
    let inputFieldName = event.target.dataset.name;
    let inputFieldValue = event.target.value;
    let inputType = event.target.type;

    if (inputType === "checkbox") {
      setAnimParams({
        ...animParams,
        bgEnabled: !bgEnabled,
      });
    }

    if (inputType === "number") {
      setAnimParams({
        ...animParams,
        shouldRecalculate: true,
        [inputFieldName]: inputFieldValue,
      });
    }
  }

  return (
    <>
      <CanvasComponent animationData={animParams}></CanvasComponent>
      <Draggable cancel=".nodrag">
        <SettingsContainer>
          <ItemContainer>
            <InputFieldLabel for="color">Color </InputFieldLabel>
            <HexColorPicker
              className="nodrag"
              color={color}
              id="color"
              onChange={(color) => {
                setAnimParams({
                  ...animParams,
                  shouldRecalculate: true,
                  color: color,
                });
              }}
            />
          </ItemContainer>

          <ItemContainer>
            <InputFieldLabel for="background">Background </InputFieldLabel>
            <HexColorPicker
              className="nodrag"
              id="background"
              color={backgroundColor}
              onChange={(color) => {
                setAnimParams({
                  ...animParams,
                  shouldRecalculate: true,
                  backgroundColor: color,
                });
              }}
            />
          </ItemContainer>

          <ItemContainer>
            <InputFieldLabel id="bgenable">Show Background</InputFieldLabel>
            <input
              id="bgenable"
              type="checkbox"
              checked={bgEnabled}
              data-name="bgEnabled"
              onChange={onChangeInput}
            />
          </ItemContainer>

          <ItemContainer>
            <InputFieldLabel for="n1_param">noise 1</InputFieldLabel>
            <InputField
              type="number"
              id="n1_param"
              onChange={onChangeInput}
              value={n1}
              data-name="n1"
            />
          </ItemContainer>

          <ItemContainer>
            <InputFieldLabel for="n2_param">noise 2</InputFieldLabel>
            <InputField
              id="n2_param"
              type="number"
              onChange={onChangeInput}
              value={n2}
              data-name="n2"
            />
          </ItemContainer>

          <ItemContainer>
            <InputFieldLabel for="margin">Margin</InputFieldLabel>
            <InputField
              id="margin"
              type="number"
              onChange={onChangeInput}
              value={outsideMargin}
              data-name="outsideMargin"
            />
          </ItemContainer>

          <ItemContainer>
            <InputFieldLabel for="distortion">Distortion</InputFieldLabel>
            <InputField
              id="distortion"
              type="number"
              onChange={onChangeInput}
              value={distortion}
              data-name="distortion"
            />
          </ItemContainer>

          <hr></hr>

          <Button className="nodrag" onClick={randomize}>
            Randomize
          </Button>
        </SettingsContainer>
      </Draggable>
    </>
  );
};

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
`;

const InputField = styled.input`
  width: 100%;
  height: 30px;
  padding: 10px;
  border: 1px solid #aaa;
  border-radius: 4px;
  margin: 4px 0px;
`;

const InputFieldLabel = styled.label`
  margin: 0px;
  margin: 5px 0px;
  font-size: 10px;
  color: #333;
  text-transform: uppercase;
  font-family: sans-serif;
  font-weight: 500;
`;

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
    height: 100px;
  }
`;

const Canvas = styled.canvas`
  background-color: #000;
  width: 600px;
  height: 600px;
`;
