import { useState, useRef, useEffect, useContext } from "react";
import { Wrapper, Canvas, CanvasContainer } from "./styles";
import { RenderContext, ExportContext } from "../context/contexts";

const CanvasComponent = () => {
  const canvasRef = useRef(undefined);
  const offscreenCanvasRef = useRef(undefined);
  const workerRef = useRef(undefined);
  const [offscreenTransfered, setOffscreenTransfered] = useState(false);
  const context = useContext(RenderContext);
  const exportContext = useContext(ExportContext);
  const { initializeCanvas } = exportContext;

  const { renderParams } = context;

  useEffect(() => {
    if (canvasRef && !offscreenTransfered) {
      const { current: canvas } = canvasRef;

      const offscreen = canvas?.transferControlToOffscreen();
      offscreen.width = 600;
      offscreen.height = 600;
      const worker = new Worker("/sw.js");

      worker.postMessage({ canvas: offscreen }, [offscreen]);
      setOffscreenTransfered(true);

      offscreenCanvasRef.current = offscreen;
      workerRef.current = worker;
      // initialize canvas in exportProvider
      initializeCanvas(canvas, worker, offscreen);
    }
  }, []);

  useEffect(() => {
    if (offscreenCanvasRef && workerRef) {
      const { current: worker } = workerRef;

      worker.postMessage({ type: "run_canvas", animData: renderParams });
    }
  }, [renderParams]);

  return (
    <Wrapper className="canvas">
      <CanvasContainer>
        <Canvas ref={canvasRef}></Canvas>
      </CanvasContainer>
    </Wrapper>
  );
};

export default CanvasComponent;
