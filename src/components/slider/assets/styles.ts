import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet({
  // CONTAINER
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    variants: {
      disabled: {
        true: {},
      },
      focus: {
        true: {},
      },
      error: {
        true: {},
      },
      size: {
        xs: {},
        sm: {
          height: 36,
        },
        md: {
          height: 48,
        },
        lg: {
          height: 56,
        },
        xl: {},
        xxl: {},
      },
    },
  },
  // ELEMENT
  element: {
    width: "100%",
    minimumTrackTintColor: "blue",
    maximumTrackTintColor: "grey",
    thumbTintColor: "blue",
    variants: {
      error: {},
      disabled: {},
      focus: {},
    },
  },
});

export default stylesheet;
