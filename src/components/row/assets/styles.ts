import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet({
  self: {
    flexDirection: "row",
    width: "100%",
    variants: {
      disabled: {
        true: {},
      },
    },
  },
});

export default stylesheet;
