import { createStyleSheet } from "react-native-unistyles";

const stylesheet_picker_header = createStyleSheet({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {},
  closeIconSlot: {
    justifyContent: "center",
  },
  closeIcon: {},
});

const stylesheet_picker_no_option = createStyleSheet({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
  },
});

const stylesheet_picker_option_slot = createStyleSheet({
  container: {},
  selected: {},
  text: {},
  selectedText: {},
});

const stylesheet_picker_options_slot = createStyleSheet({
  container: {},
  element: {},
  topLinearGradient: {
    height: 32,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  bottomLinearGradient: {
    position: "absolute",
    height: 48,
    bottom: 32,
    left: 0,
    right: 0,
    zIndex: 1,
  },
});

//InputSlot
const stylesheet = createStyleSheet({
  // CONTAINER
  container: {
    width: "100%",
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
      size: {
        xxs: {},
        xs: {},
        sm: {},
        md: {},
        lg: {},
        xl: {},
        xxl: {},
      },
    },
  },
  // ELEMENT
  element: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    numberOfLines: 1,
    variants: {
      error: {},
      disabled: {},
      focus: {},
    },
    size: {
      xs: {},
      sm: {},
      md: {},
      lg: {},
      xl: {},
      xxl: {},
    },
  },
  // LEFT SLOT
  leftSlot: {
    variants: {
      error: {},
      disabled: {},
      focus: {},
      size: {
        xs: {},
        sm: {},
        md: {},
        lg: {},
        xl: {},
        xxl: {},
      },
    },
  },
  // RIGHT SLOT
  rightSlot: {
    variants: {
      error: {},
      disabled: {},
      focus: {},
      size: {
        xs: {},
        sm: {},
        md: {},
        lg: {},
        xl: {},
        xxl: {},
      },
    },
  },
});

export {
  stylesheet_picker_header,
  stylesheet_picker_no_option,
  stylesheet_picker_option_slot,
  stylesheet_picker_options_slot,
};
export default stylesheet;
