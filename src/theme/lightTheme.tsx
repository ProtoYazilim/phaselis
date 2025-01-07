import { Colors } from "./colors";
import buttonTheme from "./light/button-theme";
import labelTheme from "./light/label-theme";
import checkboxTheme from "./light/checkbox-theme";
import radioTheme from "./light/radio-theme";
import radioGroupTheme from "./light/radioGroup-theme";
import badgeTheme from "./light/badge-theme";
import switchTheme from "./light/switch-theme";
import avatarTheme from "./light/avatar-theme";
import { Spacings, Heights, Radius, FontSizes } from "./spacings";

export const layeredComponents = ["tab"];

export const lightTheme = {
  root: {
    colors: Colors,
    spacings: Spacings,
  },
  ...buttonTheme,
  ...labelTheme,
  ...checkboxTheme,
  ...radioTheme,
  ...radioGroupTheme,
  ...badgeTheme,
  ...switchTheme,
  ...avatarTheme,
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
          paddingHorizontal: Spacings.LG,
        },
        text: {
          color: Colors.Gray[950],
        },
        closeIconSlot: {
          width: Heights.SMminHeight,
          height: Heights.SMminHeight,
          paddingRight: Spacings.SM,
          paddingLeft: Spacings.SM,
          backgroundColor: Colors.Primary[600],
          borderColor: Colors.Primary[50],
        },
        closeIcon: {
          color: Colors.Primary[50],
        },
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
          paddingTop: Spacings.SM,
          paddingRight: Spacings.MD,
          paddingBottom: Spacings.SM,
          paddingLeft: Spacings.MD,
          marginTop: Spacings.XS,
          borderColor: Colors.Gray[400],
        },
        selected: {
          backgroundColor: Colors.Primary[600],
          borderColor: Colors.Primary[400],
        },
        text: {},
      },
      _optionsSlot: {
        container: {},
        element: {
          paddingTop: Spacings.MD,
          paddingBottom: Spacings.MD,
          paddingRight: Spacings.LG,
          paddingLeft: Spacings.LG,
        },
      },
    },
    //InputSlot
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
          xs: {},
          sm: {
            height: 36,
          },
          md: {
            height: 48,
          },
          lg: {
            height: 56,
          },
          xl: {},
          xxl: {},
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
  list: {},
};
