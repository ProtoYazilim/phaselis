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
    width: 32,
    height: 32,
    backgroundColor: "lightgrey",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 3,
    position: "relative",
    // VARIANTS
    variants: {
      isDisabled: {
        true: {
          backgroundColor: "grey",
        },
      },
      isActive: {
        true: {
          backgroundColor: "lightblue",
        },
      },
      isCompleted: {
        true: {
          backgroundColor: "blue",
        },
      },
    },
  },
  text: {
    textAlign: "center",
    // VARIANTS
    variants: {
      isCompleted: {
        true: {
          color: "blue",
        },
      },
      isActive: {
        true: {
          color: "black",
        },
      },
    },
  },
  topText: {
    textAlign: "center",
    // VARIANTS
    variants: {
      isCompleted: {
        true: {
          color: "blue",
        },
      },
      isActive: {
        true: {
          color: "black",
        },
      },
    },
  },
  leftText: {
    textAlign: "center",
    // VARIANTS
    variants: {
      isCompleted: {
        true: {
          color: "blue",
        },
      },
      isActive: {
        true: {
          color: "black",
        },
      },
    },
  },
  rightText: {
    textAlign: "center",
    // VARIANTS
    variants: {
      isCompleted: {
        true: {
          color: "blue",
        },
      },
      isActive: {
        true: {
          color: "black",
        },
      },
    },
  },
  bottomText: {
    textAlign: "center",
    // VARIANTS
    variants: {
      isCompleted: {
        true: {
          color: "blue",
        },
      },
      isActive: {
        true: {
          color: "black",
        },
      },
    },
  },
  number: {
    color: "white",
    variants: {
      isActive: {
        true: {
          color: "black",
        },
      },
    },
  },
  leftTrail: {
    height: 1,
    flex: 1,
    zIndex: -1,
    backgroundColor: "grey",
    // VARIANTS
    variants: {
      isCompleted: {
        true: {
          backgroundColor: "blue",
        },
      },
      isActive: {
        true: {
          backgroundColor: "blue",
        },
      },
      isFirst: {
        true: {
          backgroundColor: "transparent",
        },
      },
    },
  },
  rightTrail: {
    height: 1,
    flex: 1,
    zIndex: -1,
    backgroundColor: "grey",
    variants: {
      isCompleted: {
        true: {
          backgroundColor: "blue",
        },
      },
      isLast: {
        true: {
          backgroundColor: "transparent",
        },
      },
    },
  },
  completeIcon: {
    color: "white",
  },
});

export default tab_header_styles;
