import { LightColors } from "../LightColors";
import { FontSizes, Heights, Radius, Spacings } from "../spacings";

export default {
  textfield: {
    default: {
      container: {
        borderColor: LightColors.Primary[950],
        borderWidth: 0.5,
        borderRadius: Radius.MD,
        paddingLeft: Spacings.MD,
        paddingRight: Spacings.MD,
        variants: {
          focus: {
            true: {
              borderColor: LightColors.Primary[600],
              backgroundColor: LightColors.Primary[50],
            },
          },
          disabled: {
            true: {
              borderColor: LightColors.Primary[200],
              backgroundColor: LightColors.Primary[100],
            },
          },
          error: {
            true: {
              borderColor: LightColors.Danger[500],
            },
          },
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
          textarea: {
            true: {
              height: Heights.XLminHeight,
            },
          },
        },
      },
      element: {
        fontFamily: "Roboto",
        color: LightColors.Primary[950],
        variants: {
          focus: {
            true: {
              color: LightColors.Primary[600],
            },
          },
          error: {
            true: {
              color: LightColors.Danger[600],
            },
          },
          disabled: {
            true: {
              color: LightColors.Primary[300],
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
          textarea: {
            true: {
              marginTop: Spacings.XS,
            },
          },
        },
      },
      leftSlot: {
        color: LightColors.Primary[950],
        marginRight: Spacings.SM,
        variants: {
          focus: {
            true: {
              color: LightColors.Primary[600],
            },
          },
          error: {
            true: {
              color: LightColors.Danger[600],
            },
          },
          disabled: {
            true: {
              color: LightColors.Primary[300],
            },
          },
          textarea: {
            true: {
              marginTop: Spacings.SM,
            },
          },
        },
      },
      rightSlot: {
        color: LightColors.Primary[900],
        marginLeft: Spacings.SM,
        variants: {
          focus: {
            true: {
              color: LightColors.Primary[600],
            },
          },
          error: {
            true: {
              color: LightColors.Danger[600],
            },
          },
          disabled: {
            true: {
              color: LightColors.Primary[300],
            },
          },
          textarea: {
            true: {
              marginTop: Spacings.SM,
            },
          },
        },
      },
    },
  },
};
