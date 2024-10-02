import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet({
  // CONTAINER
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
  // ELEMENT
  element: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    variants: {
      error: {},
      disabled: {},
      focus: {},
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
  // LEFT SLOT
  leftSlot: {
    flex: 1,
    variants: {
      error: {},
      disabled: {},
      focus: {},
    },
  },
  // RIGHT SLOT
  rightSlot: {
    flex: 1,
    variants: {
      error: {},
      disabled: {},
      focus: {},
    },
  },
});

export default stylesheet;
