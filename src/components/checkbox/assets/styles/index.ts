import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    variants: {
      size: {
        xs: {},
        sm: {},
        md: {},
        lg: {},
        xl: {},
        xxl: {},
      },
      error: {
        true: {},
      },
      disabled: {
        true: {},
      },
      focus: {
        true: {},
      },
    },
  },
  icon: {
    variants: {
      size: {
        xs: {},
        sm: {},
        md: {},
        lg: {},
        xl: {},
        xxl: {},
      },
    },
  },
  element: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    variants: {
      size: {
        xs: {},
        sm: {},
        md: {},
        lg: {},
        xl: {},
        xxl: {},
      },
    },
  },
  text: {
    variants: {
      size: {
        xs: {},
        sm: {},
        md: {},
        lg: {},
        xl: {},
        xxl: {},
      },
    },
  },
});

export default stylesheet;
