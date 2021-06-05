import { useState, useRef, useEffect, useContext } from "react";
import {
  Wrapper,
  ButtonContainer,
  Button,
  Canvas,
  CanvasContainer,
} from "./styles";
import { RenderContext } from "../context/renderContext";

const CanvasComponent = () => {
  const canvasRef = useRef(undefined);
  const offscreenCanvasRef = useRef(undefined);
  const workerRef = useRef(undefined);
  const [offscreenTransfered, setOffscreenTransfered] = useState(false);
  const context = useContext(RenderContext);

  const { renderParams } = context;

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

      worker.postMessage({ type: "run_canvas", animData: renderParams });
    }
  }, [renderParams]);

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
      <CanvasContainer>
        <Canvas ref={canvasRef}></Canvas>
      </CanvasContainer>
      {/* <ButtonContainer>
        <Button onClick={download} color="#383fff">
          Download
        </Button>
      </ButtonContainer> */}
    </Wrapper>
  );
};

export default CanvasComponent;
