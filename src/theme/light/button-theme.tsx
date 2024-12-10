import Colors from "../colors";
import { FontSizes, Heights, Radius, Spacings } from "../spacings";

export default {
  button: {
    primary: {
      container: {
        borderRadius: Radius.MD,
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
        fontSize: FontSizes.MD,
        color: Colors.Shades.white,
        variants: {
          disabled: {
            true: {
              color: Colors.Primary[300],
            },
          },
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
        borderRadius: Radius.MD,
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
        borderRadius: Radius.MD,
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
        fontSize: FontSizes.MD,
        color: Colors.Shades.white,
        variants: {
          disabled: {
            true: {
              color: Colors.Secondary[300],
            },
          },
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
        borderRadius: Radius.MD,
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
        borderRadius: Radius.MD,
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
        fontSize: FontSizes.MD,
        color: Colors.Shades.white,
        variants: {
          disabled: {
            true: {
              color: Colors.Tertiary[300],
            },
          },
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
        borderRadius: Radius.MD,
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
  },
};
