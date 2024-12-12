import Colors from "../colors";
import { FontSizes, Heights, Radius, Spacings } from "../spacings";

export default {
  button: {
    default: {
      container: {
        borderRadius: Radius.MD,
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
      container: {
        backgroundColor: Colors.Primary[700],
        borderColor: Colors.Primary[600],
        variants: {
          pressed: {
            true: {
              backgroundColor: Colors.Primary[800],
              borderColor: Colors.Primary[600],
            },
          },
          disabled: {
            true: {
              backgroundColor: Colors.Primary[100],
              borderColor: Colors.Primary[200],
            },
          },
          loading: {
            true: {
              backgroundColor: Colors.Primary[300],
              borderColor: Colors.Primary[600],
            },
          },
        },
      },
      text: {
        color: Colors.Shades.white,
        variants: {
          disabled: {
            true: {
              color: Colors.Primary[300],
            },
          },
          loading: {
            true: {
              color: Colors.Primary[400],
            },
          },
        },
      },
      leftSlot: {
        color: Colors.Shades.white,
        variants: {
          disabled: {
            true: {
              color: Colors.Primary[300],
            },
          },
        },
      },
      rightSlot: {
        color: Colors.Shades.white,
        variants: {
          disabled: {
            true: {
              color: Colors.Primary[300],
            },
          },
        },
      },
    },
    primary_outline: {
      container: {
        backgroundColor: Colors.Transparent,
        borderColor: Colors.Primary[700],
        variants: {
          pressed: {
            true: {
              backgroundColor: Colors.Primary[50],
              borderColor: Colors.Primary[700],
            },
          },
          disabled: {
            true: {
              backgroundColor: Colors.Transparent,
              borderColor: Colors.Primary[300],
            },
          },
          loading: {
            true: {
              backgroundColor: Colors.Transparent,
              borderColor: Colors.Primary[300],
            },
          },
        },
      },
      text: {
        fontSize: FontSizes.MD,
        color: Colors.Primary[700],
        variants: {
          disabled: {
            true: {
              color: Colors.Primary[300],
            },
          },
          loading: {
            true: {
              color: Colors.Primary[400],
            },
          },
        },
      },
      leftSlot: {
        color: Colors.Primary[700],
        variants: {
          disabled: {
            true: {
              color: Colors.Primary[300],
            },
          },
          loading: {
            true: {
              color: Colors.Primary[400],
            },
          },
        },
      },
      rightSlot: {
        color: Colors.Primary[700],
        variants: {
          disabled: {
            true: {
              color: Colors.Primary[300],
            },
          },
        },
      },
    },
    secondary: {
      container: {
        backgroundColor: Colors.Secondary[700],
        borderColor: Colors.Secondary[600],
        variants: {
          pressed: {
            true: {
              backgroundColor: Colors.Secondary[800],
              borderColor: Colors.Secondary[600],
            },
          },
          disabled: {
            true: {
              backgroundColor: Colors.Secondary[100],
              borderColor: Colors.Secondary[200],
            },
          },
          loading: {
            true: {
              backgroundColor: Colors.Secondary[300],
              borderColor: Colors.Secondary[600],
            },
          },
        },
      },
      text: {
        fontSize: FontSizes.MD,
        color: Colors.Shades.white,
        variants: {
          disabled: {
            true: {
              color: Colors.Secondary[300],
            },
          },
          size: {},
        },
      },
      leftSlot: {
        color: Colors.Shades.white,
        variants: {
          disabled: {
            true: {
              color: Colors.Secondary[300],
            },
          },
        },
      },
      rightSlot: {
        color: Colors.Shades.white,
        variants: {
          disabled: {
            true: {
              color: Colors.Secondary[300],
            },
          },
        },
      },
    },
    secondary_outline: {
      container: {
        backgroundColor: Colors.Transparent,
        borderColor: Colors.Secondary[700],
        variants: {
          pressed: {
            true: {
              backgroundColor: Colors.Secondary[50],
              borderColor: Colors.Secondary[700],
            },
          },
          disabled: {
            true: {
              backgroundColor: Colors.Transparent,
              borderColor: Colors.Secondary[300],
            },
          },
          loading: {
            true: {
              backgroundColor: Colors.Transparent,
              borderColor: Colors.Secondary[300],
            },
          },
        },
      },
      text: {
        fontSize: FontSizes.MD,
        color: Colors.Secondary[700],
        variants: {
          disabled: {
            true: {
              color: Colors.Secondary[300],
            },
          },
          loading: {
            true: {
              color: Colors.Secondary[400],
            },
          },
        },
      },
      leftSlot: {
        color: Colors.Secondary[700],
        variants: {
          disabled: {
            true: {
              color: Colors.Secondary[300],
            },
          },
          loading: {
            true: {
              color: Colors.Secondary[400],
            },
          },
        },
      },
      rightSlot: {
        color: Colors.Secondary[700],
        variants: {
          disabled: {
            true: {
              color: Colors.Secondary[300],
            },
          },
        },
      },
    },
    tertiary: {
      container: {
        backgroundColor: Colors.Tertiary[700],
        borderColor: Colors.Tertiary[600],
        variants: {
          pressed: {
            true: {
              backgroundColor: Colors.Tertiary[800],
              borderColor: Colors.Tertiary[600],
            },
          },
          disabled: {
            true: {
              backgroundColor: Colors.Tertiary[100],
              borderColor: Colors.Tertiary[200],
            },
          },
          loading: {
            true: {
              backgroundColor: Colors.Tertiary[300],
              borderColor: Colors.Tertiary[600],
            },
          },
        },
      },
      element: {},
      text: {
        fontSize: FontSizes.MD,
        color: Colors.Shades.white,
        variants: {
          disabled: {
            true: {
              color: Colors.Tertiary[300],
            },
          },
          size: {},
        },
      },
      leftSlot: {
        color: Colors.Shades.white,
        variants: {
          disabled: {
            true: {
              color: Colors.Tertiary[300],
            },
          },
        },
      },
      rightSlot: {
        color: Colors.Shades.white,
        variants: {
          disabled: {
            true: {
              color: Colors.Tertiary[300],
            },
          },
        },
      },
    },
    tertiary_outline: {
      container: {
        backgroundColor: Colors.Transparent,
        borderColor: Colors.Tertiary[700],
        variants: {
          pressed: {
            true: {
              backgroundColor: Colors.Tertiary[50],
              borderColor: Colors.Tertiary[700],
            },
          },
          disabled: {
            true: {
              backgroundColor: Colors.Transparent,
              borderColor: Colors.Tertiary[300],
            },
          },
          loading: {
            true: {
              backgroundColor: Colors.Transparent,
              borderColor: Colors.Tertiary[300],
            },
          },
        },
      },
      text: {
        fontSize: FontSizes.MD,
        color: Colors.Tertiary[700],
        variants: {
          disabled: {
            true: {
              color: Colors.Tertiary[300],
            },
          },
          loading: {
            true: {
              color: Colors.Tertiary[400],
            },
          },
        },
      },
      leftSlot: {
        color: Colors.Tertiary[700],
        variants: {
          disabled: {
            true: {
              color: Colors.Tertiary[300],
            },
          },
          loading: {
            true: {
              color: Colors.Tertiary[400],
            },
          },
        },
      },
      rightSlot: {
        color: Colors.Tertiary[700],
        variants: {
          disabled: {
            true: {
              color: Colors.Tertiary[300],
            },
          },
        },
      },
    },
    danger: {
      container: {
        backgroundColor: Colors.Danger[700],
        borderColor: Colors.Danger[600],
        variants: {
          pressed: {
            true: {
              backgroundColor: Colors.Danger[800],
              borderColor: Colors.Danger[600],
            },
          },
          disabled: {
            true: {
              backgroundColor: Colors.Danger[100],
              borderColor: Colors.Danger[200],
            },
          },
          loading: {
            true: {
              backgroundColor: Colors.Danger[300],
              borderColor: Colors.Danger[600],
            },
          },
        },
      },
      text: {
        fontSize: FontSizes.MD,
        color: Colors.Shades.white,
        variants: {
          disabled: {
            true: {
              color: Colors.Danger[300],
            },
          },
          loading: {
            true: {
              color: Colors.Danger[400],
            },
          },
        },
      },
      leftSlot: {
        color: Colors.Shades.white,
        variants: {
          disabled: {
            true: {
              color: Colors.Danger[300],
            },
          },
        },
      },
      rightSlot: {
        color: Colors.Shades.white,
        variants: {
          disabled: {
            true: {
              color: Colors.Danger[300],
            },
          },
        },
      },
    },
    success: {
      container: {
        backgroundColor: Colors.Success[700],
        borderColor: Colors.Success[600],
        variants: {
          pressed: {
            true: {
              backgroundColor: Colors.Success[800],
              borderColor: Colors.Success[600],
            },
          },
          disabled: {
            true: {
              backgroundColor: Colors.Success[100],
              borderColor: Colors.Success[200],
            },
          },
          loading: {
            true: {
              backgroundColor: Colors.Success[300],
              borderColor: Colors.Success[600],
            },
          },
        },
      },
      text: {
        fontSize: FontSizes.MD,
        color: Colors.Shades.white,
        variants: {
          disabled: {
            true: {
              color: Colors.Success[300],
            },
          },
          loading: {
            true: {
              color: Colors.Success[400],
            },
          },
        },
      },
      leftSlot: {
        color: Colors.Shades.white,
        variants: {
          disabled: {
            true: {
              color: Colors.Success[300],
            },
          },
        },
      },
      rightSlot: {
        color: Colors.Shades.white,
        variants: {
          disabled: {
            true: {
              color: Colors.Success[300],
            },
          },
        },
      },
    },
  },
};
