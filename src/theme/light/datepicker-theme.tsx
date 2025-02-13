import { Dimensions } from "react-native";
import { Colors } from "../colors";
import { FontSizes, Heights, Radius, Spacings } from "../spacings";

console.log(Dimensions.get("screen").width);
export default {
  datepicker: {
    default: {
      container: {
        borderColor: Colors.Gray[950],
        borderRadius: Radius.MD,
        paddingLeft: Spacings.MD,
        paddingRight: Spacings.MD,
        borderWidth: 0.5,
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
        color: Colors.Gray[950],
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
            true: {},
          },
        },
      },
      rightSlot: {
        color: Colors.Gray[900],
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
            true: {},
          },
        },
      },
    },
  },
};
