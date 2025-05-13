import type { SwitchProps } from "./types";
import { useEffect, useRef, useState, type FC } from "react";
import { Pressable, View, Animated, Easing } from "react-native";
import PhaselisHOC from "../provider/lib/hoc";
import { LucideIcon } from "../index";
import stylesheet from "./assets/styles";
import { useCombinedStyle } from "../../hooks";
import { InputHOC } from "../../utils";

const Switch: FC<SwitchProps> = (props) => {
  const {
    value = false,
    onChange,
    duration = 300,
    disabled,
    showIcons,
    LeftSlot,
    RightSlot,
    onIcon = "Check",
    offIcon = "X",
    variation = "primary",
  } = props;

  const [innerValue, setInnerValue] = useState(value);

  useEffect(() => {
    setInnerValue(value);
  }, [value]);

  const { getCombinedStyle, getFlattenStyle } = useCombinedStyle(
    stylesheet,
    "switch",
    variation,
    {
      ...props,
      disabled,
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
  }, [innerValue, animatedValue, duration]);

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
            outputRange: [0, 44],
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
      <Pressable onPressIn={handlePress} focusable={true} disabled={disabled}>
        <Animated.View
          onLayout={(e) => {
            height.setValue(e.nativeEvent.layout.height);
            width.setValue(e.nativeEvent.layout.width);
          }}
          style={[...getCombinedStyle("track", true), trackAnimatedStyle]}
        >
          {showIcons && (
            <>
              <LucideIcon
                name={onIcon}
                size="lg"
                style={getCombinedStyle("leftIcon")}
              />
              <LucideIcon
                name={offIcon}
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
