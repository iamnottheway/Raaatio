import { createContext, useState, useEffect } from "react";

export const RenderContext = createContext();

export const RenderProvider = ({ children }) => {
  const [renderParams, setRenderParams] = useState({
    n1: 124,
    n2: 122,
    color: "#FFCBE1",
    backgroundColor: "#131517",
    bgEnabled: true,
    xMargin: 5,
    outsideMargin: 0,
    distortion: 94,
    shouldRecalculate: true,
    cWidth: 600,
    cHeight: 600,
    accountType: null,
  });

  const { bgEnabled, accountType } = renderParams;

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    let data = localStorage.getItem("app");
    if (data) {
      let parsed = JSON.parse(data);
      if (parsed.isPro) {
        setRenderParams({
          ...renderParams,
          accountType: "pro",
        });
      } else {
        setRenderParams({
          ...renderParams,
          accountType: "free",
        });
      }
    } else {
      setRenderParams({
        ...renderParams,
        accountType: "free",
      });
    }
  }, []);

  function updateAccount(type) {
    setRenderParams({
      ...renderParams,
      accountType: type,
    });
  }

  function randomize() {
    setRenderParams({
      ...renderParams,
      n1: randomInteger(1, 1000),
      n2: randomInteger(1, 1000),
      distortion: randomInteger(1, 1000),
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
      if (accountType === "free") {
        if (inputFieldName === "cWidth") {
          if (inputFieldValue > 800) {
            inputFieldValue = 800;
          }
        }

        if (inputFieldName === "cHeight") {
          if (inputFieldValue > 800) {
            inputFieldValue = 800;
          }
        }
      }

      // 4k limit
      if (accountType === "pro") {
        if (inputFieldName === "cWidth") {
          if (inputFieldValue >= 3840) {
            inputFieldValue = 3840;
          }
        }

        if (inputFieldName === "cHeight") {
          if (inputFieldValue > 2160) {
            inputFieldValue = 2160;
          }
        }
      }

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
    updateAccount,
  };
  return (
    <RenderContext.Provider value={value}>{children}</RenderContext.Provider>
  );
};
