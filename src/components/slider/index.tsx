import React, { FC, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { PhaselisHOC } from "src/components/provider";
import SliderCore from "@react-native-community/slider";
import stylesheet from "./assets/styles";
import { SliderProps } from "./types";
import { useCombinedStyle } from "src/hooks";
import { InputHOC } from "src/utils/lib/hocs";

const Slider: FC<SliderProps> = ({
  contextValue,
  style,
  value,
  onChange,
  error,
  size = "md",
  disabled,
  minValue = 0,
  maxValue = 100,
  step = 10,
  tapToSeek = true,
  inverted = false,
  renderStepNumber = false,
  ...extraProps
}) => {
  const [progress, setProgress] = useState(Number(value || 0));

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.slider,
    {
      error,
      disabled,
      size,
      ...extraProps,
    },
  );

  useEffect(() => {
    setProgress(Number(value));
  }, [value]);

  const elementStyles = StyleSheet.flatten(getCombinedStyle("element"));
  return (
    <View style={getCombinedStyle("container")}>
      <SliderCore
        {...extraProps}
        style={elementStyles}
        disabled={disabled}
        minimumValue={minValue}
        maximumValue={maxValue}
        lowerLimit={0}
        upperLimit={100}
        minimumTrackTintColor={elementStyles?.minimumTrackTintColor}
        maximumTrackTintColor={elementStyles?.maximumTrackTintColor}
        thumbTintColor={elementStyles?.thumbTintColor}
        onValueChange={(value) => {
          onChange?.(null, value);
        }}
        step={step}
        value={progress}
        tapToSeek={tapToSeek}
        inverted={inverted}
        renderStepNumber={renderStepNumber}
      />
    </View>
  );
};

Slider.displayName = "Slider";

export default InputHOC(PhaselisHOC(Slider));
