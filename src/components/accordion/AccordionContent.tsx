import { useEffect, useRef } from "react";
import { View, Animated, UIManager, Platform } from "react-native";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

function AccordionContent({
  isExpanded,
  children,
  viewKey,
  style,
  duration = 500,
}: any) {
  const heightAnimation = useRef(
    new Animated.Value(isExpanded ? 1 : 0),
  ).current;
  const contentHeight = useRef(0); // To store content height

  useEffect(() => {
    // Animate to contentHeight or 0 based on expansion state
    Animated.timing(heightAnimation, {
      toValue: isExpanded ? contentHeight.current : 0,
      duration,
      useNativeDriver: false, // height cannot use native driver
    }).start();
  }, [isExpanded, duration, heightAnimation]);

  return (
    <Animated.View
      key={`AccordionContent_${viewKey}`}
      style={[
        {
          width: "100%",
          overflow: "hidden",
          height: heightAnimation, // Animate height value
        },
        style,
      ]}
    >
      <View
        onLayout={(e) => {
          contentHeight.current = e.nativeEvent.layout.height; // Capture height
          if (isExpanded) {
            // If expanded initially, set the correct height
            heightAnimation.setValue(contentHeight.current);
          }
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
