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
        sm: {
          height: 28,
        },
        md: {
          height: 36,
        },
        lg: {
          height: 44,
        },
      },
      required: {
        true: {},
      },
    },
  },
  label: {

    lineHeight: 24,
    marginBottom: 4,
    variants: {
      disabled: {
        true: {

        },
      },
      error: {
        true: {

        },
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

    lineHeight: 21,
    marginTop: 4,
    variants: {
      disabled: {
        true: {

        },
      },
      error: {
        true: {

        },
      },
      required: { true: {} },
    },
  },
});

export default stylesheet;
