import { createStyleSheet } from "react-native-unistyles";

const tab_item_styles = createStyleSheet({
  container: {
    variants: {
      outline: {
        true: {},
      },
      disabled: {
        true: {},
      },
      loading: {
        true: {},
      },
      size: {
        sm: {},
        md: {},
        lg: {},
      },
    },
  },
});

export default tab_item_styles;
