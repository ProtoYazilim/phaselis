import { Colors } from "../colors";
import { FontSizes, Heights, Radius, Spacings } from "../spacings";

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
              backgroundColor: Colors.Danger[50],
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
        },
      },
      rightSlot: {
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
        },
        text: {
          color: Colors.Gray[950],
        },
        closeIconSlot: {
          width: Heights.SMminHeight,
          height: Heights.SMminHeight,
          paddingRight: Spacings.SM,
          paddingLeft: Spacings.SM,
          backgroundColor: Colors.Primary[600],
          borderColor: Colors.Primary[50],
        },
        closeIcon: {
          color: Colors.Primary[50],
        },
      },
      _noOptionSlot: {
        container: {},
        text: {},
      },
      _optionSlot: {
        container: {
          paddingTop: Spacings.SM,
          paddingRight: Spacings.MD,
          paddingBottom: Spacings.SM,
          paddingLeft: Spacings.MD,
          marginTop: Spacings.XS,
          borderColor: Colors.Gray[400],
        },
        selected: {
          backgroundColor: Colors.Primary[600],
          borderColor: Colors.Primary[400],
        },
        text: {},
      },
      _optionsSlot: {
        container: {
          backgroundColor: Colors.Primary[50],
        },
        element: {
          paddingTop: Spacings.MD,
          paddingBottom: Spacings.MD,
          paddingRight: Spacings.LG,
          paddingLeft: Spacings.LG,
        },
      },
    },
  },
};
