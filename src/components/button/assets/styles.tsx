import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet({
  //@ts-ignore
  container: {
    variants: {
      base: {
        primary: {},
        secondary: {},
        tertiary: {},
        primary_outline: {},
        secondary_outline: {},
        tertiary_outline: {},
      },
      pressed: {
        primary: {},
        secondary: {},
        tertiary: {},
        primary_outline: {},
        secondary_outline: {},
        tertiary_outline: {},
      },
      disabled: {
        primary: {},
        secondary: {},
        tertiary: {},
        primary_outline: {},
        secondary_outline: {},
        tertiary_outline: {},
      },
    },
  },
  element: {
    variants: {
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
  text: {
    variants: {
      base: {
        primary: {},
        secondary: {},
        tertiary: {},
        primary_outline: {},
        secondary_outline: {},
        tertiary_outline: {},
      },
      disabled: {
        primary: {},
        secondary: {},
        tertiary: {},
        primary_outline: {},
        secondary_outline: {},
        tertiary_outline: {},
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
      base: {
        primary: {},
        secondary: {},
        tertiary: {},
        primary_outline: {},
        secondary_outline: {},
        tertiary_outline: {},
      },
      disabled: {
        primary: {},
        secondary: {},
        tertiary: {},
        primary_outline: {},
        secondary_outline: {},
        tertiary_outline: {},
      },
    },
  },
  rightSlot: {
    variants: {
      base: {
        primary: {},
        secondary: {},
        tertiary: {},
        primary_outline: {},
        secondary_outline: {},
        tertiary_outline: {},
      },
      disabled: {
        primary: {},
        secondary: {},
        tertiary: {},
        primary_outline: {},
        secondary_outline: {},
        tertiary_outline: {},
      },
    },
  },
});

export default stylesheet;
