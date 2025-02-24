import { DarkColors } from "../DarkColors";
import { FontSizes, Heights, Radius, Spacings, IconSizes } from "../spacings";
import type { PhaselisComponentTheme } from "../types";

export default {
  select: {
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
        borderRadius: Radius.MD,
        paddingLeft: Spacings.MD,
        paddingRight: Spacings.MD,
        borderWidth: 0.5,
        variants: {
          focus: {
            true: {
              backgroundColor: DarkColors.Primary[50],
              borderColor: DarkColors.Primary[600],
            },
          },
          error: {
            true: {
              borderColor: DarkColors.Danger[500],
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
        },
      },
      leftSlot: {
        marginRight: Spacings.SM,
        color: DarkColors.Gray[950],
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
        color: DarkColors.Primary[950],
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
    _picker: {
      _header: {
        container: {
          paddingHorizontal: Spacings.LG,
          paddingVertical: Spacings.MD,
        },
        text: {
          color: DarkColors.Gray[950],
          fontSize: FontSizes.XL,
        },
        closeIconSlot: {
          width: Heights.SMminHeight,
          height: Heights.SMminHeight,
          paddingRight: Spacings.SM,
          paddingLeft: Spacings.SM,
          backgroundColor: DarkColors.Primary[600],
          borderColor: DarkColors.Primary[50],
          borderRadius: 28,
          borderWidth: 1,
        },
        closeIcon: {
          color: DarkColors.Primary[50],
        },
      },
      _noOptionSlot: {
        container: {
          flex: 1,
          height: Heights.XXLminHeight,
          marginHorizontal: Spacings.SM,
        },
        text: {
          marginTop: Spacings.SM,
          fontSize: FontSizes.MD,
          fontWeight: "bold",
          color: DarkColors.Primary[950],
        },
      },
      _optionSlot: {
        container: {
          backgroundColor: DarkColors.Shades.white,
          paddingVertical: Spacings.SM,
          paddingLeft: Spacings.MD,
          paddingRight: Spacings.MD,
          marginTop: Spacings.SM,
          borderColor: DarkColors.Primary[950],
          borderRadius: 19,
          borderWidth: 0.5,
        },
        selected: {
          backgroundColor: DarkColors.Primary[600],
          borderColor: DarkColors.Primary[950],
        },
        text: {
          fontSize: FontSizes.MD,
          lineHeight: 22,
          color: DarkColors.Primary[950],
        },
        selectedText: {
          color: DarkColors.Primary[50],
        },
      },
      _optionsSlot: {
        container: {
          backgroundColor: DarkColors.Primary[50],
        },
        element: {
          paddingTop: Spacings.MD,
          paddingBottom: Spacings.XL,
          paddingRight: Spacings.LG,
          paddingLeft: Spacings.LG,
        },
      },
    },
  },
} as PhaselisComponentTheme;
