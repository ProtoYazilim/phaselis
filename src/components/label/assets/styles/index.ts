import { createStyleSheet } from "react-native-unistyles";

export default createStyleSheet({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    variants: {
      bold: {
        true: {
          fontWeight: "bold",
        },
      },
      italic: {
        true: {
          fontStyle: "italic",
        },
      },
      weight: {
        light: {
          fontWeight: "300",
        },
        regular: {
          fontWeight: "400",
        },
        medium: {
          fontWeight: "500",
        },
        semiBold: {
          fontWeight: "600",
        },
        bold: {
          fontWeight: "700",
        },
      },
    },
  },
});
