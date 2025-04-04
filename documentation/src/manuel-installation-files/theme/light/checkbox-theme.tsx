import { Colors } from "../colors";
import { FontSizes, Heights, Radius } from "../spacings";

export default {
  checkbox: {
    default: {
      container: {
        variants: {
          size: {
            xs: {
              height: Heights.XSminHeight,
            },
            sm: {
              height: Heights.SMminHeight,
            },
            md: {
              height: Heights.MDminHeight,
            },
            lg: {
              height: Heights.LGminHeight,
            },
            xl: {
              height: Heights.XLminHeight,
            },
            xxl: {
              height: Heights.XXLminHeight,
            },
          },
        },
      },
      icon: {
        variants: {
          size: {
            xs: {
              height: 16,
              width: 16,
            },
            sm: {
              height: 24,
              width: 24,
            },
            md: {
              height: 32,
              width: 32,
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
          pressed: {
            true: {
              height: 16,
              width: 16,
            },
          },
        },
      },
      element: {
        borderRadius: Radius.MD,
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
      text: {
        fontFamily: "Poppins",
        variants: {
          size: {
            xs: {
              fontSize: FontSizes.SM,
            },
            sm: {
              fontSize: FontSizes.MD,
            },
            md: {
              fontSize: FontSizes.MD,
            },
            lg: {
              fontSize: FontSizes.LG,
            },
            xl: {
              fontSize: FontSizes.XL,
            },
            xxl: {
              fontSize: FontSizes.XL,
            },
          },
        },
      },
    },
    primary: {
      icon: {
        color: Colors.Primary[600],
        variants: {
          disabled: {
            true: {
              color: Colors.Primary[200],
            },
          },
          pressed: {
            true: {
              color: Colors.Primary[800],
            },
          },
        },
      },
      element: {
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
      icon: {
        color: Colors.Secondary[600],
        variants: {
          disabled: {
            true: {
              color: Colors.Secondary[200],
            },
          },
          pressed: {
            true: {
              color: Colors.Secondary[800],
            },
          },
        },
      },
      element: {
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
      icon: {
        color: Colors.Tertiary[600],
        variants: {
          disabled: {
            true: {
              color: Colors.Tertiary[200],
            },
          },
          pressed: {
            true: {
              color: Colors.Tertiary[800],
            },
          },
        },
      },
      element: {
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
