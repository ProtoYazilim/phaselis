import { Colors } from "../colors";
import { Heights, Spacings } from "../spacings";

export default {
  radio: {
    default: {
      innerElement: {},
      outerElement: {
        borderColor: Colors.Primary[950],
        borderWidth: 0.5,
        variants: {
          size: {
            xs: {
              height: Heights.XSminHeight,
              width: Heights.XSminHeight,
            },
            sm: {
              height: Heights.SMminHeight,
              width: Heights.SMminHeight,
            },
            md: {
              height: Heights.MDminHeight,
              width: Heights.MDminHeight,
            },
            lg: {
              height: Heights.LGminHeight,
              width: Heights.LGminHeight,
            },
            xl: {
              height: Heights.XLminHeight,
              width: Heights.XLminHeight,
            },
            xxl: {
              height: Heights.XXLminHeight,
              width: Heights.XXLminHeight,
            },
          },
        },
      },
      container: {
        gap: Spacings.SM,
      },
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
