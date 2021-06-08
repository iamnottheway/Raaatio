import { createContext, useRef, useEffect } from "react";

export const ExportContext = createContext();

export const ExportProvider = ({ children }) => {
  const canvasRef = useRef(undefined);
  const workerRef = useRef(undefined);
  const offscreenCanvasRef = useRef(undefined);

  useEffect(() => {
    if (!canvasRef.current) {
      console.log("Canvas unsuccessful");
    } else {
      console.log("Export: Canvas successfully registered");
    }
  }, [canvasRef.current]);

  function initializeCanvas(canvas, worker, offscreenCanvas) {
    if (!canvas || !worker) {
      return;
    }
    try {
      canvasRef.current = canvas;
      workerRef.current = worker;
      offscreenCanvasRef.current = offscreenCanvas;
    } catch (e) {
      console.error(e);
    }
  }

  function downloadURI(uri, name) {
    let link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  async function downloadPNG(e) {
    if (canvasRef) {
      const { current: canvas } = canvasRef;
      const { current: worker } = workerRef;

      //   canvas.scale(3, 3);
      //   worker.postMessage({ type: "download" });

      let img = canvas.toDataURL("image/png");
      downloadURI(img, "download.png");
    }
  }

  const value = {
    canvas: canvasRef,
    initializeCanvas,
    downloadPNG,
  };
  return (
    <ExportContext.Provider value={value}>{children}</ExportContext.Provider>
  );
};
