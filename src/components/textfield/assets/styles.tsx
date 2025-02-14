import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    variants: {
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
        xs: {},
        sm: {},
        md: {},
        lg: {},
        xl: {},
        xxl: {},
      },
      textarea: {
        true: {
          justifyContent: "flex-start",
        },
      },
    },
  },
  element: {
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "middle",
    textAlignVertical: "center",
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
