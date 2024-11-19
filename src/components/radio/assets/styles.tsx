import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet({
  container: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    variants: {
      disabled: {
        true: {},
      },
    },
  },
  text: {
    variants: {
      disabled: {
        true: {
          color: "gray",
        },
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
    height: 36,
    variants: {
      disabled: {
        true: {
          borderColor: "gray",
          backgroundColor: "gray",
        },
      },
      size: {
        xs: {
          height: 16,
          width: 16,
        },
        sm: {
          height: 20,
          width: 20,
        },
        md: {
          height: 26,
          width: 26,
        },
        lg: {
          height: 42,
          width: 42,
        },
        xl: {
          height: 50,
          width: 50,
        },
        xxl: {
          height: 80,
          width: 80,
        },
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
          backgroundColor: "gray",
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
