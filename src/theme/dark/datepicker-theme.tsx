import { DarkColors } from "../DarkColors";
import { FontSizes, Heights, Radius, Spacings } from "../spacings";

export default {
  datepicker: {
    default: {
      container: {
        borderColor: DarkColors.Gray[950],
        borderRadius: Radius.MD,
        paddingLeft: Spacings.MD,
        paddingRight: Spacings.MD,
        borderWidth: 0.5,
        variants: {
          focus: {
            true: {
              borderColor: DarkColors.Primary[500],
            },
          },
          error: {
            true: {
              borderColor: DarkColors.Danger[400],
            },
          },
          disabled: {
            true: {
              borderColor: DarkColors.Primary[200],
              backgroundColor: DarkColors.Primary[100],
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
        color: DarkColors.Primary[950],

        variants: {
          focus: {
            true: {
              color: DarkColors.Primary[600],
            },
          },
          error: {
            true: {
              color: DarkColors.Danger[600],
            },
          },
          disabled: {
            true: {
              color: DarkColors.Primary[300],
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
        color: DarkColors.Gray[950],
        marginRight: Spacings.SM,
        variants: {
          focus: {
            true: {
              color: DarkColors.Primary[600],
            },
          },
          error: {
            true: {
              color: DarkColors.Danger[600],
            },
          },
          disabled: {
            true: {
              color: DarkColors.Primary[300],
            },
          },
          textarea: {
            true: {},
          },
        },
      },
      rightSlot: {
        color: DarkColors.Gray[900],
        marginLeft: Spacings.SM,
        variants: {
          focus: {
            true: {
              color: DarkColors.Primary[600],
            },
          },
          error: {
            true: {
              color: DarkColors.Danger[600],
            },
          },
          disabled: {
            true: {
              color: DarkColors.Primary[300],
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
