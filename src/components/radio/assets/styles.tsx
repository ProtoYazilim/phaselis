import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet({
  innerElement: {},
  outerElement: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
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
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    variants: {
      disabled: {
        true: {},
      },
    },
  },
});

const stylesheet_group = createStyleSheet({
  group: {
    flexDirection: "column",
    variants: {
      disabled: {
        true: {},
      },
    },
  },
});

export default stylesheet;
export { stylesheet_group };
