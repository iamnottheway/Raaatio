import { useContext, useState } from "react";

import {
  SettingsContainer,
  ItemContainer,
  InputFieldLabel,
  InputField,
  Button,
  ColorSquare,
  Picker,
  RowContainer,
} from "./styles";

import { HexColorPicker } from "react-colorful";
import { RenderContext, ExportContext } from "../../context/contexts";

const PropertiesBar = () => {
  const context = useContext(RenderContext);
  const exportContext = useContext(ExportContext);
  const { downloadPNG } = exportContext;

  const [isOpenColorPicker, toggoleColorPicker] = useState({
    backgroundColor: false,
    color: false,
  });
  const { renderParams, onChangeInput, randomize, updateProperties } = context;
  const {
    n1,
    n2,
    bgEnabled,
    backgroundColor,
    outsideMargin,
    distortion,
    color,
  } = renderParams;

  function ColorPicker({ type, label }) {
    const colors = {
      backgroundColor,
      color,
    };

    function onColorSwatchClick() {
      toggoleColorPicker({
        ...isOpenColorPicker,
        backgroundColor: type === "backgroundColor" && !isOpenColorPicker[type],
        color: type === "color" && !isOpenColorPicker[type],
      });
    }

    return (
      <Picker>
        <div className="container">
          <ColorSquare color={colors[type]} onClick={onColorSwatchClick} />
          <p>{colors[type]}</p>
        </div>
        {isOpenColorPicker[type] && (
          <div className="popover">
            <HexColorPicker
              color={colors[type]}
              id={type}
              onChange={(color) => {
                updateProperties({
                  ...renderParams,
                  shouldRecalculate: true,
                  [type]: color,
                });
              }}
            />
          </div>
        )}
      </Picker>
    );
  }

  return (
    <SettingsContainer className="sidebar">
      <RowContainer>
        <ColorPicker type="color" label={"Color"} />
        <ColorPicker type="backgroundColor" label={"Background"} />
      </RowContainer>

      {/* <ItemContainer>
        <InputFieldLabel id="bgenable">Show Background</InputFieldLabel>
        <input
          id="bgenable"
          type="checkbox"
          checked={bgEnabled}
          data-name="bgEnabled"
          onChange={onChangeInput}
        />
      </ItemContainer> */}

      <RowContainer>
        <ItemContainer>
          <InputFieldLabel htmlFor="n1_param">noise 1</InputFieldLabel>
          <InputField
            type="number"
            id="n1_param"
            onChange={onChangeInput}
            value={n1}
            data-name="n1"
          />
        </ItemContainer>

        <ItemContainer>
          <InputFieldLabel htmlFor="n2_param">noise 2</InputFieldLabel>
          <InputField
            id="n2_param"
            type="number"
            onChange={onChangeInput}
            value={n2}
            data-name="n2"
          />
        </ItemContainer>
      </RowContainer>

      <RowContainer>
        <ItemContainer>
          <InputFieldLabel htmlFor="margin">Margin</InputFieldLabel>
          <InputField
            id="margin"
            type="number"
            onChange={onChangeInput}
            value={outsideMargin}
            data-name="outsideMargin"
          />
        </ItemContainer>

        <ItemContainer>
          <InputFieldLabel htmlFor="distortion">Distortion</InputFieldLabel>
          <InputField
            id="distortion"
            type="number"
            onChange={onChangeInput}
            value={distortion}
            data-name="distortion"
          />
        </ItemContainer>
      </RowContainer>
      <hr color="#E8E7F1"></hr>
      <Button onClick={randomize}>Randomize</Button>
      <hr color="#E8E7F1"></hr>
      <Button onClick={downloadPNG} color="#6082FB">
        Download
      </Button>
    </SettingsContainer>
  );
};

export default PropertiesBar;
