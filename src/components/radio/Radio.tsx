import React, { useState, useEffect, useContext, useRef } from "react";
import { Text, Pressable, Animated, StyleSheet } from "react-native";
import RadioContext from "./context";
import { RadioProps } from "./types";
import { PhaselisHOC } from "@phaselis/components/provider";
import stylesheet from "./assets/styles";
import { useCombinedStyle } from "@phaselis/hooks";
import { Block } from "@phaselis/components";

const Radio = ({
  text,
  value,
  onChange,
  disabled,
  size = "md",
  contextValue,
  style,
  ...extraProps
}: RadioProps) => {
  const [checked, setChecked] = useState(false);
  const animationScale = useRef(new Animated.Value(0)).current; // Replacing useSharedValue with useRef
  const radioContext = useContext(RadioContext);

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.radio,
    { disabled, size, ...extraProps },
  );

  const handlePress = () => {
    if (disabled) return;
    radioContext.onChange(value);
    onChange && onChange(value);
    setChecked(checked);
  };

  useEffect(() => {
    setChecked(radioContext.groupValue === value);
  }, [radioContext.groupValue, value]);
  const width = StyleSheet.flatten(getCombinedStyle("outerElement")).width;
  const height = StyleSheet.flatten(getCombinedStyle("outerElement")).height;

  useEffect(() => {
    // Use Animated.spring to mimic the spring animation from
    Animated.spring(animationScale, {
      toValue: checked ? (width + height) / 2 : 0,
      useNativeDriver: false,
      friction: 10, // Adjusted friction to mimic damping
      tension: 100, // Adjusted tension to mimic stiffness
    }).start();
  }, [checked, animationScale, width, height]);

  // Use the animated value for styling
  const animatedStyle = {
    width: animationScale.interpolate({
      inputRange: [0, (width + height) / 2],
      outputRange: [0, width - 10],
    }),
    height: animationScale.interpolate({
      inputRange: [0, (width + height) / 2],
      outputRange: [0, height - 10],
    }),
    borderRadius: animationScale.interpolate({
      inputRange: [0, (width + height) / 2],
      outputRange: [0, (width - 10) / 2],
    }),
  };

  return (
    <Pressable onPressIn={handlePress} style={getCombinedStyle("container")}>
      <Block
        //@ts-ignore TODO: BlockStyleInterface
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
      </Block>
      <Text style={getCombinedStyle("text")}>{text}</Text>
    </Pressable>
  );
};

export default PhaselisHOC<RadioProps, RadioExtraProps>(Radio);
