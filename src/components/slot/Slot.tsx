import React, { useEffect, useRef } from "react";
import type { SlotProps } from "./types";
import { Animated, Easing } from "react-native";
import { LucideIcon } from "../index";

const Slot: React.FC<SlotProps> = ({
  children,
  icon,
  style,
  size,
  strokeWidth,
  onClick,
  onPress,
  height,
  width,
  loading,
}) => {
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const spinAnimation = Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 1000, // 1 second for a full spin
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    );
    spinAnimation.start();

    return () => spinAnimation.stop(); // Clean up on unmount
  }, [rotateValue]);

  const spin = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"], // Full rotation
  });

  if (children) {
    return (
      <>
        {React.cloneElement(children as React.ReactElement, {
          size: size || "md",
          defaultStyle: style?.[0],
          themeStyle: style?.[1],
          propStyle: style?.[2],
          ...children?.props,
        })}
      </>
    );
  }
  if (loading) {
    return (
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <LucideIcon
          name="LoaderCircle"
          style={style}
          width={width}
          height={height}
          size={size}
          strokeWidth={strokeWidth}
          onClick={onClick}
          onPress={onPress}
        />
      </Animated.View>
    );
  }
  if (icon) {
    return (
      <LucideIcon
        name={icon}
        style={style}
        width={width}
        height={height}
        size={size}
        strokeWidth={strokeWidth}
        onClick={onClick}
        onPress={onPress}
      />
    );
  }
  return null;
};

export default Slot;
