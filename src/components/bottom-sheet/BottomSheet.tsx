import React, { FC, useEffect, useRef } from "react";
import { StyleSheet, TouchableOpacity, Modal, Animated } from "react-native";
import { BottomSheetProps } from "./types";

const BottomSheet: FC<BottomSheetProps> = ({
  show = false,
  duration = 500,
  children,
  onClose,
  fullScreenModal = false,
  maxHeightModal = "40%",
}) => {
  const HEIGHT = useRef(500);
  const translateY = useRef(new Animated.Value(0)).current;
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const backdropOpacity = translateY.interpolate({
    inputRange: [0, HEIGHT.current],
    outputRange: [1, 0],
  });

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
        toValue: HEIGHT.current,
        duration,
        useNativeDriver: true,
      }).start(() => {
        setIsModalVisible(false);
        onClose?.(); // Close modal after animation completes
      });
    }
  }, [show, duration, onClose]);

  return (
    <Modal transparent={true} visible={isModalVisible} animationType="fade">
      <Animated.View
        style={[sheetStyles.backdrop, { opacity: backdropOpacity }]}
      >
        <TouchableOpacity style={{ flex: 1 }} onPress={onClose} />
      </Animated.View>
      <Animated.View
        style={[
          sheetStyles.sheet,
          {
            transform: [{ translateY }],
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
    backgroundColor: "#F6F7F8",
    paddingVertical: 16,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
});

export default BottomSheet;
