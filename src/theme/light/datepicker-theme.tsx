import { Colors } from "../colors";
import { FontSizes, Heights, Radius, Spacings } from "../spacings";

export default {
  datepicker: {
    default: {
      container: {
        flex: 1,
        borderColor: Colors.Gray[950],
        borderRadius: Radius.MD,
        paddingLeft: Spacings.MD,
        paddingRight: Spacings.MD,
        variants: {
          focus: {
            true: {
              borderColor: Colors.Primary[500],
            },
          },
          error: {
            true: {
              borderColor: Colors.Danger[500],
            },
          },
          disabled: {
            true: {
              borderColor: Colors.Gray[500],
              backgroundColor: Colors.Gray[100],
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
        fontFamily: "Poppins",
        color: Colors.Gray[950],
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
              color: Colors.Danger[700],
            },
          },
          disabled: {
            true: {
              color: Colors.Gray[400],
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
        color: Colors.Gray[950],
        marginRight: 10,
        variants: {
          focus: {
            true: {
              color: Colors.Primary[600],
            },
          },
          error: {
            true: {
              color: Colors.Danger[700],
            },
          },
          disabled: {
            true: {
              color: Colors.Gray[500],
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
        color: Colors.Gray[900],
        variants: {
          focus: {
            true: {
              color: Colors.Primary[600],
            },
          },
          error: {
            true: {
              color: Colors.Danger[500],
            },
          },
          disabled: {
            true: {
              color: Colors.Gray[400],
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
