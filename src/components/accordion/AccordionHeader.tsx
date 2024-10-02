import React, { useEffect } from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { AccordionHeaderProps } from "./types";
import { PhaselisHOC } from "@phaselis/components/provider";
import { useStyles } from "react-native-unistyles";
import { stylesheet_header as stylesheet } from "./assets/styles";
import { LucideChevronDown } from "lucide-react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import LucideIcon from "@phaselis/components/lucide-icon";

const AccordionHeader = ({
  style,
  disabled,
  size = "md",
  contextValue,
  onPress,
  expanded,
  text,
  icon,
}: AccordionHeaderProps) => {
  const { styles: defaultStyles } = useStyles(stylesheet, {
    disabled,
    size,
  });

  const { styles: themeStyles } = useStyles(
    contextValue?.theme?.accordion_header as typeof stylesheet,
    {
      disabled,
      size,
    },
  );

  const { styles: propStyle } = useStyles(style as typeof stylesheet, {
    disabled,
    size,
  });

  useEffect(() => {
    rotateAnimation();
  }, [expanded]);

  const rotation = useSharedValue(0);

  const rotateAnimation = () => {
    rotation.value = withTiming(
      expanded ? 180 : 0,
      {
        duration: 500,
      },
      () => {},
    );
  };
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });
  return (
    <Pressable
      onPress={onPress}
      style={[
        defaultStyles.container,
        themeStyles.container,
        propStyle?.container,
      ]}
    >
      <View style={{ flexDirection: "row", gap: 10 }}>
        {icon && (
          <LucideIcon
            name={icon}
            style={[defaultStyles.icon, themeStyles.icon, propStyle?.icon]}
          />
        )}
        <Text style={[defaultStyles.text, themeStyles.text, propStyle?.text]}>
          {text}
        </Text>
      </View>
      <Animated.View style={animatedStyle}>
        <LucideChevronDown
          // @ts-ignore
          style={[defaultStyles.drop, themeStyles.drop, propStyle?.drop]}
          color={
            StyleSheet.flatten([
              defaultStyles.drop,
              themeStyles.drop,
              themeStyles.drop,
            ])?.color
          }
          size={16}
        />
      </Animated.View>
    </Pressable>
  );
};

export default PhaselisHOC<AccordionHeaderProps>(AccordionHeader);
