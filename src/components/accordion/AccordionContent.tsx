import React, { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
function AccordionContent({
  isExpanded,
  children,
  viewKey,
  style,
  duration = 500,
}: any) {
  const height = useSharedValue(0);
  const isOpen = useSharedValue(isExpanded);

  useEffect(() => {
    isOpen.value = isExpanded;
  }, [isExpanded]);

  const derivedHeight = useDerivedValue(() =>
    withTiming(height.value * Number(isOpen.value), {
      duration,
    }),
  );
  const bodyStyle = useAnimatedStyle(() => ({
    height: derivedHeight.value,
  }));

  return (
    <Animated.View
      key={`AccordionContent_${viewKey}`}
      style={[
        {
          width: "100%",
          overflow: "hidden",
        },
        bodyStyle,
        style,
      ]}
    >
      <View
        onLayout={(e) => {
          height.value = e.nativeEvent.layout.height;
        }}
        style={{
          width: "100%",
          position: "absolute",
          display: "flex",
        }}
      >
        {children}
      </View>
    </Animated.View>
  );
}

export default AccordionContent;
