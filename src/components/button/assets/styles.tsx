import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet({
  container: {
    borderWidth: 1,
    justifyContent: "center",
    variants: {
      pressed: {
        true: {},
        false: {},
      },
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
      pressed: {
        true: {},
        false: {},
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
  text: {
    fontFamily: "Poppins",
    textAlign: "center",
    variants: {
      pressed: {
        true: {},
        false: {},
      },
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
      pressed: {
        true: {},
        false: {},
      },
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
      pressed: {
        true: {},
        false: {},
      },
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
