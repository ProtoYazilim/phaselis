import Colors from "../colors";
import { FontSizes, Heights, Radius, Spacings } from "../spacings";

export default {
  badge: {
    default: {
      container: {},
      element: {
        borderRadius: Radius.XL,
        paddingLeft: Spacings.SM,
        paddingRight: Spacings.SM,
        backgroundColor: Colors.Primary[900],
        borderColor: Colors.Primary[950],
        variants: {
          size: {
            xs: {
              height: 14,
            },
            sm: {
              height: 16,
            },
            md: {
              height: 20,
            },
            lg: {
              height: 24,
            },
            xl: {
              height: 28,
            },
            xxl: {
              height: 32,
            },
          },
        },
      },
      text: {
        variants: {
          size: {
            xs: {
              fontSize: 10,
            },
            sm: {
              fontSize: 12,
            },
            md: {
              fontSize: 14,
            },
            lg: {
              fontSize: 14,
            },
            xl: {
              fontSize: 14,
            },
            xxl: {
              fontSize: 14,
            },
          },
        },
      },
      leftSlot: {
        color: "white",
        marginRight: 8,
      },
      rightSlot: {
        color: "white",
        marginLeft: 8,
      },
    },
    primary: {
      element: {
        backgroundColor: Colors.Primary[500],
        borderColor: Colors.Primary[600],
      },
      color: {
        color: Colors.Primary[50],
      },
    },
    primary_outline: {},
    secondary: {
      element: {
        backgroundColor: Colors.Secondary[500],
        borderColor: Colors.Secondary[600],
      },
      color: {
        color: Colors.Secondary[50],
      },
    },
    secondary_outline: {},
    tertiary: {
      element: {
        backgroundColor: Colors.Tertiary[500],
        borderColor: Colors.Tertiary[600],
      },
      color: {
        color: Colors.Tertiary[50],
      },
    },
    tertiary_outline: {},
  },
};
