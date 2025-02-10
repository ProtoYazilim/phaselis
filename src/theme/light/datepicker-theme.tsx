import { Colors } from "../colors";
import { FontSizes, Heights, Radius, Spacings } from "../spacings";

export default {
  datepicker: {
    default: {
      container: {
        // flex: 1,
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
              borderColor: Colors.Danger[400],
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
              width: "42%",
            },
            sm: {
              height: Heights.SMminHeight,
              width: "47%",
            },
            md: {
              height: Heights.MDminHeight,
              width: "48%",
            },
            lg: {
              height: Heights.LGminHeight,
              width: "53%",
            },
            xl: {
              height: Heights.XLminHeight,
              width: "62%",
            },
            xxl: {
              height: Heights.XXLminHeight,
              width: "72%",
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
        flex: 1,
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
        color: Colors.Gray[900],
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
