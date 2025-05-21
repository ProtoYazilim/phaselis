import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet({
  container: {
    width: "100%",
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
          alignItems: "flex-start",
          justifyContent: "flex-start",
        },
      },
    },
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "middle",
    flex: 1,
    variants: {
      error: {},
      disabled: {},
      focus: {},
      textarea: {
        true: {
          textAlignVertical: "top",
          verticalAlign: "top",
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
          justifyContent: "flex-end",
        },
      },
    },
  },
});

export default stylesheet;
