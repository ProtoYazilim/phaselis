import { createStyleSheet } from "react-native-unistyles";
const stylesheet_header = createStyleSheet({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  text: {
    fontSize: 16,
    // VARIANTS
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
  icon: {
    color: "black",
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
    },
  },
  drop: {
    color: "black",
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
    },
  },
});

const stylesheet_item = createStyleSheet({
  container: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
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
  element: {
    // VARIANTS
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
  header: {
    // STYLE
    padding: 5,
    // VARIANTS
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
    },
  },
});

const stylesheet_list = createStyleSheet({
  container: {
    // STYLES
    // VARIANTS
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
  element: {
    // VARIANTS
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
  header: {
    // STYLE
    padding: 5,
    // VARIANTS
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
    },
  },
});

const stylesheet = createStyleSheet({
  container: {
    // STYLES
    // VARIANTS
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
  element: {
    // VARIANTS
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
  header: {
    // STYLE
    padding: 5,
    // VARIANTS
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
    },
  },
});

export { stylesheet_header, stylesheet_item, stylesheet_list };
export default stylesheet;
