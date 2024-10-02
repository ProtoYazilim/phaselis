import React, { FC, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { PhaselisHOC } from "@phaselis/components/provider";
import { InputHOC } from "@phaselis/utils";
import SliderCore from "@react-native-community/slider";
import stylesheet from "./assets/styles";
import { SliderProps } from "./types";
import { useCombinedStyle } from "@phaselis/hooks";

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
  vertical,
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
        style={elementStyles}
        disabled={disabled}
        minimumValue={minValue}
        maximumValue={maxValue}
        lowerLimit={0}
        upperLimit={100}
        minimumTrackTintColor={elementStyles?.minimumTrackTintColor}
        maximumTrackTintColor={elementStyles?.maximumTrackTintColor}
        thumbTintColor={elementStyles?.thumbTintColor}
        onSlidingStart={() => console.log("start")}
        onSlidingComplete={() => console.log("end")}
        onValueChange={(value) => {
          onChange?.(null, value);
        }}
        step={step}
        value={progress}
        tapToSeek={tapToSeek}
        inverted={inverted}
        vertical={vertical}
        renderStepNumber={renderStepNumber}
      />
    </View>
  );
};

Slider.displayName = "Slider";

export default InputHOC(PhaselisHOC<SliderProps, SliderExtraProps>(Slider));
