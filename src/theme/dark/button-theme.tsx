import { DarkColors } from "../DarkColors";
import { FontSizes, Heights, Radius, Spacings, IconSizes } from "../spacings";

export default {
  button: {
    default: {
      container: {
        borderRadius: Radius.MD,
        variants: {
          full: {
            true: {
              flex: 1,
            },
          },
        },
      },
      element: {
        gap: Spacings.SM,
        paddingLeft: Spacings.MD,
        paddingRight: Spacings.MD,
        variants: {
          size: {
            xs: {
              minHeight: Heights.XSminHeight,
              paddingLeft: Spacings.SM,
              paddingRight: Spacings.SM,
            },
            sm: {
              minHeight: Heights.SMminHeight,
              paddingLeft: Spacings.SM,
              paddingRight: Spacings.SM,
            },
            md: {
              minHeight: Heights.MDminHeight,
            },
            lg: {
              minHeight: Heights.LGminHeight,
            },
            xl: {
              minHeight: Heights.XLminHeight,
            },
            xxl: {
              minHeight: Heights.XXLminHeight,
            },
          },
        },
      },
      text: {
        color: DarkColors.Shades.white,
        variants: {
          size: {
            xs: {
              fontSize: FontSizes.XS,
            },
            sm: {
              fontSize: FontSizes.SM,
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
              fontSize: FontSizes.XXL,
            },
          },
        },
      },
      leftSlot: {
        variants: {
          size: {
            xs: {
              width: IconSizes.XS,
              height: IconSizes.XS,
            },
            sm: {
              width: IconSizes.SM,
              height: IconSizes.SM,
            },
            md: {
              width: IconSizes.MD,
              height: IconSizes.MD,
            },
            lg: {
              width: IconSizes.LG,
              height: IconSizes.LG,
            },
            xl: {
              width: IconSizes.XL,
              height: IconSizes.XL,
            },
            xxl: {
              width: IconSizes.XXL,
              height: IconSizes.XXL,
            },
          },
        },
      },
      rightSlot: {
        color: DarkColors.Shades.white,
        variants: {
          size: {
            xs: {
              width: IconSizes.XS,
              height: IconSizes.XS,
            },
            sm: {
              width: IconSizes.SM,
              height: IconSizes.SM,
            },
            md: {
              width: IconSizes.MD,
              height: IconSizes.MD,
            },
            lg: {
              width: IconSizes.LG,
              height: IconSizes.LG,
            },
            xl: {
              width: IconSizes.XL,
              height: IconSizes.XL,
            },
            xxl: {
              width: IconSizes.XXL,
              height: IconSizes.XXL,
            },
          },
        },
      },
    },
    primary: {
      container: {
        backgroundColor: DarkColors.Primary[600],
        borderColor: DarkColors.Primary[600],
        variants: {
          pressed: {
            true: {
              backgroundColor: DarkColors.Primary[800],
              borderColor: DarkColors.Primary[800],
            },
          },
          disabled: {
            true: {
              backgroundColor: DarkColors.Primary[100],
              borderColor: DarkColors.Primary[200],
            },
          },
          loading: {
            true: {
              backgroundColor: DarkColors.Primary[300],
              borderColor: DarkColors.Primary[600],
            },
          },
        },
      },
      text: {
        variants: {
          disabled: {
            true: {
              color: DarkColors.Primary[300],
            },
          },
          loading: {
            true: {
              color: DarkColors.Primary[400],
            },
          },
        },
      },
      leftSlot: {
        variants: {
          disabled: {
            true: {
              color: DarkColors.Primary[300],
            },
          },
        },
      },
      rightSlot: {
        variants: {
          disabled: {
            true: {
              color: DarkColors.Primary[300],
            },
          },
        },
      },
    },
    primary_outline: {
      container: {
        backgroundColor: DarkColors.Transparent,
        borderColor: DarkColors.Primary[700],
        variants: {
          pressed: {
            true: {
              backgroundColor: DarkColors.Primary[50],
              borderColor: DarkColors.Primary[700],
            },
          },
          disabled: {
            true: {
              backgroundColor: DarkColors.Transparent,
              borderColor: DarkColors.Primary[300],
            },
          },
          loading: {
            true: {
              backgroundColor: DarkColors.Transparent,
              borderColor: DarkColors.Primary[300],
            },
          },
        },
      },
      text: {
        fontSize: FontSizes.MD,
        color: DarkColors.Primary[700],
        variants: {
          disabled: {
            true: {
              color: DarkColors.Primary[300],
            },
          },
          loading: {
            true: {
              color: DarkColors.Primary[400],
            },
          },
        },
      },
      leftSlot: {
        color: DarkColors.Primary[700],
        variants: {
          disabled: {
            true: {
              color: DarkColors.Primary[300],
            },
          },
          loading: {
            true: {
              color: DarkColors.Primary[400],
            },
          },
        },
      },
      rightSlot: {
        color: DarkColors.Primary[700],
        variants: {
          disabled: {
            true: {
              color: DarkColors.Primary[300],
            },
          },
        },
      },
    },
    secondary: {
      container: {
        backgroundColor: DarkColors.Secondary[600],
        borderColor: DarkColors.Secondary[600],
        variants: {
          pressed: {
            true: {
              backgroundColor: DarkColors.Secondary[800],
              borderColor: DarkColors.Secondary[800],
            },
          },
          disabled: {
            true: {
              backgroundColor: DarkColors.Secondary[100],
              borderColor: DarkColors.Secondary[200],
            },
          },
          loading: {
            true: {
              backgroundColor: DarkColors.Secondary[300],
              borderColor: DarkColors.Secondary[600],
            },
          },
        },
      },
      text: {
        fontSize: FontSizes.MD,
        variants: {
          disabled: {
            true: {
              color: DarkColors.Secondary[300],
            },
          },
        },
      },
      leftSlot: {
        variants: {
          disabled: {
            true: {
              color: DarkColors.Secondary[300],
            },
          },
        },
      },
      rightSlot: {
        variants: {
          disabled: {
            true: {
              color: DarkColors.Secondary[300],
            },
          },
        },
      },
    },
    secondary_outline: {
      container: {
        backgroundColor: DarkColors.Transparent,
        borderColor: DarkColors.Secondary[700],
        variants: {
          pressed: {
            true: {
              backgroundColor: DarkColors.Secondary[50],
              borderColor: DarkColors.Secondary[700],
            },
          },
          disabled: {
            true: {
              backgroundColor: DarkColors.Transparent,
              borderColor: DarkColors.Secondary[300],
            },
          },
          loading: {
            true: {
              backgroundColor: DarkColors.Transparent,
              borderColor: DarkColors.Secondary[300],
            },
          },
        },
      },
      text: {
        fontSize: FontSizes.MD,
        color: DarkColors.Secondary[700],
        variants: {
          disabled: {
            true: {
              color: DarkColors.Secondary[300],
            },
          },
          loading: {
            true: {
              color: DarkColors.Secondary[400],
            },
          },
        },
      },
      leftSlot: {
        color: DarkColors.Secondary[700],
        variants: {
          disabled: {
            true: {
              color: DarkColors.Secondary[300],
            },
          },
          loading: {
            true: {
              color: DarkColors.Secondary[400],
            },
          },
        },
      },
      rightSlot: {
        color: DarkColors.Secondary[700],
        variants: {
          disabled: {
            true: {
              color: DarkColors.Secondary[300],
            },
          },
        },
      },
    },
    tertiary: {
      container: {
        backgroundColor: DarkColors.Tertiary[600],
        borderColor: DarkColors.Tertiary[600],
        variants: {
          pressed: {
            true: {
              backgroundColor: DarkColors.Tertiary[800],
              borderColor: DarkColors.Tertiary[800],
            },
          },
          disabled: {
            true: {
              backgroundColor: DarkColors.Tertiary[100],
              borderColor: DarkColors.Tertiary[200],
            },
          },
          loading: {
            true: {
              backgroundColor: DarkColors.Tertiary[300],
              borderColor: DarkColors.Tertiary[600],
            },
          },
        },
      },
      element: {},
      text: {
        fontSize: FontSizes.MD,
        variants: {
          disabled: {
            true: {
              color: DarkColors.Tertiary[300],
            },
          },
          size: {},
        },
      },
      leftSlot: {
        variants: {
          disabled: {
            true: {
              color: DarkColors.Tertiary[300],
            },
          },
        },
      },
      rightSlot: {
        variants: {
          disabled: {
            true: {
              color: DarkColors.Tertiary[300],
            },
          },
        },
      },
    },
    tertiary_outline: {
      container: {
        backgroundColor: DarkColors.Transparent,
        borderColor: DarkColors.Tertiary[700],
        variants: {
          pressed: {
            true: {
              backgroundColor: DarkColors.Tertiary[50],
              borderColor: DarkColors.Tertiary[700],
            },
          },
          disabled: {
            true: {
              backgroundColor: DarkColors.Transparent,
              borderColor: DarkColors.Tertiary[300],
            },
          },
          loading: {
            true: {
              backgroundColor: DarkColors.Transparent,
              borderColor: DarkColors.Tertiary[300],
            },
          },
        },
      },
      text: {
        fontSize: FontSizes.MD,
        color: DarkColors.Tertiary[700],
        variants: {
          disabled: {
            true: {
              color: DarkColors.Tertiary[300],
            },
          },
          loading: {
            true: {
              color: DarkColors.Tertiary[400],
            },
          },
        },
      },
      leftSlot: {
        color: DarkColors.Tertiary[700],
        variants: {
          disabled: {
            true: {
              color: DarkColors.Tertiary[300],
            },
          },
          loading: {
            true: {
              color: DarkColors.Tertiary[400],
            },
          },
        },
      },
      rightSlot: {
        color: DarkColors.Tertiary[700],
        variants: {
          disabled: {
            true: {
              color: DarkColors.Tertiary[300],
            },
          },
        },
      },
    },
    danger: {
      container: {
        backgroundColor: DarkColors.Danger[700],
        borderColor: DarkColors.Danger[600],
        variants: {
          pressed: {
            true: {
              backgroundColor: DarkColors.Danger[800],
              borderColor: DarkColors.Danger[600],
            },
          },
          disabled: {
            true: {
              backgroundColor: DarkColors.Danger[100],
              borderColor: DarkColors.Danger[200],
            },
          },
          loading: {
            true: {
              backgroundColor: DarkColors.Danger[300],
              borderColor: DarkColors.Danger[600],
            },
          },
        },
      },
      text: {
        fontSize: FontSizes.MD,
        variants: {
          disabled: {
            true: {
              color: DarkColors.Danger[300],
            },
          },
          loading: {
            true: {
              color: DarkColors.Danger[400],
            },
          },
        },
      },
      leftSlot: {
        variants: {
          disabled: {
            true: {
              color: DarkColors.Danger[300],
            },
          },
        },
      },
      rightSlot: {
        variants: {
          disabled: {
            true: {
              color: DarkColors.Danger[300],
            },
          },
        },
      },
    },
    success: {
      container: {
        backgroundColor: DarkColors.Success[700],
        borderColor: DarkColors.Success[600],
        variants: {
          pressed: {
            true: {
              backgroundColor: DarkColors.Success[800],
              borderColor: DarkColors.Success[600],
            },
          },
          disabled: {
            true: {
              backgroundColor: DarkColors.Success[100],
              borderColor: DarkColors.Success[200],
            },
          },
          loading: {
            true: {
              backgroundColor: DarkColors.Success[300],
              borderColor: DarkColors.Success[600],
            },
          },
        },
      },
      text: {
        fontSize: FontSizes.MD,
        variants: {
          disabled: {
            true: {
              color: DarkColors.Success[300],
            },
          },
          loading: {
            true: {
              color: DarkColors.Success[400],
            },
          },
        },
      },
      leftSlot: {
        variants: {
          disabled: {
            true: {
              color: DarkColors.Success[300],
            },
          },
        },
      },
      rightSlot: {
        variants: {
          disabled: {
            true: {
              color: DarkColors.Success[300],
            },
          },
        },
      },
    },
  },
};
