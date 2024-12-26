import React, { FC, useEffect } from "react";
import {
  Pressable,
  View,
  Text,
  Animated,
  Modal,
  StyleSheet,
} from "react-native";
import stylesheet from "./assets/styles";
import { PhaselisHOC } from "src/components/provider";
import Slot from "src/components/slot";
import { PopupProps } from "./types";
import useCombinedStyle from "src/hooks/useCombinedStyle";

const Popup: FC<PopupProps> = ({
  show,
  duration = 500,
  children,
  onClose,
  fullScreen,
  contextValue,
  style,
  leftIcon,
  LeftSlot,
  title,
  type = "default",
  ...extraProps
}: any) => {
  const translateY = new Animated.Value(300);

  useEffect(() => {
    if (show) {
      // Animate to open position
      Animated.timing(translateY, {
        toValue: 0,
        duration,
        useNativeDriver: true,
      }).start();
    } else {
      // Animate to closed position and then close the modal
      Animated.timing(translateY, {
        toValue: 300, // Start position
        duration,
        useNativeDriver: true,
      }).start(() => {
        onClose?.(); // Close modal after animation completes
      });
    }
  }, [show, duration]);

  const backdropStyle = {
    opacity: show ? 1 : 0,
    zIndex: show ? 1 : -1,
  };

  const handleClose = () => {
    if (show) {
      // Trigger close animation
      Animated.timing(translateY, {
        toValue: 300, // Start position
        duration,
        useNativeDriver: true,
      }).start(() => {
        onClose?.(); // Close modal after animation completes
      });
    }
  };
  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.popup,
    { type, ...extraProps },
  );

  return (
    <Modal transparent={true} visible={show} animationType="fade">
      <Animated.View style={[...getCombinedStyle("backDrop"), backdropStyle]}>
        <Pressable style={{ flex: 1 }} onPress={handleClose} />
      </Animated.View>
      <Animated.View
        style={[
          ...getCombinedStyle("container"),
          sheetStyles,
          { transform: [{ translateY }] },
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
          strokeWidth={4}
          onClick={handleClose}
        />
      </Animated.View>
    </Modal>
  );
};

const sheetStyles = StyleSheet.create({
  sheet: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    zIndex: 2,
    backgroundColor: "#f5f7fa",
    padding: 20,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
});

export default PhaselisHOC<PopupProps, PopupExtraProps>(Popup);
