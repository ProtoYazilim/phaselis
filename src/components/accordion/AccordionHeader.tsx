import { useEffect, useRef, type FC } from "react";
import { Pressable, Text, View, Animated } from "react-native";
import type { AccordionHeaderProps } from "./types";
import { stylesheet_header as stylesheet } from "./assets/styles";
import { LucideChevronDown } from "lucide-react-native";
import { LucideIcon } from "../index";
import PhaselisHOC from "../provider/lib/hoc";
import { useCombinedStyle } from "../../hooks";

const AccordionHeader: FC<AccordionHeaderProps> = (props) => {
  const {
    disabled,
    onPress,
    onClick,
    expanded,
    text,
    icon,
    variation = "default",
  } = props;

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    "accordion_header",
    variation,
    {
      ...props,
      disabled: disabled,
    },
  );

  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    rotateAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <Text style={getCombinedStyle("text", true)}>{text}</Text>
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
