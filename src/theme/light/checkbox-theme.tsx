import { LightColors } from "../LightColors";
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
        color: LightColors.Primary[600],
        variants: {
          disabled: {
            true: {
              color: LightColors.Primary[200],
            },
          },
          pressed: {
            true: {
              color: LightColors.Primary[800],
            },
          },
        },
      },
      element: {
        borderColor: LightColors.Primary[950],
        variants: {
          disabled: {
            true: {
              borderColor: LightColors.Primary[100],
              backgroundColor: LightColors.Primary[50],
            },
          },
        },
      },
      text: {
        variants: {
          disabled: {
            true: {
              color: LightColors.Primary[200],
            },
          },
        },
      },
    },
    secondary: {
      icon: {
        color: LightColors.Secondary[600],
        variants: {
          disabled: {
            true: {
              color: LightColors.Secondary[200],
            },
          },
          pressed: {
            true: {
              color: LightColors.Secondary[800],
            },
          },
        },
      },
      element: {
        borderColor: LightColors.Secondary[950],
        variants: {
          disabled: {
            true: {
              borderColor: LightColors.Secondary[100],
              backgroundColor: LightColors.Secondary[50],
            },
          },
        },
      },
      text: {
        variants: {
          disabled: {
            true: {
              color: LightColors.Secondary[200],
            },
          },
        },
      },
    },
    tertiary: {
      icon: {
        color: LightColors.Tertiary[600],
        variants: {
          disabled: {
            true: {
              color: LightColors.Tertiary[200],
            },
          },
          pressed: {
            true: {
              color: LightColors.Tertiary[800],
            },
          },
        },
      },
      element: {
        borderColor: LightColors.Tertiary[950],
        variants: {
          disabled: {
            true: {
              borderColor: LightColors.Tertiary[100],
              backgroundColor: LightColors.Tertiary[50],
            },
          },
        },
      },
      text: {
        variants: {
          disabled: {
            true: {
              color: LightColors.Tertiary[200],
            },
          },
        },
      },
    },
  },
};
