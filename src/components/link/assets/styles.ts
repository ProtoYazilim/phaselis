import { createStyleSheet } from "react-native-unistyles";

export default createStyleSheet({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    variants: {},
  },
  text: {
    variants: {},
  },
  leftSlot: {
    marginRight: 2,
  },
  rightSlot: {
    marginLeft: 2,
  },
});
