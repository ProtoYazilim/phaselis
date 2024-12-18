import { createStyleSheet } from "react-native-unistyles";

export default createStyleSheet({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    color: "#373d3f",
    variants: {
      bold: {
        true: {},
      },
      italic: {
        true: {},
      },
      weight: {
        light: {},
        regular: {},
        medium: {},
        semiBold: {},
        bold: {},
      },
    },
  },
});
