import React, { useState, useEffect, useContext, useRef } from "react";
import { Text, Pressable, Animated, StyleSheet } from "react-native";
import RadioContext from "./context";
import { RadioProps } from "./types";
import stylesheet from "./assets/styles";
import Block from "src/components/block";
import { PhaselisHOC } from "src/components/provider";
import { useCombinedStyle } from "src/hooks";

const Radio = ({
  text,
  value,
  onChange,
  disabled,
  size = "md",
  contextValue,
  style,
  checked: checkedProp = false,
  partOfGroup = true,
  variation = "primary",
  ...extraProps
}: RadioProps) => {
  const [checked, setChecked] = useState(checkedProp);
  const animationScale = useRef(new Animated.Value(0)).current; // Replacing useSharedValue with useRef
  const radioContext = useContext(RadioContext);

  useEffect(() => {
    setChecked(checkedProp);
  }, [checkedProp]);

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.radio,
    variation,
    { disabled, size, ...extraProps },
  );

  const handlePress = () => {
    if (disabled) return;
    radioContext.onChange(value);
    onChange && onChange(value);
    setChecked(checked);
  };

  useEffect(() => {
    if (partOfGroup) {
      setChecked(radioContext.groupValue === value);
    }
  }, [radioContext.groupValue, value, partOfGroup]);

  const width = StyleSheet.flatten(getCombinedStyle("outerElement")).width;
  const height = StyleSheet.flatten(getCombinedStyle("outerElement")).height;

  useEffect(() => {
    // Use Animated.spring to mimic the spring animation from
    Animated.spring(animationScale, {
      toValue: checked ? width : 0,
      useNativeDriver: false,
      friction: 10, // Adjusted friction to mimic damping
      tension: 100, // Adjusted tension to mimic stiffness
    }).start();
  }, [checked, animationScale, width, height]);

  // Use the animated value for styling
  const animatedStyle = {
    width: animationScale.interpolate({
      inputRange: [0, width],
      outputRange: [0, width / 1.33],
    }),
    height: animationScale.interpolate({
      inputRange: [0, height],
      outputRange: [0, height / 1.33],
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

export default PhaselisHOC(Radio);
