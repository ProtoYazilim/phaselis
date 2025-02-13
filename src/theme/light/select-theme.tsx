import { Colors } from "../colors";
import { FontSizes, Heights, Radius, Spacings, IconSizes } from "../spacings";

export default {
  select: {
    default: {
      //InputSlot
      container: {
        borderColor: Colors.Primary[950],
        borderRadius: Radius.MD,
        paddingLeft: Spacings.MD,
        paddingRight: Spacings.MD,
        borderWidth: 0.5,
        variants: {
          focus: {
            true: {
              backgroundColor: Colors.Primary[50],
              borderColor: Colors.Primary[600],
            },
          },
          error: {
            true: {
              borderColor: Colors.Danger[500],
            },
          },
          disabled: {
            true: {
              borderColor: Colors.Primary[200],
              backgroundColor: Colors.Primary[100],
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
        color: Colors.Gray[950],
        variants: {
          focus: {
            true: {
              color: Colors.Primary[600],
            },
          },
          error: {
            true: {
              color: Colors.Danger[600],
            },
          },
          disabled: {
            true: {
              color: Colors.Primary[300],
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
        color: Colors.Primary[950],
        marginLeft: Spacings.SM,
        variants: {
          focus: {
            true: {
              color: Colors.Primary[600],
            },
          },
          error: {
            true: {
              color: Colors.Danger[600],
            },
          },
          disabled: {
            true: {
              color: Colors.Primary[300],
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
        color: Colors.Primary[950],
        variants: {
          focus: {
            true: {
              color: Colors.Primary[600],
            },
          },
          error: {
            true: {
              color: Colors.Danger[600],
            },
          },
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
    },
    _picker: {
      _header: {
        container: {
          paddingHorizontal: Spacings.LG,
          paddingVertical: Spacings.MD,
        },
        text: {
          color: Colors.Gray[950],
          fontSize: FontSizes.XL,
        },
        closeIconSlot: {
          width: Heights.SMminHeight,
          height: Heights.SMminHeight,
          paddingRight: Spacings.SM,
          paddingLeft: Spacings.SM,
          backgroundColor: Colors.Primary[600],
          borderColor: Colors.Primary[50],
          borderRadius: 28,
          borderWidth: 1,
        },
        closeIcon: {
          color: Colors.Primary[50],
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
          color: Colors.Primary[950],
        },
      },
      _optionSlot: {
        container: {
          backgroundColor: "white",
          paddingVertical: Spacings.SM,
          paddingLeft: Spacings.MD,
          paddingRight: Spacings.MD,
          marginTop: Spacings.SM,
          borderColor: Colors.Primary[950],
          borderRadius: 19,
          borderWidth: 0.5,
        },
        selected: {
          backgroundColor: Colors.Primary[600],
          borderColor: Colors.Primary[950],
        },
        text: {
          fontSize: FontSizes.MD,
          lineHeight: 22,
          color: Colors.Primary[950],
        },
        selectedText: {
          color: Colors.Primary[50],
        },
      },
      _optionsSlot: {
        container: {
          backgroundColor: Colors.Primary[50],
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
};
