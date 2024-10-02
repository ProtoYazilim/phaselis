import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet({
  container: {
    variants: {
      background: {
        true: {
          flex: 1,
        },
      },
      disabled: {
        true: {},
      },
      loading: {
        true: {},
      },
    },
  },
  element: {
    variants: {
      background: {
        true: {
          flex: 1,
        },
      },
      disabled: {
        true: {},
      },
    },
  },
});

export default stylesheet;
