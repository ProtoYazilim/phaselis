import Colors from "./colors";
import { Spacings, Heights, Radius } from "./spacings";

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
            opacity: 1,
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
            opacity: 1,
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
                opacity: 1,
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
            opacity: 1,
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
  button: {
    extraStyles: {
      container: ({ disabled, outline, base }: any) => {
        if (disabled && outline) {
          let borderColor = Colors.Primary[300];
          if (base === "secondary") {
            borderColor = Colors.Secondary[300];
          }
          if (base === "tertiary") {
            borderColor = Colors.Gray[300];
          }
          return {
            backgroundColor: Colors.Transparent,
            borderColor: borderColor,
          };
        }
      },
      text: ({ disabled, outline, base }: any) => {
        if (disabled && outline) {
          if (base === "secondary") {
            return {
              color: Colors.Secondary[300],
            };
          }
          if (base === "tertiary") {
            return {
              color: Colors.Gray[300],
            };
          }
          return Colors.Primary[300];
        }
      },
    },
    container: {
      borderWidth: 1,
      borderRadius: Radius.MD,
      justifyContent: "center",
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
            backgroundColor: Colors.Transparent,
            borderColor: Colors.Primary[700],
          },
          secondary: {
            backgroundColor: Colors.Transparent,
            borderColor: Colors.Secondary[600],
          },
          tertiary: {
            backgroundColor: Colors.Transparent,
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
        half: {
          true: {
            width: "50%",
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
      fontSize: Spacings.MD,
      fontFamily: "Poppins",
      textAlign: "center",
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
    leftSlot: {
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
      },
    },
    rightSlot: {
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
    },
  },
  radioGroup: {
    group: {},
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
    text: {
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
      fontSize: 14,
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
      fontSize: 16,
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
        fontSize: 16,
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
};
