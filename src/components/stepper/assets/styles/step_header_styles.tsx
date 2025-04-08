import { createStyleSheet } from "react-native-unistyles";

const tab_header_styles = createStyleSheet({
  container: {
    // STYLES
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    // VARIANTS
    variants: {},
  },
  element: {
    backgroundColor: "lightgrey",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 3,
    position: "relative",
    // VARIANTS
    variants: {
      isDisabled: {
        true: {},
      },
      isActive: {
        true: {},
      },
      isCompleted: {
        true: {},
      },
    },
  },
  text: {
    textAlign: "center",
    // VARIANTS
    variants: {
      isCompleted: {
        true: {},
      },
      isActive: {
        true: {},
      },
    },
  },
  topText: {
    textAlign: "center",
    // VARIANTS
    variants: {
      isCompleted: {
        true: {},
      },
      isActive: {
        true: {},
      },
    },
  },
  leftText: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    // VARIANTS
    variants: {
      isCompleted: {
        true: {},
      },
      isActive: {
        true: {},
      },
    },
  },
  rightText: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    // VARIANTS
    variants: {
      isCompleted: {
        true: {},
      },
      isActive: {
        true: {},
      },
    },
  },
  bottomText: {
    textAlign: "center",
    // VARIANTS
    variants: {
      isCompleted: {
        true: {},
      },
      isActive: {
        true: {},
      },
    },
  },
  number: {
    variants: {
      isActive: {
        true: {},
      },
    },
  },
  leftTrail: {
    height: 1,
    flex: 1,
    zIndex: -1,
    marginLeft: -1,
    // VARIANTS
    variants: {
      isCompleted: {
        true: {},
      },
      isActive: {
        true: {},
      },
      isFirst: {
        true: {},
      },
    },
  },
  rightTrail: {
    height: 1,
    flex: 1,
    zIndex: -1,
    marginRight: -1,
    variants: {
      isCompleted: {
        true: {},
      },
      isLast: {
        true: {},
      },
    },
  },
  completeIcon: {},
});

export default tab_header_styles;
