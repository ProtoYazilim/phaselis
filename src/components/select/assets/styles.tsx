import { createStyleSheet } from "react-native-unistyles";

const stylesheet_picker_header = createStyleSheet({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 22,
  },
  closeIconSlot: {
    borderRadius: 28,
    borderWidth: 1,
    justifyContent: "center",
  },
  closeIcon: {},
});

const stylesheet_picker_no_option = createStyleSheet({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    marginHorizontal: 10,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
});

const stylesheet_picker_option_slot = createStyleSheet({
  container: {
    backgroundColor: "#FFFFFF",
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 19,
  },
  selected: {},
  text: {},
});

const stylesheet_picker_options_slot = createStyleSheet({
  container: {},
  element: {},
});

//InputSlot
const stylesheet = createStyleSheet({
  // CONTAINER
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#979797",
    borderRadius: 6,
    width: "100%",
    variants: {
      disabled: {
        true: {
          backgroundColor: "gray",
        },
      },
      focus: {
        true: {
          borderColor: "blue",
        },
      },
      error: {
        true: {
          borderColor: "red",
        },
      },
      size: {
        xxs: {
          height: 16,
        },
        xs: {
          height: 24,
        },
        sm: {
          height: 36,
        },
        md: {
          height: 48,
        },
        lg: {
          height: 56,
        },
        xl: {
          height: 64,
        },
        xxl: {
          height: 72,
        },
      },
    },
  },
  // ELEMENT
  element: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
    flex: 1,
    variants: {
      error: {},
      disabled: {},
      focus: {},
    },
  },
  // RIGHT SLOT
  rightSlot: {
    flex: 1,
    variants: {
      error: {},
      disabled: {},
      focus: {},
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
