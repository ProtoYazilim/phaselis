import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 5,
    marginRight: 10,
    variants: {
      size: {
        xs: {},
        sm: {},
        md: {},
        lg: {},
        xl: {},
        xxl: {},
      },
      error: {
        true: {},
      },
      disabled: {
        true: {},
      },
      focus: {
        true: {},
      },
    },
  },
  icon: {
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
  element: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 8,
    width: 32,
    height: 32,
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
    fontFamily: "Poppins",
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
});

export default stylesheet;
