import { Colors } from "@phaselis/theme";
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
    color: Colors.Gray[900],
    lineHeight: 24,
    marginBottom: 4,
    variants: {
      disabled: {
        true: {
          color: Colors.Gray[400],
        },
      },
      error: {
        true: {
          color: Colors.Danger[700],
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
    color: Colors.Gray[900],
    lineHeight: 21,
    marginTop: 4,
    variants: {
      disabled: {
        true: {
          color: Colors.Gray[400],
        },
      },
      error: {
        true: {
          color: Colors.Danger[700],
        },
      },
      required: { true: {} },
    },
  },
});

export default stylesheet;
