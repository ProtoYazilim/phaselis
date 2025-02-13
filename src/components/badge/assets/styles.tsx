import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet({
  container: {
    flexDirection: "row",
  },
  element: {
    backgroundColor: "aqua",
    borderWidth: 1,
    borderColor: "navy",
    position: "absolute",
    zIndex: 1,
    borderRadius: 16,
    height: 20,
    paddingLeft: 8,
    paddingRight: 8,
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
    color: "white",
    fontSize: 14,
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
  leftIcon: {
    color: "white",
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
  rightIcon: {
    color: "white",
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
