import { createStyleSheet } from "react-native-unistyles";

export default createStyleSheet({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    variants: {
      primary: {
        true: {},
      },
      secondary: {
        true: {},
      },
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
        sm: {
          height: 36,
        },
        md: {
          height: 48,
        },
        lg: {
          height: 56,
        },
      },
    },
  },
  // ELEMENT
  text: {
    fontSize: 16,
    lineHeight: 22,
    variants: {
      primary: {
        true: {
          color: "blue",
        },
      },
      secondary: {
        true: {
          color: "green",
        },
      },
      error: {},
      disabled: {},
      focus: {},
    },
  },
  leftSlot: {
    color: "black",
    marginRight: 2,
    variants: {
      primary: {
        true: {
          color: "blue",
        },
      },
      secondary: {
        true: {
          color: "green",
        },
      },
      error: {},
      disabled: {},
      focus: {},
    },
  },
  rightSlot: {
    color: "black",
    marginLeft: 2,
    variants: {
      primary: {
        true: {
          color: "blue",
        },
      },
      secondary: {
        true: {
          color: "green",
        },
      },
      error: {},
      disabled: {},
      focus: {},
    },
  },
});
