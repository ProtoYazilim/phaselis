import { LightColors } from "../LightColors";
import { FontSizes, Heights, Radius, Spacings, IconSizes } from "../spacings";
import type { PhaselisComponentTheme } from "../types";

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
        color: LightColors.Shades.white,
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
        color: LightColors.Shades.white,
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
        color: LightColors.Shades.white,
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
        backgroundColor: LightColors.Primary[600],
        borderColor: LightColors.Primary[600],
        variants: {
          pressed: {
            true: {
              backgroundColor: LightColors.Primary[800],
              borderColor: LightColors.Primary[800],
            },
          },
          disabled: {
            true: {
              backgroundColor: LightColors.Primary[100],
              borderColor: LightColors.Primary[200],
            },
          },
          loading: {
            true: {
              backgroundColor: LightColors.Primary[300],
              borderColor: LightColors.Primary[600],
            },
          },
        },
      },
      text: {
        variants: {
          disabled: {
            true: {
              color: LightColors.Primary[300],
            },
          },
          loading: {
            true: {
              color: LightColors.Primary[400],
            },
          },
        },
      },
      leftSlot: {
        variants: {
          disabled: {
            true: {
              color: LightColors.Primary[300],
            },
          },
        },
      },
      rightSlot: {
        variants: {
          disabled: {
            true: {
              color: LightColors.Primary[300],
            },
          },
        },
      },
    },
    primary_outline: {
      container: {
        backgroundColor: LightColors.Transparent,
        borderColor: LightColors.Primary[700],
        variants: {
          pressed: {
            true: {
              backgroundColor: LightColors.Primary[50],
              borderColor: LightColors.Primary[700],
            },
          },
          disabled: {
            true: {
              backgroundColor: LightColors.Transparent,
              borderColor: LightColors.Primary[300],
            },
          },
          loading: {
            true: {
              backgroundColor: LightColors.Transparent,
              borderColor: LightColors.Primary[300],
            },
          },
        },
      },
      text: {
        fontSize: FontSizes.MD,
        color: LightColors.Primary[700],
        variants: {
          disabled: {
            true: {
              color: LightColors.Primary[300],
            },
          },
          loading: {
            true: {
              color: LightColors.Primary[400],
            },
          },
        },
      },
      leftSlot: {
        color: LightColors.Primary[700],
        variants: {
          disabled: {
            true: {
              color: LightColors.Primary[300],
            },
          },
          loading: {
            true: {
              color: LightColors.Primary[400],
            },
          },
        },
      },
      rightSlot: {
        color: LightColors.Primary[700],
        variants: {
          disabled: {
            true: {
              color: LightColors.Primary[300],
            },
          },
        },
      },
    },
    secondary: {
      container: {
        backgroundColor: LightColors.Secondary[600],
        borderColor: LightColors.Secondary[600],
        variants: {
          pressed: {
            true: {
              backgroundColor: LightColors.Secondary[800],
              borderColor: LightColors.Secondary[800],
            },
          },
          disabled: {
            true: {
              backgroundColor: LightColors.Secondary[100],
              borderColor: LightColors.Secondary[200],
            },
          },
          loading: {
            true: {
              backgroundColor: LightColors.Secondary[300],
              borderColor: LightColors.Secondary[600],
            },
          },
        },
      },
      text: {
        fontSize: FontSizes.MD,
        variants: {
          disabled: {
            true: {
              color: LightColors.Secondary[300],
            },
          },
        },
      },
      leftSlot: {
        variants: {
          disabled: {
            true: {
              color: LightColors.Secondary[300],
            },
          },
        },
      },
      rightSlot: {
        variants: {
          disabled: {
            true: {
              color: LightColors.Secondary[300],
            },
          },
        },
      },
    },
    secondary_outline: {
      container: {
        backgroundColor: LightColors.Transparent,
        borderColor: LightColors.Secondary[700],
        variants: {
          pressed: {
            true: {
              backgroundColor: LightColors.Secondary[50],
              borderColor: LightColors.Secondary[700],
            },
          },
          disabled: {
            true: {
              backgroundColor: LightColors.Transparent,
              borderColor: LightColors.Secondary[300],
            },
          },
          loading: {
            true: {
              backgroundColor: LightColors.Transparent,
              borderColor: LightColors.Secondary[300],
            },
          },
        },
      },
      text: {
        fontSize: FontSizes.MD,
        color: LightColors.Secondary[700],
        variants: {
          disabled: {
            true: {
              color: LightColors.Secondary[300],
            },
          },
          loading: {
            true: {
              color: LightColors.Secondary[400],
            },
          },
        },
      },
      leftSlot: {
        color: LightColors.Secondary[700],
        variants: {
          disabled: {
            true: {
              color: LightColors.Secondary[300],
            },
          },
          loading: {
            true: {
              color: LightColors.Secondary[400],
            },
          },
        },
      },
      rightSlot: {
        color: LightColors.Secondary[700],
        variants: {
          disabled: {
            true: {
              color: LightColors.Secondary[300],
            },
          },
        },
      },
    },
    tertiary: {
      container: {
        backgroundColor: LightColors.Tertiary[600],
        borderColor: LightColors.Tertiary[600],
        variants: {
          pressed: {
            true: {
              backgroundColor: LightColors.Tertiary[800],
              borderColor: LightColors.Tertiary[800],
            },
          },
          disabled: {
            true: {
              backgroundColor: LightColors.Tertiary[100],
              borderColor: LightColors.Tertiary[200],
            },
          },
          loading: {
            true: {
              backgroundColor: LightColors.Tertiary[300],
              borderColor: LightColors.Tertiary[600],
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
              color: LightColors.Tertiary[300],
            },
          },
          size: {},
        },
      },
      leftSlot: {
        variants: {
          disabled: {
            true: {
              color: LightColors.Tertiary[300],
            },
          },
        },
      },
      rightSlot: {
        variants: {
          disabled: {
            true: {
              color: LightColors.Tertiary[300],
            },
          },
        },
      },
    },
    tertiary_outline: {
      container: {
        backgroundColor: LightColors.Transparent,
        borderColor: LightColors.Tertiary[700],
        variants: {
          pressed: {
            true: {
              backgroundColor: LightColors.Tertiary[50],
              borderColor: LightColors.Tertiary[700],
            },
          },
          disabled: {
            true: {
              backgroundColor: LightColors.Transparent,
              borderColor: LightColors.Tertiary[300],
            },
          },
          loading: {
            true: {
              backgroundColor: LightColors.Transparent,
              borderColor: LightColors.Tertiary[300],
            },
          },
        },
      },
      text: {
        fontSize: FontSizes.MD,
        color: LightColors.Tertiary[700],
        variants: {
          disabled: {
            true: {
              color: LightColors.Tertiary[300],
            },
          },
          loading: {
            true: {
              color: LightColors.Tertiary[400],
            },
          },
        },
      },
      leftSlot: {
        color: LightColors.Tertiary[700],
        variants: {
          disabled: {
            true: {
              color: LightColors.Tertiary[300],
            },
          },
          loading: {
            true: {
              color: LightColors.Tertiary[400],
            },
          },
        },
      },
      rightSlot: {
        color: LightColors.Tertiary[700],
        variants: {
          disabled: {
            true: {
              color: LightColors.Tertiary[300],
            },
          },
        },
      },
    },
    danger: {
      container: {
        backgroundColor: LightColors.Danger[700],
        borderColor: LightColors.Danger[600],
        variants: {
          pressed: {
            true: {
              backgroundColor: LightColors.Danger[800],
              borderColor: LightColors.Danger[600],
            },
          },
          disabled: {
            true: {
              backgroundColor: LightColors.Danger[100],
              borderColor: LightColors.Danger[200],
            },
          },
          loading: {
            true: {
              backgroundColor: LightColors.Danger[300],
              borderColor: LightColors.Danger[600],
            },
          },
        },
      },
      text: {
        fontSize: FontSizes.MD,
        variants: {
          disabled: {
            true: {
              color: LightColors.Danger[300],
            },
          },
          loading: {
            true: {
              color: LightColors.Danger[400],
            },
          },
        },
      },
      leftSlot: {
        variants: {
          disabled: {
            true: {
              color: LightColors.Danger[300],
            },
          },
        },
      },
      rightSlot: {
        variants: {
          disabled: {
            true: {
              color: LightColors.Danger[300],
            },
          },
        },
      },
    },
    success: {
      container: {
        backgroundColor: LightColors.Success[700],
        borderColor: LightColors.Success[600],
        variants: {
          pressed: {
            true: {
              backgroundColor: LightColors.Success[800],
              borderColor: LightColors.Success[600],
            },
          },
          disabled: {
            true: {
              backgroundColor: LightColors.Success[100],
              borderColor: LightColors.Success[200],
            },
          },
          loading: {
            true: {
              backgroundColor: LightColors.Success[300],
              borderColor: LightColors.Success[600],
            },
          },
        },
      },
      text: {
        fontSize: FontSizes.MD,
        variants: {
          disabled: {
            true: {
              color: LightColors.Success[300],
            },
          },
          loading: {
            true: {
              color: LightColors.Success[400],
            },
          },
        },
      },
      leftSlot: {
        variants: {
          disabled: {
            true: {
              color: LightColors.Success[300],
            },
          },
        },
      },
      rightSlot: {
        variants: {
          disabled: {
            true: {
              color: LightColors.Success[300],
            },
          },
        },
      },
    },
  },
} as PhaselisComponentTheme;
