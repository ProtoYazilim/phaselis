import React, { useEffect, useRef } from "react";
import { Pressable, View, Animated, Easing } from "react-native";
import { SwitchProps } from "./types";
import { PhaselisHOC } from "@phaselis/components/provider";
import { InputHOC } from "@phaselis/utils";
import stylesheet from "./assets/styles";
import LucideIcon from "@phaselis/components/lucide-icon";
import { useCombinedStyle } from "@phaselis/hooks";

const Switch = ({
  value = false,
  onChange,
  style,
  duration = 400,
  disabled,
  contextValue,
  showIcons,
  LeftSlot,
  RightSlot,
  ...extraProps
}: SwitchProps) => {
  const { getCombinedStyle, defaultStyles, themeStyles, propStyle } =
    useCombinedStyle(stylesheet, style, contextValue.theme.switch, {
      disabled,
      ...extraProps,
    });

  const height = useRef(new Animated.Value(0)).current;
  const width = useRef(new Animated.Value(0)).current;
  const animatedValue = useRef(new Animated.Value(Number(value))).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: Number(value),
      duration,
      easing: Easing.linear,
      useNativeDriver: false, // Make sure to useNativeDriver for performance in animations
    }).start();
  }, [value, animatedValue]);

  const trackAnimatedStyle = {
    backgroundColor: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [
        propStyle?.track?.offColor ||
          themeStyles?.track?.offColor ||
          defaultStyles?.track?.offColor,
        propStyle?.track?.onColor ||
          themeStyles?.track?.onColor ||
          defaultStyles?.track?.onColor,
      ],
    }),
    borderRadius: Animated.divide(height, 2),
  };

  const thumbAnimatedStyle = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 1],
          //@ts-ignore
          outputRange: [3, width.__getValue() - 3 - height.__getValue()],
        }),
      },
    ],
    borderRadius: Animated.divide(height, 2),
    backgroundColor: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [
        propStyle?.thumb?.offColor ||
          themeStyles?.thumb?.offColor ||
          defaultStyles?.thumb?.offColor,
        propStyle?.thumb?.onColor ||
          themeStyles?.thumb?.onColor ||
          defaultStyles?.thumb?.onColor,
      ],
    }),
  };

  const handlePress = () => {
    onChange?.(null, !value);
  };

  return (
    <View style={getCombinedStyle("container")}>
      {LeftSlot && <LeftSlot />}
      <Pressable
        onPressIn={handlePress}
        focusable={true}
        style={getCombinedStyle("element")}
        disabled={disabled}
      >
        <Animated.View
          onLayout={(e) => {
            height.setValue(e.nativeEvent.layout.height);
            width.setValue(e.nativeEvent.layout.width);
          }}
          style={[...getCombinedStyle("track"), trackAnimatedStyle]}
        >
          {showIcons && (
            <>
              <LucideIcon
                name="Check"
                size="lg"
                style={getCombinedStyle("leftIcon")}
              />
              <LucideIcon
                name="X"
                size="lg"
                style={getCombinedStyle("rightIcon")}
              />
            </>
          )}
          <Animated.View
            style={[...getCombinedStyle("thumb"), thumbAnimatedStyle]}
          />
        </Animated.View>
      </Pressable>
      {RightSlot && <RightSlot />}
    </View>
  );
};

export default InputHOC(PhaselisHOC<SwitchProps, SwitchExtraProps>(Switch));
