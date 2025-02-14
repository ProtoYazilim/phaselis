import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet({
  container: {
    borderWidth: 1,
    justifyContent: "center",
    variants: {
      loading: {
        true: {},
      },
      full: {
        true: {},
      },
    },
  },
  element: {
    flexDirection: "row",
    justifyContent: "center",
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
    },
  },
  text: {
    fontFamily: "Poppins",
    textAlign: "center",
    variants: {
      size: {
        xs: {},
        sm: {},
        md: {},
        lg: {},
        xl: {},
        xxl: {},
      },
      loading: {
        true: {},
      },
    },
  },

  leftSlot: {
    variants: {
      disabled: {
        true: {},
      },
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
  rightSlot: {
    variants: {
      disabled: {
        true: {},
      },
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
