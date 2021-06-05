import { createContext, useState } from "react";

export const RenderContext = createContext();

export const RenderProvider = ({ children }) => {
  const [renderParams, setRenderParams] = useState({
    n1: 1,
    n2: 1,
    color: "#FFCBE1",
    backgroundColor: "#16DAF5",
    bgEnabled: true,
    xMargin: 1,
    outsideMargin: 20,
    distortion: 10,
    shouldRecalculate: true,
  });

  function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  function randomize() {
    // debugger;
    setRenderParams({
      ...renderParams,
      n1: randomNumber(1, 300),
      n2: randomNumber(1, 300),
      distortion: randomNumber(1, 300),
      //   color: color,
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
