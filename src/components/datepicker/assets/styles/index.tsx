import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#979797",
    borderRadius: 6,
    width: "100%",
    variants: {
      disabled: {
        true: {
          opacity: 0.51,
        },
      },
      focus: {
        true: {
          borderColor: "blue",
        },
      },
      error: {
        true: {
          borderColor: "red",
        },
      },
      size: {
        xs: {
          height: 24,
        },
        sm: {
          height: 36,
        },
        md: {
          height: 48,
        },
        lg: {
          height: 56,
        },
        xl: {
          height: 64,
        },
        xxl: {
          height: 72,
        },
      },
    },
  },
  element: {
    flex: 1,
    variants: {
      error: {},
      disabled: {},
      focus: {},
      textarea: {
        true: {
          height: "100%",
        },
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
    flex: 1,
    variants: {
      error: {},
      disabled: {},
      focus: {},
      textarea: {
        true: {
          alignSelf: "flex-start",
        },
      },
    },
  },
  rightSlot: {
    flex: 1,
    variants: {
      error: {},
      disabled: {},
      focus: {},
      textarea: {
        true: {
          alignSelf: "flex-start",
        },
      },
    },
  },
});

export default stylesheet;
