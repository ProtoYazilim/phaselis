import { LightColors } from "../LightColors";
import { FontSizes, Heights, Radius, Spacings } from "../spacings";

export default {
  datepicker: {
    default: {
      container: {
        borderColor: LightColors.Gray[950],
        borderRadius: Radius.MD,
        paddingLeft: Spacings.MD,
        paddingRight: Spacings.MD,
        borderWidth: 0.5,
        variants: {
          focus: {
            true: {
              borderColor: LightColors.Primary[500],
            },
          },
          error: {
            true: {
              borderColor: LightColors.Danger[400],
            },
          },
          disabled: {
            true: {
              borderColor: LightColors.Primary[200],
              backgroundColor: LightColors.Primary[100],
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
          full: {
            true: {
              width: "100%",
            },
          },
        },
      },
      element: {
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
              fontSize: FontSizes.XL,
            },
          },
        },
      },
      leftSlot: {
        color: LightColors.Gray[950],
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
            true: {},
          },
        },
      },
      rightSlot: {
        color: LightColors.Gray[900],
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
            true: {},
          },
        },
      },
    },
  },
};
