import { LightColors } from "../LightColors";
import { Heights, Spacings } from "../spacings";

export default {
  radio: {
    default: {
      innerElement: {},
      outerElement: {
        borderColor: LightColors.Primary[950],
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
        backgroundColor: LightColors.Primary[600],
        variants: {
          disabled: {
            true: {
              backgroundColor: LightColors.Primary[200],
            },
          },
        },
      },
      outerElement: {
        borderColor: LightColors.Primary[950],
        variants: {
          disabled: {
            true: {
              borderColor: LightColors.Primary[100],
              backgroundColor: LightColors.Primary[50],
            },
          },
        },
      },
      text: {
        color: LightColors.Primary[950],
        variants: {
          disabled: {
            true: {
              color: LightColors.Primary[200],
            },
          },
        },
      },
    },
    secondary: {
      innerElement: {
        backgroundColor: LightColors.Secondary[600],
        variants: {
          disabled: {
            true: {
              backgroundColor: LightColors.Secondary[200],
            },
          },
        },
      },
      outerElement: {
        borderColor: LightColors.Secondary[950],
        variants: {
          disabled: {
            true: {
              borderColor: LightColors.Secondary[100],
              backgroundColor: LightColors.Secondary[50],
            },
          },
        },
      },
      text: {
        color: LightColors.Secondary[950],
        variants: {
          disabled: {
            true: {
              color: LightColors.Secondary[200],
            },
          },
        },
      },
    },
    tertiary: {
      innerElement: {
        backgroundColor: LightColors.Tertiary[600],
        variants: {
          disabled: {
            true: {
              backgroundColor: LightColors.Tertiary[200],
            },
          },
        },
      },
      outerElement: {
        borderColor: LightColors.Tertiary[950],
        variants: {
          disabled: {
            true: {
              borderColor: LightColors.Tertiary[100],
              backgroundColor: LightColors.Tertiary[50],
            },
          },
        },
      },
      text: {
        color: LightColors.Tertiary[950],
        variants: {
          disabled: {
            true: {
              color: LightColors.Tertiary[200],
            },
          },
        },
      },
    },
  },
};
