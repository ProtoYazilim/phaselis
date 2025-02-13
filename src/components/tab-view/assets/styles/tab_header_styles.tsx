import { createStyleSheet } from "react-native-unistyles";

const tab_header_styles = createStyleSheet({
  container: {
    // STYLES
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "flex-start",
    // VARIANTS
  },
  element: {
    flexWrap: "wrap",
    flexDirection: "row",
    // VARIANTS
    variants: {
      scrollable: {
        true: {
          width: "100%",
        },
        false: {
          justifyContent: "center",
          flex: 1,
        },
      },
    },
  },
});

export default tab_header_styles;
