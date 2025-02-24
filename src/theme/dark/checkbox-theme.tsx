import { DarkColors } from "../DarkColors";
import { FontSizes, Heights, Radius, Spacings } from "../spacings";

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
        },
      },
      element: {
        marginRight: Spacings.SM,
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
        fontFamily: "Roboto",
        color: DarkColors.Shades.black,
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
        color: DarkColors.Primary[600],
        variants: {
          disabled: {
            true: {
              color: DarkColors.Primary[200],
            },
          },
          pressed: {
            true: {
              color: DarkColors.Primary[800],
            },
          },
        },
      },
      element: {
        borderColor: DarkColors.Primary[950],
        variants: {
          disabled: {
            true: {
              borderColor: DarkColors.Primary[100],
              backgroundColor: DarkColors.Primary[50],
            },
          },
        },
      },
      text: {
        variants: {
          disabled: {
            true: {
              color: DarkColors.Primary[200],
            },
          },
        },
      },
    },
    secondary: {
      icon: {
        color: DarkColors.Secondary[600],
        variants: {
          disabled: {
            true: {
              color: DarkColors.Secondary[200],
            },
          },
          pressed: {
            true: {
              color: DarkColors.Secondary[800],
            },
          },
        },
      },
      element: {
        borderColor: DarkColors.Secondary[950],
        variants: {
          disabled: {
            true: {
              borderColor: DarkColors.Secondary[100],
              backgroundColor: DarkColors.Secondary[50],
            },
          },
        },
      },
      text: {
        variants: {
          disabled: {
            true: {
              color: DarkColors.Secondary[200],
            },
          },
        },
      },
    },
    tertiary: {
      icon: {
        color: DarkColors.Tertiary[600],
        variants: {
          disabled: {
            true: {
              color: DarkColors.Tertiary[200],
            },
          },
          pressed: {
            true: {
              color: DarkColors.Tertiary[800],
            },
          },
        },
      },
      element: {
        borderColor: DarkColors.Tertiary[950],
        variants: {
          disabled: {
            true: {
              borderColor: DarkColors.Tertiary[100],
              backgroundColor: DarkColors.Tertiary[50],
            },
          },
        },
      },
      text: {
        variants: {
          disabled: {
            true: {
              color: DarkColors.Tertiary[200],
            },
          },
        },
      },
    },
  },
};
