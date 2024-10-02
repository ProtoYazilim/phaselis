import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet({
  container: {
    // STYLES
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    // VARIANTS
    variants: {
      outline: {
        true: {},
      },
      disabled: {
        true: {},
      },
      loading: {
        true: {},
      },
      size: {
        sm: {},
        md: {},
        lg: {},
      },
    },
  },
  element: {
    // VARIANTS
    variants: {
      outline: {
        true: {},
      },
      disabled: {
        true: {},
      },
      loading: {
        true: {},
      },
      size: {
        sm: {},
        md: {},
        lg: {},
      },
    },
  },
  track: {
    // STYLES
    alignItems: "flex-start",
    height: 40,
    padding: 5,
    onColor: "green",
    offColor: "red",
    // VARIANTS
    variants: {
      outline: {
        true: {},
      },
      disabled: {
        true: {},
      },
      loading: {
        true: {},
      },
    },
  },
  thumb: {
    // STYLES
    height: "100%",
    padding: 10,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    onColor: "green",
    offColor: "red",
    // VARIANTS
    variants: {
      outline: {
        true: {},
      },
      disabled: {
        true: {},
      },
      loading: {
        true: {},
      },
    },
  },
  leftIcon: {
    position: "absolute",
    left: 10,
    top: 10,
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
    top: 10,
    color: "blue",
    variants: {
      disabled: {
        true: {},
      },
    },
  },
});

export default stylesheet;
