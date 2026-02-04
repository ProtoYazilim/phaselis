import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet({
  container: {
    borderWidth: 1,
    justifyContent: "center",
    variants: {
      pressed: {
        true: {
          opacity: 0.9,
        },
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
        true: {
          opacity: 0.9,
        },
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
        true: {
          opacity: 0.9,
        },
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
        true: {
          opacity: 0.9,
        },
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
        true: {
          opacity: 0.9,
        },
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
