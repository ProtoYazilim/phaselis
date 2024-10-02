import React, { useEffect } from "react";
import { Pressable, View } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
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
  size = "md",
  contextValue,
  showIcons,
  LeftSlot,
  RightSlot,
  ...extraProps
}: SwitchProps) => {
  const { getCombinedStyle, defaultStyles, themeStyles, propStyle } =
    useCombinedStyle(stylesheet, style, contextValue.theme.switch, {
      disabled,
      size,
      ...extraProps,
    });

  const height = useSharedValue(0);
  const width = useSharedValue(0);

  const animatedValue = useSharedValue(Number(value));

  useEffect(() => {
    animatedValue.value = Number(value);
  }, [value, animatedValue]);

  const trackAnimatedStyle = useAnimatedStyle(() => {
    const onColor =
      propStyle?.track?.onColor ||
      themeStyles?.track?.onColor ||
      defaultStyles?.track?.onColor;

    const offColor =
      propStyle?.track?.offColor ||
      themeStyles?.track?.offColor ||
      defaultStyles?.track?.offColor;

    const color = interpolateColor(
      animatedValue.value,
      [0, 1],
      [offColor, onColor],
    );
    const colorValue = withTiming(color, { duration });

    return {
      backgroundColor: colorValue,
      borderRadius: height.value / 2,
    };
  });

  const thumbAnimatedStyle = useAnimatedStyle(() => {
    const moveValue = interpolate(
      Number(animatedValue.value),
      [0, 1],
      [3, width.value - 3 - height.value],
    );
    const translateValue = withTiming(moveValue, { duration });

    const onColor =
      propStyle?.thumb?.onColor ||
      themeStyles?.thumb?.onColor ||
      defaultStyles?.thumb?.onColor;

    const offColor =
      propStyle?.thumb?.offColor ||
      themeStyles?.thumb?.offColor ||
      defaultStyles?.thumb?.offColor;

    const color = interpolateColor(
      animatedValue.value,
      [0, 1],
      [offColor, onColor],
    );

    const colorValue = withTiming(color, { duration });

    return {
      transform: [{ translateX: translateValue }],
      borderRadius: height.value / 2,
      backgroundColor: colorValue,
    };
  });

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
            height.value = e.nativeEvent.layout.height;
            width.value = e.nativeEvent.layout.width;
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
