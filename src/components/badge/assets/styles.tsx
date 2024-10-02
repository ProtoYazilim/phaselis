import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet({
  //@ts-ignore
  container: {
    flexDirection: "row",
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
      loading: {
        true: {},
      },
    },
  },
  element: {
    backgroundColor: "aqua",
    borderWidth: 1,
    borderColor: "navy",
    position: "absolute",
    zIndex: 1,
    borderRadius: 16,
    height: 20,
    paddingLeft: 8,
    paddingRight: 8,
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
  text: {
    color: "white",
    fontSize: 14,
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
    },
  },
  leftSlot: {
    color: "white",
    marginRight: 8,
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
    },
  },
  rightSlot: {
    color: "white",
    marginLeft: 8,
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
    },
  },
});

export default stylesheet;
