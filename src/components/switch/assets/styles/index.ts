import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet({
  container: {
    // STYLES
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  track: {
    // STYLES
    alignItems: "flex-start",
    width: 86,
    height: 40,
    padding: 5,
    onColor: "green",
    offColor: "red",
    // VARIANTS
    variants: {
      disabled: {
        true: {},
      },
    },
  },
  thumb: {
    // STYLES
    padding: 10,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    onColor: "green",
    offColor: "red",
    // VARIANTS
    variants: {
      disabled: {
        true: {},
      },
    },
  },
  leftIcon: {
    position: "absolute",
    left: 10,
    top: 8,
    color: "red",
    variants: {
      disabled: {
        true: {},
      },
    },
  },
  rightIcon: {
    position: "absolute",
    right: 10,
    top: 8,
    color: "blue",
    variants: {
      disabled: {
        true: {},
      },
    },
  },
});

export default stylesheet;
