import { Colors } from "../colors";
import { Spacings } from "../spacings";

export default {
  radio: {
    default: {
      innerElement: {},
      outerElement: {
        variants: {
          size: {
            xs: {
              height: 24,
              width: 24,
            },
            sm: {
              height: 32,
              width: 32,
            },
            md: {
              height: 40,
              width: 40,
            },
            lg: {
              height: 56,
              width: 56,
            },
            xl: {
              height: 64,
              width: 64,
            },
            xxl: {
              height: 96,
              width: 96,
            },
          },
        },
      },
      container: {},
      text: {
        fontSize: Spacings.MD,
      },
    },
    primary: {
      innerElement: {
        backgroundColor: Colors.Primary[600],
        variants: {
          disabled: {
            true: {
              backgroundColor: Colors.Primary[200],
            },
          },
        },
      },
      outerElement: {
        borderColor: Colors.Primary[950],
        variants: {
          disabled: {
            true: {
              borderColor: Colors.Primary[100],
              backgroundColor: Colors.Primary[50],
            },
          },
        },
      },
      text: {
        color: Colors.Primary[950],
        variants: {
          disabled: {
            true: {
              color: Colors.Primary[200],
            },
          },
        },
      },
    },
    secondary: {
      innerElement: {
        backgroundColor: Colors.Secondary[600],
        variants: {
          disabled: {
            true: {
              backgroundColor: Colors.Secondary[200],
            },
          },
        },
      },
      outerElement: {
        borderColor: Colors.Secondary[950],
        variants: {
          disabled: {
            true: {
              borderColor: Colors.Secondary[100],
              backgroundColor: Colors.Secondary[50],
            },
          },
        },
      },
      text: {
        color: Colors.Secondary[950],
        variants: {
          disabled: {
            true: {
              color: Colors.Secondary[200],
            },
          },
        },
      },
    },
    tertiary: {
      innerElement: {
        backgroundColor: Colors.Tertiary[600],
        variants: {
          disabled: {
            true: {
              backgroundColor: Colors.Tertiary[200],
            },
          },
        },
      },
      outerElement: {
        borderColor: Colors.Tertiary[950],
        variants: {
          disabled: {
            true: {
              borderColor: Colors.Tertiary[100],
              backgroundColor: Colors.Tertiary[50],
            },
          },
        },
      },
      text: {
        color: Colors.Tertiary[950],
        variants: {
          disabled: {
            true: {
              color: Colors.Tertiary[200],
            },
          },
        },
      },
    },
  },
};
