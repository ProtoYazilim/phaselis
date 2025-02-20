import { Colors } from "../colors";
import { Radius, Spacings } from "../spacings";

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
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
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
        color: "white",
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
      leftIcon: {
        color: "white",
        marginRight: Spacings.XS,
        width: 12,
        height: 12,
        variants: {
          size: {
            xs: {
              width: 8,
              height: 8,
            },
            sm: {
              width: 10,
              height: 10,
            },
            md: {
              width: 12,
              height: 12,
            },
            lg: {
              width: 14,
              height: 14,
            },
            xl: {
              width: 16,
              height: 16,
            },
            xxl: {
              width: 18,
              height: 18,
            },
          },
        },
      },
      rightIcon: {
        color: "white",
        marginLeft: Spacings.XS,
        width: 12,
        height: 12,
        variants: {
          size: {
            xs: {
              width: 8,
              height: 8,
            },
            sm: {
              width: 10,
              height: 10,
            },
            md: {
              width: 12,
              height: 12,
            },
            lg: {
              width: 14,
              height: 14,
            },
            xl: {
              width: 16,
              height: 16,
            },
            xxl: {
              width: 18,
              height: 18,
            },
          },
        },
      },
    },
    default_outline: {
      element: {
        backgroundColor: "transparent",
        borderColor: Colors.Primary[950],
      },
      text: {
        color: Colors.Primary[950],
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
      leftIcon: {
        color: Colors.Primary[50],
      },
      rightIcon: {
        color: Colors.Primary[50],
      },
    },
    primary_outline: {
      element: {
        backgroundColor: "transparent",
        borderColor: Colors.Primary[600],
      },
      text: {
        color: Colors.Primary[600],
      },
    },
    secondary: {
      element: {
        backgroundColor: Colors.Secondary[500],
        borderColor: Colors.Secondary[600],
      },
      color: {
        color: Colors.Secondary[50],
      },
    },
    secondary_outline: {
      element: {
        backgroundColor: "transparent",
        borderColor: Colors.Secondary[600],
      },
      text: {
        color: Colors.Secondary[600],
      },
    },
    tertiary: {
      element: {
        backgroundColor: Colors.Tertiary[500],
        borderColor: Colors.Tertiary[600],
      },
      color: {
        color: Colors.Tertiary[50],
      },
    },
    tertiary_outline: {
      element: {
        backgroundColor: "transparent",
        borderColor: Colors.Tertiary[600],
      },
      text: {
        color: Colors.Tertiary[600],
      },
    },
  },
};
