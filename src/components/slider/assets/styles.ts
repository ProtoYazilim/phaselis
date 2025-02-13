import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet({
  // CONTAINER
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    variants: {
      disabled: {
        true: {},
      },
      focus: {
        true: {},
      },
      error: {
        true: {},
      },
    },
  },
  // ELEMENT
  element: {
    flex: 1,
    width: "100%",
    variants: {
      error: {},
      disabled: {},
      focus: {},
    },
  },
});

export default stylesheet;
