import Colors from "./colors";
import { Spacings, Heights, Radius } from "./spacings";

export const darkTheme = {
  root: {
    colors: Colors,
    spacings: Spacings,
  },
  textfield: {
    container: {
      borderColor: Colors.Gray[900],
      borderRadius: Radius.MD,
      paddingLeft: Spacings.MD,
      paddingRight: Spacings.MD,
      variants: {
        focus: {
          true: {
            borderColor: Colors.Primary[600],
          },
        },
        error: {
          true: {
            borderColor: Colors.Danger[400],
            backgroundColor: Colors.Danger[50],
          },
        },
        disabled: {
          true: {
            opacity: 1,
            borderColor: Colors.Gray[400],
            backgroundColor: Colors.Gray[50],
          },
        },
        size: {
          sm: {
            height: 36,
          },
          md: {
            height: 48,
          },
          lg: {
            height: 56,
          },
        },
      },
    },
    element: {
      fontFamily: "Poppins",
      color: Colors.Gray[900],
      height: "100%",
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
      },
    },
    leftSlot: {
      color: Colors.Gray[900],
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
            color: Colors.Gray[400],
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
            color: Colors.Danger[700],
          },
        },
        disabled: {
          true: {
            color: Colors.Gray[400],
          },
        },
      },
    },
  },
  select: {
    container: {
      borderColor: Colors.Gray[900],
      borderRadius: Radius.MD,
      paddingLeft: Spacings.MD,
      paddingRight: Spacings.MD,
      variants: {
        focus: {
          true: {
            borderColor: Colors.Primary[600],
          },
        },
        error: {
          true: {
            borderColor: Colors.Danger[400],
            backgroundColor: Colors.Danger[50],
          },
        },
        disabled: {
          true: {
            opacity: 1,
            borderColor: Colors.Gray[400],
            backgroundColor: Colors.Gray[50],
          },
        },
        size: {
          sm: {
            height: 36,
          },
          md: {
            height: 48,
          },
          lg: {
            height: 56,
          },
        },
      },
    },
    text: {
      fontFamily: "Poppins",
      color: Colors.Gray[900],
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
      },
    },
    leftSlot: {
      color: Colors.Gray[900],
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
            color: Colors.Danger[700],
          },
        },
        disabled: {
          true: {
            color: Colors.Gray[400],
          },
        },
      },
    },
    element: {
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
      },
    },
  },
  checkbox: {
    container: {
      borderColor: Colors.Gray[900],
      height: Heights.MDminHeight,
      variants: {
        size: {
          sm: {
            height: 36,
          },
          md: {
            height: 48,
          },
          lg: {
            height: 56,
          },
        },
      },
    },
    icon: {
      color: Colors.Gray[900],
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
          sm: {
            height: 16,
            width: 16,
          },
          md: {
            height: 20,
            width: 20,
          },
          lg: {
            height: 24,
            width: 24,
          },
        },
      },
    },
    element: {
      variants: {
        focus: {
          true: {
            borderColor: Colors.Primary[600],
          },
        },
        error: {
          true: {
            borderColor: Colors.Danger[400],
            backgroundColor: Colors.Danger[50],
          },
        },
        disabled: {
          true: {
            borderColor: Colors.Gray[400],
            backgroundColor: Colors.Gray[100],
          },
        },
        size: {
          sm: {
            height: 20,
            width: 20,
          },
          md: {
            height: 24,
            width: 24,
          },
          lg: {
            height: 32,
            width: 32,
          },
        },
      },
    },
    text: {
      fontFamily: "Poppins",
      color: Colors.Gray[900],
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
      },
    },
  },
  button: {
    extraStyleContainer: (
      disabled: boolean,
      outline: boolean,
      primary: boolean,
      secondary: boolean,
      tertiary: boolean,
    ) => {
      if (disabled && outline) {
        let borderColor = Colors.Primary[300];
        if (secondary) {
          borderColor = Colors.Secondary[300];
        }
        if (tertiary) {
          borderColor = Colors.Gray[300];
        }
        return {
          backgroundColor: "transparent",
          borderColor: borderColor,
        };
      }
    },
    extraStyleText: (disabled: boolean, outline: boolean) => {
      if (disabled && outline) {
        return {
          color: Colors.Primary[100],
        };
      }
    },
    container: {
      borderWidth: 1,
      borderRadius: Radius.MD,
      marginBottom: 10,
      marginTop: 10,
      width: "100%",
      variants: {
        base: {
          primary: {
            backgroundColor1: Colors.Primary[700],
            backgroundColor2: Colors.Primary[800],
            borderColor: Colors.Primary[600],
          },
          secondary: {
            backgroundColor1: Colors.Secondary[500],
            backgroundColor2: Colors.Secondary[700],
            borderColor: Colors.Secondary[600],
          },
          tertiary: {
            backgroundColor1: Colors.Gray[500],
            backgroundColor2: Colors.Gray[800],
            borderColor: Colors.Gray[600],
          },
        },
        outline: {
          primary: {
            backgroundColor: "transparent",
            borderColor: Colors.Primary[700],
          },
          secondary: {
            backgroundColor: "transparent",
            borderColor: Colors.Secondary[600],
          },
          tertiary: {
            backgroundColor: "transparent",
            borderColor: Colors.Gray[600],
          },
        },
        disabled: {
          primary: {
            backgroundColor: Colors.Primary[100],
            borderColor: Colors.Primary[200],
          },
          secondary: {
            backgroundColor: Colors.Secondary[100],
            borderColor: Colors.Secondary[200],
          },
          tertiary: {
            backgroundColor: Colors.Gray[100],
            borderColor: Colors.Gray[200],
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
    element: {
      paddingLeft: Spacings.LG,
      paddingRight: Spacings.LG,
      gap: Spacings.SM,
    },
    text: {
      fontSize: Spacings.MD,
      fontFamily: "Poppins",
      variants: {
        outline: {
          primary: {
            color: Colors.Primary[700],
          },
          secondary: {
            color: Colors.Secondary[600],
          },
          tertiary: {
            color: Colors.Gray[950],
          },
        },
        disabled: {
          primary: {
            color: Colors.Primary[300],
          },
          secondary: {
            color: Colors.Secondary[300],
          },
          tertiary: {
            color: Colors.Gray[300],
          },
        },
        size: {
          xs: {
            fontSize: 14,
          },
          sm: {
            fontSize: 16,
          },
          md: {
            fontSize: 16,
          },
          lg: {
            fontSize: 18,
          },
          xl: {
            fontSize: 22,
          },
          xxl: {
            fontSize: 22,
          },
        },
      },
    },
  },
  radio: {
    innerElement: {
      backgroundColor: Colors.Primary[600],
    },
    outerElement: {
      borderColor: Colors.Gray[900],
    },
    text: {
      color: Colors.Gray[900],
      fontSize: Spacings.MD,
    },
  },
  slider: {
    container: {
      variants: {
        focus: {
          true: {},
        },
        error: {
          true: {},
        },
        disabled: {
          true: {},
        },
        size: {
          sm: {
            height: 36,
          },
          md: {
            height: 48,
          },
          lg: {
            height: 56,
          },
        },
      },
    },
    element: {
      color: Colors.Gray[900],
      minimumTrackTintColor: Colors.Primary[600],
      maximumTrackTintColor: Colors.Gray[300],
      thumbTintColor: Colors.Primary[600],
      variants: {
        focus: {
          true: {},
        },
        error: {
          true: {},
        },
        disabled: {
          true: {},
        },
      },
    },
  },
  switch: {
    container: {
      variants: {
        focus: {
          true: {},
        },
        error: {
          true: {},
        },
        disabled: {
          true: {},
        },
        size: {
          sm: {},
          md: {},
          lg: {},
        },
      },
    },
    track: {
      width: 96,
      height: 42,
      backgroundColor: Colors.Primary[500],
      onColor: Colors.Primary[500],
      offColor: Colors.Gray[300],
      variants: {
        focus: {
          true: {},
        },
        error: {
          true: {},
        },
        disabled: {
          true: {
            onColor: Colors.Primary[100],
            offColor: Colors.Gray[100],
          },
        },
      },
    },
    thumb: {
      width: Spacings.LG,
      height: Spacings.LG,
      onColor: Colors.Gray[50],
      offColor: Colors.Gray[50],
      variants: {
        focus: {
          true: {},
        },
        error: {
          true: {},
        },
        disabled: {
          true: {
            onColor: Colors.Primary[50],
            offColor: Colors.Gray[50],
          },
        },
      },
    },
    leftIcon: {
      color: Colors.Gray[100],
      variants: {
        disabled: {
          true: {
            color: Colors.Gray[50],
          },
        },
      },
    },
    rightIcon: {
      color: Colors.Gray[100],
      variants: {
        disabled: {
          true: {
            color: Colors.Gray[50],
          },
        },
      },
    },
  },
  accordion_header: {
    text: {
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 20,
      color: Colors.Gray[950],
      variants: {
        disabled: {
          true: {
            color: Colors.Gray[300],
          },
        },
      },
    },
    icon: {
      color: Colors.Gray[950],
      variants: {
        disabled: {
          true: {
            color: Colors.Gray[300],
          },
        },
      },
    },
    drop: {
      color: Colors.Gray[950],
      variants: {
        disabled: {
          true: {
            color: Colors.Gray[300],
          },
        },
      },
    },
  },
  accordion_item: {
    container: {
      padding: Spacings.MD,
      borderColor: Colors.Gray[500],
      variants: {
        disabled: {
          true: {
            borderColor: Colors.Gray[500],
            backgroundColor: Colors.Gray[100],
          },
        },
      },
    },
    element: {
      marginTop: Spacings.MD,
    },
  },
  link: {
    container: {},
    element: {
      fontSize: 16,
      lineHeight: 22,
      variants: {
        primary: {
          true: {
            color: Colors.Primary[600],
          },
        },
        secondary: {
          true: {
            color: Colors.Secondary[600],
          },
        },
      },
    },
    leftSlot: {
      color: Colors.Gray[900],
      marginRight: 2,
      variants: {
        primary: {
          true: {
            color: Colors.Primary[600],
          },
        },
        secondary: {
          true: {
            color: Colors.Secondary[600],
          },
        },
      },
    },
    rightSlot: {
      color: Colors.Gray[900],
      marginLeft: 2,
      variants: {
        primary: {
          true: {
            color: Colors.Primary[600],
          },
        },
        secondary: {
          true: {
            color: Colors.Secondary[600],
          },
        },
      },
    },
  },
} as const;
