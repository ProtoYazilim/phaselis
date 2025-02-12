import { Dimensions } from "react-native";
import { Colors } from "../colors";
import { FontSizes, Heights, Radius, Spacings } from "../spacings";

console.log(Dimensions.get("screen").width);
export default {
  datepicker: {
    default: {
      container: {
        flex: 1,
        backgroundColor: "white",
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
              maxWidth: Dimensions.get("screen").width * 0.37,
            },
            sm: {
              height: Heights.SMminHeight,
              maxWidth: Dimensions.get("screen").width * 0.41,
            },
            md: {
              height: Heights.MDminHeight,
              maxWidth: Dimensions.get("screen").width * 0.428,
            },
            lg: {
              height: Heights.LGminHeight,
              maxWidth: Dimensions.get("screen").width * 0.479,
            },
            xl: {
              height: Heights.XLminHeight,
              maxWidth: Dimensions.get("screen").width * 0.565,
            },
            xxl: {
              height: Heights.XXLminHeight,
              maxWidth: Dimensions.get("screen").width * 0.65,
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
        color: Colors.Primary[950],
        // flex: 1,
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
          textarea: {
            true: {
              marginTop: Spacings.XS,
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
            true: {
              marginTop: Spacings.SM,
            },
          },
        },
      },
      rightSlot: {
        color: Colors.Gray[900],
        paddingLeft: Spacings.SM,
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
