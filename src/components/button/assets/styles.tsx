import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet({
  //@ts-ignore
  container: {
    borderWidth: 1,
    justifyContent: "center",
    variants: {
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
