import { DarkColors } from "../DarkColors";
import { FontSizes, Heights, Radius, Spacings } from "../spacings";
import type { PhaselisComponentTheme } from "../types";

export default {
  textfield: {
    default: {
      extraStyles: {
        container: ({ focus, error }: { focus: boolean; error: boolean }) => {
          if (focus && error) {
            return {
              backgroundColor: DarkColors.Danger[50],
            };
          }
        },
      },
      container: {
        borderColor: DarkColors.Primary[950],
        borderWidth: 0.5,
        borderRadius: Radius.MD,
        paddingLeft: Spacings.MD,
        paddingRight: Spacings.MD,
        variants: {
          focus: {
            true: {
              borderColor: DarkColors.Primary[600],
              backgroundColor: DarkColors.Primary[50],
            },
          },
          disabled: {
            true: {
              borderColor: DarkColors.Primary[200],
              backgroundColor: DarkColors.Primary[100],
            },
          },
          error: {
            true: {
              borderColor: DarkColors.Danger[500],
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
      text: {
        fontFamily: "Roboto",
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
        textarea: {
          true: {
            marginTop: Spacings.XS,
          },
        },
      },
      leftSlot: {
        color: DarkColors.Primary[950],
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
            true: {
              marginTop: Spacings.SM,
            },
          },
        },
      },
      rightSlot: {
        color: DarkColors.Primary[900],
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
            true: {
              marginTop: Spacings.SM,
            },
          },
        },
      },
    },
  },
} as PhaselisComponentTheme;
