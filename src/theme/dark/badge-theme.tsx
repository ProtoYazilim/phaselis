import { DarkColors } from "../DarkColors";
import { Radius, Spacings } from "../spacings";
import type { PhaselisComponentTheme } from "../types";

export default {
  badge: {
    default: {
      container: {},
      element: {
        borderRadius: Radius.XL,
        paddingLeft: Spacings.SM,
        paddingRight: Spacings.SM,
        backgroundColor: DarkColors.Primary[900],
        borderColor: DarkColors.Primary[950],
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
        color: "black",
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
        color: "black",
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
        color: "black",
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
        borderColor: DarkColors.Primary[950],
      },
      text: {
        color: DarkColors.Primary[950],
      },
    },
    primary: {
      element: {
        backgroundColor: DarkColors.Primary[500],
        borderColor: DarkColors.Primary[600],
      },
      color: {
        color: DarkColors.Primary[50],
      },
      leftIcon: {
        color: DarkColors.Primary[50],
      },
      rightIcon: {
        color: DarkColors.Primary[50],
      },
    },
    primary_outline: {
      element: {
        backgroundColor: "transparent",
        borderColor: DarkColors.Primary[600],
      },
      text: {
        color: DarkColors.Primary[600],
      },
    },
    secondary: {
      element: {
        backgroundColor: DarkColors.Secondary[500],
        borderColor: DarkColors.Secondary[600],
      },
      color: {
        color: DarkColors.Secondary[50],
      },
    },
    secondary_outline: {
      element: {
        backgroundColor: "transparent",
        borderColor: DarkColors.Secondary[600],
      },
      text: {
        color: DarkColors.Secondary[600],
      },
    },
    tertiary: {
      element: {
        backgroundColor: DarkColors.Tertiary[500],
        borderColor: DarkColors.Tertiary[600],
      },
      color: {
        color: DarkColors.Tertiary[50],
      },
    },
    tertiary_outline: {
      element: {
        backgroundColor: "transparent",
        borderColor: DarkColors.Tertiary[600],
      },
      text: {
        color: DarkColors.Tertiary[600],
      },
    },
  },
} as PhaselisComponentTheme;
