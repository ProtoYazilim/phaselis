import type { FC } from "react";
import type { BottomSheetProps } from "./types";
import { StyleSheet, TouchableOpacity, Modal, Animated } from "react-native";
import { useEffect, useRef, useState } from "react";
import { BlurView } from "@react-native-community/blur";
import { useColors } from "../provider";
import type { PhaselisColors } from "../../theme";

const BottomSheet: FC<BottomSheetProps> = ({
  show = false,
  duration = 500,
  children,
  onClose,
  fullScreenModal = false,
  maxHeightModal = "40%",
  backgroundColor,
}) => {
  // Use a larger value to ensure the sheet slides from off-screen
  const INITIAL_OFFSET = 1000;
  const translateY = useRef(new Animated.Value(INITIAL_OFFSET)).current;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const Colors = useColors<PhaselisColors>();

  useEffect(() => {
    if (show) {
      setIsModalVisible(true);
      // Animate to open position
      Animated.timing(translateY, {
        toValue: 0,
        duration,
        useNativeDriver: true,
      }).start();
    } else {
      // Animate to closed position and then close the modal
      Animated.timing(translateY, {
        toValue: INITIAL_OFFSET,
        duration,
        useNativeDriver: true,
      }).start(() => {
        setIsModalVisible(false);
        onClose?.(); // Close modal after animation completes
      });
    }
  }, [show, duration, onClose, translateY]);

  return (
    <Modal transparent={true} visible={isModalVisible} animationType="fade">
      <BlurView style={sheetStyles.absolute} blurType="dark" blurAmount={1} />
      <TouchableOpacity style={{ flex: 1 }} onPress={onClose} />
      <Animated.View
        style={[
          sheetStyles.sheet,
          { backgroundColor: backgroundColor || Colors.Primary[50] },
          {
            transform: [{ translateY }],
            height: fullScreenModal ? "100%" : undefined,
            maxHeight: fullScreenModal ? "100%" : maxHeightModal,
          },
        ]}
      >
        {children}
      </Animated.View>
    </Modal>
  );
};

const sheetStyles = StyleSheet.create({
  sheet: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    zIndex: 2,
    paddingVertical: 16,
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default BottomSheet;
