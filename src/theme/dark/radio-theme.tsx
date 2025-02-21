import { DarkColors } from "../DarkColors";
import { Heights, Spacings } from "../spacings";

export default {
  radio: {
    default: {
      innerElement: {},
      outerElement: {
        borderColor: DarkColors.Primary[950],
        borderWidth: 0.5,
        variants: {
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
      container: {
        gap: Spacings.SM,
      },
      text: {
        fontSize: Spacings.MD,
      },
    },
    primary: {
      innerElement: {
        backgroundColor: DarkColors.Primary[600],
        variants: {
          disabled: {
            true: {
              backgroundColor: DarkColors.Primary[200],
            },
          },
        },
      },
      outerElement: {
        borderColor: DarkColors.Primary[950],
        variants: {
          disabled: {
            true: {
              borderColor: DarkColors.Primary[100],
              backgroundColor: DarkColors.Primary[50],
            },
          },
        },
      },
      text: {
        color: DarkColors.Primary[950],
        variants: {
          disabled: {
            true: {
              color: DarkColors.Primary[200],
            },
          },
        },
      },
    },
    secondary: {
      innerElement: {
        backgroundColor: DarkColors.Secondary[600],
        variants: {
          disabled: {
            true: {
              backgroundColor: DarkColors.Secondary[200],
            },
          },
        },
      },
      outerElement: {
        borderColor: DarkColors.Secondary[950],
        variants: {
          disabled: {
            true: {
              borderColor: DarkColors.Secondary[100],
              backgroundColor: DarkColors.Secondary[50],
            },
          },
        },
      },
      text: {
        color: DarkColors.Secondary[950],
        variants: {
          disabled: {
            true: {
              color: DarkColors.Secondary[200],
            },
          },
        },
      },
    },
    tertiary: {
      innerElement: {
        backgroundColor: DarkColors.Tertiary[600],
        variants: {
          disabled: {
            true: {
              backgroundColor: DarkColors.Tertiary[200],
            },
          },
        },
      },
      outerElement: {
        borderColor: DarkColors.Tertiary[950],
        variants: {
          disabled: {
            true: {
              borderColor: DarkColors.Tertiary[100],
              backgroundColor: DarkColors.Tertiary[50],
            },
          },
        },
      },
      text: {
        color: DarkColors.Tertiary[950],
        variants: {
          disabled: {
            true: {
              color: DarkColors.Tertiary[200],
            },
          },
        },
      },
    },
  },
};
