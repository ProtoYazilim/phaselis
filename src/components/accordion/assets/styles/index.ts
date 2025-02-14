import { createStyleSheet } from "react-native-unistyles";
const stylesheet_header = createStyleSheet({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    variants: {
      disabled: {
        true: {},
      },
    },
  },
  text: {
    fontSize: 16,
    variants: {
      disabled: {
        true: {},
      },
    },
  },
  icon: {
    color: "black",
    variants: {
      disabled: {
        true: {},
      },
    },
  },
  drop: {
    color: "black",
    variants: {
      disabled: {
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
      disabled: {
        true: {},
      },
    },
  },
  element: {
    variants: {
      disabled: {
        true: {},
      },
    },
  },
});

const stylesheet_list = createStyleSheet({
  container: {
    variants: {
      disabled: {
        true: {},
      },
    },
  },
  element: {
    variants: {
      disabled: {
        true: {},
      },
    },
  },
});

export { stylesheet_header, stylesheet_item, stylesheet_list };
