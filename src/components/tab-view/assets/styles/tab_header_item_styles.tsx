import { createStyleSheet } from "react-native-unistyles";

const tab_header_item_styles = createStyleSheet({
  container: {
    // STYLES
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    // height: 32,
    flexDirection: "row",
    gap: 8,
    // VARIANTS
    variants: {
      scrollable: {
        true: {
          minWidth: 100,
        },
        false: {
          minWidth: "auto",
        },
      },
      active: {
        true: {
          borderBottomColor: "#2A91FF",
        },
        false: {
          borderBottomColor: "transparent",
        },
      },
    },
  },
  element: {
    // VARIANTS
    variants: {
      scrollable: {
        true: {
          width: "100%",
          flexWrap: "wrap",
          flexDirection: "row",
        },
        false: {
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          flex: 1,
        },
      },
      active: {},
    },
  },
  text: {},
  leftSlot: {
    variants: {
      scrollable: {},
      active: {},
    },
  },
  rightSlot: {
    variants: {
      scrollable: {},
      active: {},
    },
  },
});
export default tab_header_item_styles;
