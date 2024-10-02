import React, { useEffect } from "react";
import { Pressable, Text } from "react-native";

import Svg, { Path } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const TabHeaderItem = ({
  activeTabIndex,
  index,
  item,
  handleOnLayout,
  handleOnPress,
}: any) => {
  const height = useSharedValue(0);
  const scale = useSharedValue(100);

  // Animated style
  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
      transform: [{ translateY: scale.value }],
    };
  });

  useEffect(() => {
    if (activeTabIndex === index) {
      height.value = withTiming(36.6, { duration: 250 });
      scale.value = withTiming(0, { duration: 250 });
    } else {
      height.value = withTiming(0, { duration: 250 });
      scale.value = withTiming(100, { duration: 250 });
    }
  }, [activeTabIndex]);

  return (
    <Pressable
      key={index}
      style={{
        marginTop: 10,
        minWidth: 146,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        paddingLeft: 16,
        paddingRight: 16,
        minHeight: 62,
      }}
      onPress={() => {
        handleOnPress(index);
      }}
    >
      <Text
        style={{
          color: "white",
          fontWeight: "600",
          opacity: activeTabIndex === index ? 1 : 0.5,
        }}
      >
        {item.text}
      </Text>
      <Animated.View style={[{ bottom: -3 }, animatedStyle]}>
        <Svg width={146} height={36.6} viewBox="0 0 146 36.6">
          <Path
            fill="#f3f5fb"
            d="M144.4 34.4H142c-10.8-.1-20.8-2.9-30.1-8.5-7-4.2-12.1-10.3-17.4-16.2-9.9-11-25.3-12.9-37.2-4.2-4 2.9-7.3 6.9-10.7 10.6-6.7 7-14.6 12-23.8 15.2-7 2.4-15 3.1-22.8 3.1v2.2h146v-2.3c-.7.1-1.3.1-1.6.1M73 19.5c-2.6 0-4.8-2.1-4.8-4.8 0-2.6 2.1-4.8 4.8-4.8 2.6 0 4.8 2.1 4.8 4.8s-2.2 4.8-4.8 4.8"
          />
        </Svg>
      </Animated.View>
    </Pressable>
  );
};

export default TabHeaderItem;
