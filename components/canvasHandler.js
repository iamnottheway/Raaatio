import { useState, useRef, useEffect, useContext } from "react";
import { Wrapper, Canvas, CanvasContainer } from "./styles";
import { RenderContext, ExportContext } from "../context/contexts";
import gridNoise from "../effects/grid-noise";

function isOffscreenCavnasSupported(canvas) {
  return canvas.transferControlToOffscreen !== undefined;
}

const CanvasComponent = () => {
  const canvasRef = useRef(undefined);
  const offscreenCanvasRef = useRef(undefined);
  const workerRef = useRef(undefined);
  const [offscreenTransfered, setOffscreenTransfered] = useState(false);
  const [offscreenSupported, setOffscreenSupported] = useState(false);

  const context = useContext(RenderContext);
  const exportContext = useContext(ExportContext);
  const { initializeCanvas } = exportContext;

  const { renderParams } = context;

  useEffect(() => {
    if (canvasRef && !offscreenTransfered) {
      const { current: canvas } = canvasRef;

      if (isOffscreenCavnasSupported(canvas)) {
        const offscreen = canvas?.transferControlToOffscreen();
        offscreen.width = 100;
        offscreen.height = 100;
        const worker = new Worker("/sw.js");

        worker.postMessage({ canvas: offscreen }, [offscreen]);
        setOffscreenTransfered(true);
        setOffscreenSupported(true);

        offscreenCanvasRef.current = offscreen;
        workerRef.current = worker;
        // initialize canvas in exportProvider
        initializeCanvas(canvas, worker, offscreen);
      }
    }
  }, []);

  useEffect(() => {
    if (offscreenCanvasRef && workerRef && offscreenSupported) {
      const { current: worker } = workerRef;

      // worker.postMessage({ type: "run_canvas", animData: renderParams });
      worker.postMessage({ type: "wave_pattern", animData: renderParams });
    } else {
      const { current: canvas } = canvasRef;

      if (!isOffscreenCavnasSupported(canvas)) {
        console.log("offScreen canvas not supported");
        gridNoise(renderParams, canvas);
      }
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
