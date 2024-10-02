import React, { FC } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import stylesheet from "./assets/styles";
import { PhaselisHOC } from "@phaselis/components/provider";
import { Slot } from "@phaselis/components";
import { useCombinedStyle } from "@phaselis/hooks";
import { PopupProps } from "./types";

const Popup: FC<PopupProps> = ({
  isOpen,
  duration = 500,
  children,
  onClose,
  fullScreen,
  contextValue,
  style,
  leftIcon,
  LeftSlot,
  title,
  ...extraProps
}: any) => {
  const height = useSharedValue(0);
  const progress = useDerivedValue(() =>
    withTiming(isOpen.value ? 0 : 1, { duration }),
  );

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: progress.value * height.value }],
  }));

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: 1 - progress.value,
    zIndex: isOpen.value
      ? 1
      : withDelay(duration, withTiming(-1, { duration: 0 })),
  }));

  const handleClose = () => {
    if (isOpen.value) {
      onClose();
    }
  };

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.popup,
    { ...extraProps },
  );

  return (
    <>
      <Animated.View style={[...getCombinedStyle("backDrop"), backdropStyle]}>
        <TouchableOpacity style={{ flex: 1 }} onPress={handleClose} />
      </Animated.View>
      <Animated.View
        onLayout={(e) => {
          height.value = e.nativeEvent.layout.height;
        }}
        style={[
          ...getCombinedStyle("container"),
          sheetStyle,
          {
            height: fullScreen ? "100%" : "auto",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          },
        ]}
      >
        <View style={getCombinedStyle("element")}>
          {title && (
            <View style={getCombinedStyle("header")}>
              <Slot
                icon={leftIcon}
                size="lg"
                style={getCombinedStyle("leftSlot")}
              >
                {LeftSlot && <LeftSlot />}
              </Slot>
              <Text style={getCombinedStyle("title")}>{title}</Text>
            </View>
          )}

          {children}
        </View>
        <Slot
          icon="X"
          size="md"
          style={getCombinedStyle("closeIcon")}
          strokeWidth={4} // todo strokewidth not accurete with figma
          onClick={handleClose}
        />
      </Animated.View>
    </>
  );
};

export default PhaselisHOC<PopupProps, PopupExtraProps>(Popup);
