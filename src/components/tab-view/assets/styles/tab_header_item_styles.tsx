import { createStyleSheet } from "react-native-unistyles";

const tab_header_item_styles = createStyleSheet({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    flexDirection: "row",
    gap: 8,
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
        true: {},
        false: {},
      },
    },
  },
  text: {},
  leftSlot: {},
  rightSlot: {},
});
export default tab_header_item_styles;
