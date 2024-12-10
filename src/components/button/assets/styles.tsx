import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet({
  //@ts-ignore
  container: {
    borderWidth: 1,
    justifyContent: "center",
    variants: {
      pressed: {
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
  leftSlot: {
    variants: {
      disabled: {
        true: {},
      },
    },
  },
  rightSlot: {
    variants: {
      disabled: {
        true: {},
      },
    },
  },
});

export default stylesheet;
