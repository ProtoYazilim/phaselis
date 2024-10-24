import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, Modal, Animated } from "react-native";

interface BottomSheetProps {
  show: boolean;
  duration?: number;
  children: React.ReactNode;
  onClose: () => void;
}

const BottomSheet = ({
  show = false,
  duration = 500,
  children,
  onClose,
}: BottomSheetProps) => {
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

  return (
    <Modal transparent={true} visible={show} animationType="fade">
      <Animated.View style={[sheetStyles.backdrop, backdropStyle]}>
        <TouchableOpacity style={{ flex: 1 }} onPress={handleClose} />
      </Animated.View>
      <Animated.View
        style={[sheetStyles.sheet, { transform: [{ translateY }] }]}
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

export default BottomSheet;
