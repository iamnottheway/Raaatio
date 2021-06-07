import { createContext, useState } from "react";

export const RenderContext = createContext();

export const RenderProvider = ({ children }) => {
  const [renderParams, setRenderParams] = useState({
    n1: 175,
    n2: 155,
    color: "#FFCBE1",
    backgroundColor: "#2D9FED",
    bgEnabled: true,
    xMargin: 5,
    outsideMargin: 20,
    distortion: 123,
    shouldRecalculate: true,
  });

  function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  function randomize() {
    setRenderParams({
      ...renderParams,
      n1: randomNumber(1, 300),
      n2: randomNumber(1, 300),
      distortion: randomNumber(1, 300),
    });
  }

  function updateProperties(value) {
    setRenderParams({
      ...value,
    });
  }

  function onChangeInput(event) {
    let inputFieldName = event.target.dataset.name;
    let inputFieldValue = event.target.value;
    let inputType = event.target.type;

    if (inputType === "checkbox") {
      setRenderParams({
        ...renderParams,
        bgEnabled: !bgEnabled,
      });
    }

    if (inputType === "number") {
      setRenderParams({
        ...renderParams,
        shouldRecalculate: true,
        [inputFieldName]: inputFieldValue,
      });
    }
  }

  const value = {
    renderParams,
    onChangeInput,
    randomize,
    updateProperties,
  };
  return (
    <RenderContext.Provider value={value}>{children}</RenderContext.Provider>
  );
};
