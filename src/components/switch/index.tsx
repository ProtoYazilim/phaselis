import React, { useEffect, useRef, useState } from "react";
import { Pressable, View, Animated, Easing } from "react-native";
import { SwitchProps } from "./types";
import { PhaselisHOC } from "src/components/provider";
import stylesheet from "./assets/styles";
import { useCombinedStyle } from "src/hooks";
import { InputHOC } from "src/utils/lib/hocs";
import LucideIcon from "src/components/lucide-icon";

const Switch = ({
  value = false,
  onChange,
  style,
  duration = 300,
  disabled,
  contextValue,
  showIcons,
  LeftSlot,
  RightSlot,
  variation = "default",
  ...extraProps
}: SwitchProps) => {
  const [innerValue, setInnerValue] = useState(value);

  useEffect(() => {
    setInnerValue(value);
  }, [value]);

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue.theme.switch,
    variation,
    {
      disabled,
      ...extraProps,
    },
  );

  const { getFlattenStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue.theme.switch,
    variation,
    {
      disabled,
      ...extraProps,
    },
  );

  const height = useRef(new Animated.Value(0)).current;
  const width = useRef(new Animated.Value(0)).current;
  const animatedValue = useRef(new Animated.Value(Number(innerValue))).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: Number(innerValue),
      duration,
      easing: Easing.quad,
      useNativeDriver: false, // Make sure to useNativeDriver for performance in animations
    }).start();
  }, [innerValue, animatedValue]);

  const trackAnimatedStyle = {
    backgroundColor: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [
        getFlattenStyle("track")?.offColor,
        getFlattenStyle("track")?.onColor,
      ],
    }),
    borderRadius: Animated.divide(height, 2),
  };

  const getThumbAnimatedStyle = () => {
    return {
      transform: [
        {
          translateX: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [6, 56],
          }),
        },
        {
          translateY: -1,
        },
      ],
      borderRadius: Animated.divide(height, 2),
      backgroundColor: animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [
          getFlattenStyle("thumb")?.offColor,
          getFlattenStyle("thumb")?.onColor,
        ],
      }),
    };
  };

  const handlePress = () => {
    setInnerValue(!innerValue);
    onChange?.(null, !innerValue);
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
            style={[...getCombinedStyle("thumb"), getThumbAnimatedStyle()]}
          />
        </Animated.View>
      </Pressable>
      {RightSlot && <RightSlot />}
    </View>
  );
};

export default InputHOC(PhaselisHOC(Switch));
