import React, { useState, useEffect, useContext } from "react";
import { Text, Pressable } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import RadioContext from "./context";
import { RadioProps } from "./types";
import { PhaselisHOC } from "@phaselis/components/provider";
import stylesheet from "./assets/styles";
import { useCombinedStyle } from "@phaselis/hooks";

const Radio = ({
  width = 30,
  height = 30,
  text,
  value,
  onChange,
  disabled,
  size,
  contextValue,
  style,
  ...extraProps
}: RadioProps) => {
  const [checked, setChecked] = useState(false);
  const animationScale = useSharedValue(0);
  const radioContext = useContext(RadioContext);

  const handlePress = () => {
    if (disabled) return;
    radioContext.onChange(value);
    onChange && onChange(value);
    setChecked(checked);
  };

  useEffect(() => {
    setChecked(radioContext.groupValue === value);
  }, [radioContext.groupValue, value]);

  useEffect(() => {
    animationScale.value = withSpring(checked ? (width + height) / 2 : 0, {
      damping: 12,
      stiffness: 100,
    });
  }, [checked, animationScale, width, height]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: animationScale.value - 10,
      height: animationScale.value - 10,
      borderRadius: (animationScale.value - 10) / 2,
    };
  });

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.radio,
    { disabled, size, ...extraProps },
  );

  return (
    <Pressable onPressIn={handlePress} style={getCombinedStyle("container")}>
      <Animated.View
        style={[
          {
            width: width,
            height: height,
            borderRadius: width / 2,
          },
          ...getCombinedStyle("outerElement"),
        ]}
      >
        <Animated.View
          style={[animatedStyle, ...getCombinedStyle("innerElement")]}
        />
      </Animated.View>
      <Text style={getCombinedStyle("text")}>{text}</Text>
    </Pressable>
  );
};

export default PhaselisHOC<RadioProps, RadioExtraProps>(Radio);
