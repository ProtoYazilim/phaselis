import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet({
  innerElement: {
    backgroundColor: "blue",
  },
  outerElement: {
    borderColor: "black",
    backgroundColor: "transparent",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    height: 36,
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
    gap: 10,
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
    gap: 10,
    variants: {
      disabled: {
        true: {},
      },
    },
  },
});

export default stylesheet;
export { stylesheet_group };
