import Colors from "./colors";
import { Spacings, Heights, Radius, FontSizes } from "./spacings";

export const layeredComponents = ["tab"];

export const lightTheme = {
  root: {
    colors: Colors,
    spacings: Spacings,
  },
  textfield: {
    container: {
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
            backgroundColor: Colors.Danger[50],
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
  datepicker: {
    container: {
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
            backgroundColor: Colors.Danger[50],
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
  select: {
    _picker: {
      _header: {
        container: {
          padding: Spacings.MD,
          marginLeft: Spacings.MD,
          marginRight: Spacings.MD,
        },
        text: {},
        closeIconSlot: {},
        doneText: {},
      },
      _inputSlot: {
        container: {
          borderColor: Colors.Gray[950],
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
                borderColor: Colors.Gray[400],
                backgroundColor: Colors.Gray[50],
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
          color: Colors.Gray[950],

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
          color: Colors.Gray[950],
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
          },
        },
      },
      _noOptionSlot: {
        container: {},
        text: {},
      },
      _optionSlot: {
        container: {
          margin: Spacings.SM,
          padding: Spacings.SM,
          paddingVertical: Spacings.MD,
          borderRadius: Radius.LG,
        },
        selected: {},
        outerElement: {},
        innerElement: {},
        text: {
          marginLeft: Spacings.MD,
        },
      },
      _optionsSlot: {
        container: {
          marginHorizontal: Spacings.MD,
          marginBottom: Spacings.MD,
        },
        element: {
          marginLeft: Spacings.MD,
          marginRight: Spacings.MD,
        },
      },
    },
    container: {
      borderColor: Colors.Gray[950],
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
            borderColor: Colors.Gray[400],
            backgroundColor: Colors.Gray[50],
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
      color: Colors.Gray[950],
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
      },
    },
    headerSlot: {
      marginLeft: Spacings.SM,
      marginRight: Spacings.SM,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    headerInnerSlot: {
      padding: Spacings.MD,
      flex: 1,
    },
  },
  checkbox: {
    container: {
      borderRadius: 0,
      borderColor: Colors.Gray[900],
      height: Heights.MDminHeight,
      variants: {
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
    icon: {
      color: Colors.Gray[900],
      variants: {
        focus: {
          true: {
            // color: Colors.Primary[600],
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
      borderRadius: Radius.MD,
      variants: {
        focus: {
          true: {
            // borderColor: Colors.Primary[600],
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
          xs: {
            height: Heights.XSminHeight,
            width: Heights.XSminHeight,
          },
          sm: {
            height: Heights.SMminHeight,
            width: Heights.SMminHeight,
          },
          md: {
            height: Heights.MDminHeight,
            width: Heights.MDminHeight,
          },
          lg: {
            height: Heights.LGminHeight,
            width: Heights.LGminHeight,
          },
          xl: {
            height: Heights.XLminHeight,
            width: Heights.XLminHeight,
          },
          xxl: {
            height: Heights.XXLminHeight,
            width: Heights.XXLminHeight,
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
            // color: Colors.Primary[600],
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
      },
    },
  },
  button: {
    container: {
      borderWidth: 1,
      borderRadius: Radius.MD,
      justifyContent: "center",
      backgroundColor: Colors.Primary[700],
      borderColor: Colors.Primary[600],
      variants: {
        base: {
          primary: {
            backgroundColor: Colors.Primary[700],
            borderColor: Colors.Primary[600],
          },
          secondary: {
            backgroundColor: Colors.Secondary[500],
            borderColor: Colors.Secondary[600],
          },
          tertiary: {
            backgroundColor: Colors.Gray[500],
            borderColor: Colors.Gray[600],
          },
          primary_outline: {
            backgroundColor: Colors.Transparent,
            borderColor: Colors.Primary[700],
          },
          secondary_outline: {
            backgroundColor: Colors.Transparent,
            borderColor: Colors.Secondary[600],
          },
          tertiary_outline: {
            backgroundColor: Colors.Transparent,
            borderColor: Colors.Gray[600],
          },
        },
        pressed: {
          primary: {
            backgroundColor: Colors.Primary[800],
            borderColor: Colors.Primary[600],
          },
          secondary: {
            backgroundColor: Colors.Secondary[800],
            borderColor: Colors.Secondary[600],
          },
          tertiary: {
            backgroundColor: Colors.Gray[800],
            borderColor: Colors.Gray[600],
          },
          primary_outline: {
            backgroundColor: Colors.Primary[50],
            borderColor: Colors.Primary[700],
          },
          secondary_outline: {
            backgroundColor: Colors.Secondary[50],
            borderColor: Colors.Secondary[600],
          },
          tertiary_outline: {
            backgroundColor: Colors.Gray[50],
            borderColor: Colors.Gray[950],
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
          primary_outline: {
            backgroundColor: Colors.Transparent,
            borderColor: Colors.Primary[300],
          },
          secondary_outline: {
            backgroundColor: Colors.Transparent,
            borderColor: Colors.Secondary[300],
          },
          tertiary_outline: {
            backgroundColor: Colors.Transparent,
            borderColor: Colors.Gray[300],
          },
        },
      },
    },
    element: {
      gap: Spacings.SM,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      paddingLeft: Spacings.MD,
      paddingRight: Spacings.MD,
      variants: {
        size: {
          xs: {
            minHeight: Heights.XSminHeight,
          },
          sm: {
            minHeight: Heights.SMminHeight,
          },
          md: {
            minHeight: Heights.MDminHeight,
          },
          lg: {
            minHeight: Heights.LGminHeight,
          },
          xl: {
            minHeight: Heights.XLminHeight,
          },
          xxl: {
            minHeight: Heights.XXLminHeight,
          },
        },
      },
    },
    text: {
      fontSize: FontSizes.MD,
      fontFamily: "Poppins",
      textAlign: "center",
      variants: {
        base: {
          primary: {
            color: Colors.Shades.white,
          },
          secondary: {
            color: Colors.Shades.white,
          },
          tertiary: {
            color: Colors.Shades.white,
          },
          primary_outline: {
            color: Colors.Primary[700],
          },
          secondary_outline: {
            color: Colors.Secondary[600],
          },
          tertiary_outline: {
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
          primary_outline: {
            color: Colors.Primary[300],
          },
          secondary_outline: {
            color: Colors.Secondary[300],
          },
          tertiary_outline: {
            color: Colors.Gray[300],
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
    leftSlot: {
      variants: {
        base: {
          primary: {
            color: Colors.Shades.white,
          },
          secondary: {
            color: Colors.Shades.white,
          },
          tertiary: {
            color: Colors.Shades.white,
          },
          primary_outline: {
            color: Colors.Primary[700],
          },
          secondary_outline: {
            color: Colors.Secondary[600],
          },
          tertiary_outline: {
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
          primary_outline: {
            color: Colors.Primary[300],
          },
          secondary_outline: {
            color: Colors.Secondary[300],
          },
          tertiary_outline: {
            color: Colors.Gray[300],
          },
        },
      },
    },
    rightSlot: {
      variants: {
        base: {
          primary: {
            color: Colors.Shades.white,
          },
          secondary: {
            color: Colors.Shades.white,
          },
          tertiary: {
            color: Colors.Shades.white,
          },
          primary_outline: {
            color: Colors.Primary[700],
          },
          secondary_outline: {
            color: Colors.Secondary[600],
          },
          tertiary_outline: {
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
          primary_outline: {
            color: Colors.Primary[300],
          },
          secondary_outline: {
            color: Colors.Secondary[300],
          },
          tertiary_outline: {
            color: Colors.Gray[300],
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
      variants: {
        disabled: {
          true: {
            borderColor: Colors.Gray[500],
            backgroundColor: Colors.Gray[100],
          },
        },
        size: {
          xs: {
            height: 16,
            width: 16,
          },
          sm: {
            height: 20,
            width: 20,
          },
          md: {
            height: 26,
            width: 26,
          },
          lg: {
            height: 42,
            width: 42,
          },
          xl: {
            height: 50,
            width: 50,
          },
          xxl: {
            height: 80,
            width: 80,
          },
        },
      },
    },
    container: {},
    text: {
      color: Colors.Gray[900],
      fontSize: Spacings.MD,
      variants: {
        disabled: {
          true: {
            color: Colors.Gray[300],
          },
        },
      },
    },
  },
  radioGroup: {
    group: {
      variants: {
        disabled: {
          true: {
            backgroundColor: Colors.Gray[100],
          },
        },
      },
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
      fontSize: FontSizes.MD,
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
    text: {
      fontSize: FontSizes.MD,
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
  badge: {
    //@ts-ignore
    container: {
      variants: {
        base: {
          primary: {},
          secondary: {},
          tertiary: {},
        },
        outline: {
          primary: {},
          secondary: {},
          tertiary: {},
          false: {},
        },
      },
    },
    element: {
      borderRadius: Radius.XL,
      height: 20,
      paddingLeft: Spacings.SM,
      paddingRight: Spacings.SM,
      variants: {
        base: {
          primary: {
            backgroundColor: Colors.Primary[700],
            borderColor: Colors.Primary[600],
          },
          secondary: {
            backgroundColor: Colors.Secondary[500],
            borderColor: Colors.Secondary[600],
          },
          tertiary: {
            backgroundColor: Colors.Gray[500],
            borderColor: Colors.Gray[600],
          },
        },
        outline: {
          primary: {
            backgroundColor: "white",
            borderColor: Colors.Primary[500],
          },
          secondary: {
            backgroundColor: "white",
            borderColor: Colors.Secondary[500],
          },
          tertiary: {
            backgroundColor: "white",
            borderColor: Colors.Gray[950],
          },
        },
      },
    },
    text: {
      color: "white",
      fontSize: FontSizes.SM,
      variants: {
        base: {
          primary: {
            color: Colors.Primary[50],
          },
          secondary: {
            color: Colors.Secondary[50],
          },
          tertiary: {
            color: Colors.Gray[50],
          },
        },
        outline: {
          primary: {
            color: Colors.Primary[500],
          },
          secondary: {
            color: Colors.Secondary[500],
          },
          tertiary: {
            color: Colors.Gray[950],
          },
        },
      },
    },
    leftSlot: {
      color: "white",
      marginRight: 8,
      variants: {
        primary: {
          true: {},
        },
        secondary: {
          true: {},
        },
        tertiary: {
          true: {},
        },
        outline: {
          true: {},
        },
      },
    },
    rightSlot: {
      color: "white",
      marginLeft: 8,
      variants: {
        primary: {
          true: {},
        },
        secondary: {
          true: {},
        },
        tertiary: {
          true: {},
        },
        outline: {
          true: {},
        },
      },
    },
  },
  popup: {
    container: {
      backgroundColor: Colors.Gray[50],
      padding: Spacings.MD,
      variants: {
        type: {
          info: {
            backgroundColor: "#D8EEFF",
          },
          success: {
            backgroundColor: "#CEFDE8",
          },
          warning: {
            backgroundColor: "#FFFBC5",
          },
          error: {
            backgroundColor: "#FEE6E5",
          },
        },
      },
    },
    leftSlot: {
      color: Colors.Gray[950],
      marginRight: Spacings.SM,
    },
    closeIcon: {
      marginBottom: Spacings.MD,
      marginRight: Spacings.MD,
      marginTop: Spacings.MD,
      color: Colors.Gray[950],
    },
    element: {
      padding: Spacings.MD,
    },
    header: {
      marginBottom: Spacings.SM,
    },
    title: {
      fontSize: FontSizes.MD,
      fontWeight: 700,
      lineHeight: 20,
      color: Colors.Gray[950],
    },
  },
  // ? TAB Component [Layered Component]
  tab: {
    header: {
      container: {
        variants: {},
      },
    },
    view: {
      container: {
        backgroundColor: Colors.Shades.white,
        borderRadius: Radius.SM,
      },
      element: {
        padding: Spacings.MD,
      },
    },
    headerItem: {
      container: {
        paddingTop: Spacings.SM,
        paddingBottom: Spacings.SM,
        paddingLeft: Spacings.MD,
        paddingRight: Spacings.MD,
        variants: {
          active: {
            true: {
              borderBottomColor: Colors.Primary[500],
            },
          },
        },
      },
      text: {
        fontSize: FontSizes.MD,
        color: Colors.Gray[950],
      },
    },
  },
  stepper: {
    header: {
      container: {},
      element: {
        backgroundColor: Colors.Gray[100],
        variants: {
          isActive: {
            true: {
              backgroundColor: Colors.Primary[200],
            },
          },
          isCompleted: {
            true: {
              backgroundColor: Colors.Primary[500],
            },
          },
          isDisabled: {
            true: {
              backgroundColor: Colors.Gray[100],
            },
          },
        },
      },
      text: {
        color: Colors.Gray[950],
        variants: {
          isActive: {
            true: {
              color: Colors.Gray[950],
            },
          },
          isCompleted: {
            true: {
              color: Colors.Primary[500],
            },
          },
          isDisabled: {
            true: {
              color: Colors.Gray[300],
            },
          },
        },
      },
      number: {
        color: Colors.Gray[950],
        variants: {
          isActive: {
            true: {
              color: Colors.Gray[950],
            },
          },
          isCompleted: {
            true: {
              color: Colors.Primary[500],
            },
          },
          isDisabled: {
            true: {
              color: Colors.Gray[300],
            },
          },
        },
      },
      leftTrail: {
        backgroundColor: Colors.Gray[200],
        variants: {
          isCompleted: {
            true: {
              backgroundColor: Colors.Primary[500],
            },
          },
          isActive: {
            true: {
              backgroundColor: Colors.Primary[500],
            },
          },
          isFirst: {
            true: {
              backgroundColor: Colors.Transparent,
            },
          },
        },
      },
      rightTrail: {
        backgroundColor: Colors.Gray[200],
        variants: {
          isCompleted: {
            true: {
              backgroundColor: Colors.Primary[500],
            },
          },
          isLast: {
            true: {
              backgroundColor: Colors.Transparent,
            },
          },
        },
      },
    },
  },
  image: {},
  block: {},
  col: {},
  row: {},
  label: {},
  list: {},
  avatar: {
    container: {
      backgroundColor: Colors.Gray[100],
      variants: {
        size: {
          xs: {
            height: 32,
            width: 32,
          },
          sm: {
            height: 48,
            width: 48,
          },
          md: {
            height: 64,
            width: 64,
          },
          lg: {
            height: 128,
            width: 128,
          },
          xl: {
            height: 256,
            width: 256,
          },
        },
        circle: {
          xs: {
            borderRadius: 16,
          },
          sm: {
            borderRadius: 24,
          },
          md: {
            borderRadius: 32,
          },
          lg: {
            borderRadius: 64,
          },
          xl: {
            borderRadius: 128,
          },
        },
        rounded: {
          xs: {
            borderRadius: Spacings.XS,
          },
          sm: {
            borderRadius: Spacings.SM,
          },
          md: {
            borderRadius: Spacings.MD,
          },
          lg: {
            borderRadius: Spacings.LG,
          },
          xl: {
            borderRadius: Spacings.XL,
          },
        },
      },
    },
    image: {
      variants: {
        size: {
          xs: {
            height: 32,
            width: 32,
          },
          sm: {
            height: 48,
            width: 48,
          },
          md: {
            height: 64,
            width: 64,
          },
          lg: {
            height: 128,
            width: 128,
          },
          xl: {
            height: 256,
            width: 256,
          },
        },
        circle: {
          xs: {
            borderRadius: 16,
          },
          sm: {
            borderRadius: 24,
          },
          md: {
            borderRadius: 32,
          },
          lg: {
            borderRadius: 64,
          },
          xl: {
            borderRadius: 128,
          },
        },
        rounded: {
          xs: {
            borderRadius: Spacings.XS,
          },
          sm: {
            borderRadius: Spacings.SM,
          },
          md: {
            borderRadius: Spacings.MD,
          },
          lg: {
            borderRadius: Spacings.LG,
          },
          xl: {
            borderRadius: Spacings.XL,
          },
        },
      },
    },
    text: {
      color: Colors.Gray[700],
      variants: {
        size: {
          xs: {
            fontSize: 16,
          },
          sm: {
            fontSize: 24,
          },
          md: {
            fontSize: 32,
          },
          lg: {
            fontSize: 64,
          },
          xl: {
            fontSize: 128,
          },
        },
      },
    },
    icon: {
      color: Colors.Gray[700],
    },
  },
};
