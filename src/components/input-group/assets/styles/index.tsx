import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet({
  //@ts-ignore
  container: {
    alignItems: "flex-start",
    variants: {
      error: {
        true: {},
      },
      disabled: {
        true: {},
      },
      size: {
        sm: {},
        md: {},
        lg: {},
      },
      required: {
        true: {},
      },
    },
  },
  label: {
    variants: {
      disabled: {
        true: {},
      },
      error: {
        true: {},
      },
      size: {
        sm: {},
        md: {},
        lg: {},
      },
      required: { true: {} },
    },
  },
  message: {
    variants: {
      disabled: {
        true: {},
      },
      error: {
        true: {},
      },
      required: { true: {} },
    },
  },
});

export default stylesheet;
