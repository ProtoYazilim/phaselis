import React, { useEffect, useRef } from "react";
import { Pressable, Text, View, Animated } from "react-native";
import { AccordionHeaderProps } from "./types";
import { stylesheet_header as stylesheet } from "./assets/styles";
import { LucideChevronDown } from "lucide-react-native";
import LucideIcon from "src/components/lucide-icon";
import { PhaselisHOC } from "src/components/provider";
import { useCombinedStyle } from "src/hooks";

const AccordionHeader = ({
  style,
  disabled,
  contextValue,
  onPress,
  onClick,
  expanded,
  text,
  icon,
  variation = "default",
}: AccordionHeaderProps) => {
  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.accordion_header,
    variation,
    {
      disabled: disabled,
    },
  );

  console.log(getCombinedStyle("container"));

  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    rotateAnimation();
  }, [expanded]);

  const rotateAnimation = () => {
    Animated.timing(rotation, {
      toValue: expanded ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const animatedStyle = {
    transform: [{ rotate: rotateInterpolate }],
  };

  return (
    <Pressable
      onPress={onPress || onClick}
      style={getCombinedStyle("container")}
    >
      <View style={{ flexDirection: "row", gap: 10 }}>
        {icon && <LucideIcon name={icon} style={getCombinedStyle("icon")} />}
        <Text style={getCombinedStyle("text")}>{text}</Text>
      </View>
      <Animated.View style={animatedStyle}>
        <LucideChevronDown
          // @ts-ignore
          style={getCombinedStyle("drop")}
          color={getCombinedStyle("drop").color}
          size={16}
        />
      </Animated.View>
    </Pressable>
  );
};

export default PhaselisHOC(AccordionHeader);
