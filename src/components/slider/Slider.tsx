import type { FC } from "react";
import type { SliderProps } from "./types";
import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import PhaselisHOC from "../provider/lib/hoc";
import SliderCore from "@react-native-community/slider";
import stylesheet from "./assets/styles";
import { useCombinedStyle } from "../../hooks";
import { InputHOC } from "../../utils";

const Slider: FC<SliderProps> = (props) => {
  const {
    value,
    onChange,
    error,
    disabled,
    minValue = 0,
    maxValue = 100,
    step = 10,
    tapToSeek = true,
    inverted = false,
    renderStepNumber = false,
    variation = "default",
  } = props;

  const [progress, setProgress] = useState(Number(value || 0));

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    "slider",
    variation,
    {
      ...props,
      error,
      disabled,
    },
  );

  useEffect(() => {
    setProgress(Number(value));
  }, [value]);

  const elementStyles = StyleSheet.flatten(getCombinedStyle("element", true));
  return (
    <View style={getCombinedStyle("container")}>
      <SliderCore
        {...props}
        style={elementStyles}
        disabled={disabled}
        minimumValue={minValue}
        maximumValue={maxValue}
        lowerLimit={0}
        upperLimit={100}
        minimumTrackTintColor={elementStyles?.minimumTrackTintColor}
        maximumTrackTintColor={elementStyles?.maximumTrackTintColor}
        thumbTintColor={elementStyles?.thumbTintColor}
        onSlidingComplete={(newValue) => {
          onChange?.(null, newValue);
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
