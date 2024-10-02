import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet({
  //@ts-ignore
  container: {
    variants: {
      base: {
        primary: {},
        secondary: {},
        tertiary: {},
      },
      outline: {
        primary: {},
        secondary: {},
        tertiary: {},
        false: {},
      },
      disabled: {
        primary: {},
        secondary: {},
        tertiary: {},
        false: {},
      },
      loading: {
        true: {},
      },
    },
  },
  element: {
    variants: {
      primary: {
        true: {},
      },
      secondary: {
        true: {},
      },
      tertiary: {
        true: {},
      },
      outline: {
        true: {},
      },
      disabled: {
        true: {},
      },
      loading: {
        true: {},
      },
      size: {
        xs: {
          minHeight: 20,
        },
        sm: {
          minHeight: 28,
        },
        md: {
          minHeight: 36,
        },
        lg: {
          minHeight: 44,
        },
        xl: {
          minHeight: 52,
        },
        xxl: {
          minHeight: 60,
        },
      },
    },
  },
  text: {
    color: "white",
    fontSize: 18,
    variants: {
      primary: {
        true: {},
      },
      secondary: {
        true: {},
      },
      tertiary: {
        true: {},
      },
      outline: {
        true: {},
      },
      disabled: {
        true: {},
      },
      loading: {
        true: {},
      },
    },
  },
  leftSlot: {
    color: "white",
    fontSize: 18,
    variants: {
      primary: {
        true: {},
      },
      secondary: {
        true: {},
      },
      tertiary: {
        true: {},
      },
      outline: {
        true: {},
      },
      disabled: {
        true: {},
      },
      loading: {
        true: {},
      },
    },
  },
  rightSlot: {
    color: "white",
    fontSize: 18,
    variants: {
      primary: {
        true: {},
      },
      secondary: {
        true: {},
      },
      tertiary: {
        true: {},
      },
      outline: {
        true: {},
      },
      disabled: {
        true: {},
      },
      loading: {
        true: {},
      },
    },
  },
  loader: {
    variants: {
      primary: {
        true: {},
      },
      secondary: {
        true: {},
      },
      tertiary: {
        true: {},
      },
      outline: {
        true: {},
      },
      disabled: {
        true: {},
      },
      loading: {
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

export default stylesheet;
