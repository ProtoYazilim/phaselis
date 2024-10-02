import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet({
  container: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    variants: {
      disabled: {
        true: {
          opacity: 0.51,
        },
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
  text: {
    variants: {
      disabled: {
        true: {},
      },
      size: {
        sm: {},
        md: {},
        lg: {},
      },
    },
  },
  outerElement: {
    borderColor: "black",
    backgroundColor: "transparent",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    variants: {
      disabled: {
        true: {},
      },
      size: {
        sm: {},
        md: {},
        lg: {},
      },
    },
  },
  innerElement: {
    backgroundColor: "blue",
    variants: {
      disabled: {
        true: {},
      },
      size: {
        sm: {},
        md: {},
        lg: {},
      },
    },
  },
  slot: {
    flex: 1,
    variants: {
      disabled: {
        true: {},
      },
      size: {
        sm: {},
        md: {},
        lg: {},
      },
    },
  },
});

const stylesheet_group = createStyleSheet({
  group: {
    flexDirection: "column",
    gap: 10,
    variants: {
      disabled: {
        true: {
          opacity: 0.51,
        },
      },
      size: {
        sm: {},
        md: {},
        lg: {},
      },
    },
  },
});

export default stylesheet;
export { stylesheet_group };
