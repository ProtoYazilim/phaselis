import { Colors } from "../colors";
import { FontSizes, Heights, Radius, Spacings } from "../spacings";

export default {
  textfield: {
    default: {
      container: {
        flex: 1,
        borderColor: Colors.Primary[950],
        borderWidth: 0.5,
        borderRadius: Radius.MD,
        paddingLeft: Spacings.MD,
        paddingRight: Spacings.MD,
        variants: {
          focus: {
            true: {
              borderColor: Colors.Primary[600],
              backgroundColor: Colors.Primary[50],
            },
          },
          disabled: {
            true: {
              borderColor: Colors.Primary[200],
              backgroundColor: Colors.Primary[100],
            },
          },
          error: {
            true: {
              borderColor: Colors.Danger[500],
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
              justifyContent: "flex-start",
              height: Heights.XLminHeight,
            },
          },
        },
      },
      element: {
        fontFamily: "Roboto",
        color: Colors.Primary[950],
        justifyContent: "center",
        alignItems: "center",
        verticalAlign: "middle",
        textAlignVertical: "center",
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
          textarea: {
            true: {
              marginTop: Spacings.XS,
            },
          },
        },
      },
      leftSlot: {
        color: Colors.Primary[950],
        marginRight: Spacings.SM,
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
          textarea: {
            true: {
              marginTop: Spacings.SM,
            },
          },
        },
      },
      rightSlot: {
        color: Colors.Primary[900],
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
          textarea: {
            true: {
              alignSelf: "flex-start",
              marginTop: Spacings.SM,
            },
          },
        },
      },
    },
  },
};
