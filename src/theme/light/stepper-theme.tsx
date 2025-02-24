import { LightColors } from "../LightColors";
import { Spacings } from "../spacings";
import type { PhaselisComponentTheme } from "../types";

export default {
  stepper: {
    default: {
      header: {
        container: {},
        element: {
          width: Spacings.LG,
          height: Spacings.LG,
          borderRadius: Spacings.LG,
          backgroundColor: LightColors.Primary[200],
          borderColor: LightColors.Primary[200],
          borderWidth: 2,
          variants: {
            isActive: {
              true: {
                backgroundColor: LightColors.Primary[400],
                borderColor: LightColors.Primary[600],
              },
            },
            isCompleted: {
              true: {
                backgroundColor: LightColors.Primary[600],
                borderColor: LightColors.Primary[600],
              },
            },
            isDisabled: {
              true: {
                backgroundColor: LightColors.Primary[100],
                borderColor: LightColors.Primary[100],
              },
            },
          },
        },
        text: {
          color: LightColors.Primary[500],
          marginTop: 4,
          variants: {
            isActive: {
              true: {
                color: LightColors.Primary[800],
              },
            },
            isCompleted: {
              true: {
                color: LightColors.Primary[600],
              },
            },
            isDisabled: {
              true: {
                color: LightColors.Primary[200],
              },
            },
          },
        },
        number: {
          color: LightColors.Primary[500],
          variants: {
            isActive: {
              true: {
                color: LightColors.Primary[50],
              },
            },
            isCompleted: {
              true: {
                color: LightColors.Primary[50],
              },
            },
            isDisabled: {
              true: {
                color: LightColors.Primary[200],
              },
            },
          },
        },
        leftTrail: {
          backgroundColor: LightColors.Primary[200],
          height: 3,
          variants: {
            isCompleted: {
              true: {
                backgroundColor: LightColors.Primary[600],
              },
            },
            isActive: {
              true: {
                backgroundColor: LightColors.Primary[600],
              },
            },
            isFirst: {
              true: {
                backgroundColor: LightColors.Transparent,
              },
            },
          },
        },
        rightTrail: {
          backgroundColor: LightColors.Primary[200],
          height: 3,
          variants: {
            isCompleted: {
              true: {
                backgroundColor: LightColors.Primary[600],
              },
            },
            isLast: {
              true: {
                backgroundColor: LightColors.Transparent,
              },
            },
          },
        },
        completeIcon: {
          color: LightColors.Primary[500],
          variants: {
            isActive: {
              true: {
                color: LightColors.Primary[50],
              },
            },
            isCompleted: {
              true: {
                color: LightColors.Primary[50],
              },
            },
            isDisabled: {
              true: {
                color: LightColors.Primary[200],
              },
            },
          },
        },
        leftText: {
          color: LightColors.Primary[500],
          paddingRight: Spacings.SM,
          paddingLeft: Spacings.SM,
          variants: {
            isActive: {
              true: {
                color: LightColors.Primary[800],
              },
            },
            isCompleted: {
              true: {
                color: LightColors.Primary[600],
              },
            },
            isDisabled: {
              true: {
                color: LightColors.Primary[200],
              },
            },
          },
        },
        rightText: {
          color: LightColors.Primary[500],
          paddingRight: Spacings.SM,
          paddingLeft: Spacings.SM,
          variants: {
            isActive: {
              true: {
                color: LightColors.Primary[800],
              },
            },
            isCompleted: {
              true: {
                color: LightColors.Primary[600],
              },
            },
            isDisabled: {
              true: {
                color: LightColors.Primary[200],
              },
            },
          },
        },
        topText: {
          color: LightColors.Primary[500],
          marginBottom: Spacings.XS,
          marginRight: Spacings.SM,
          variants: {
            isActive: {
              true: {
                color: LightColors.Primary[800],
              },
            },
            isCompleted: {
              true: {
                color: LightColors.Primary[600],
              },
            },
            isDisabled: {
              true: {
                color: LightColors.Primary[200],
              },
            },
          },
        },
        bottomText: {
          color: LightColors.Primary[500],
          marginBottom: Spacings.XS,
          marginRight: Spacings.SM,
          variants: {
            isActive: {
              true: {
                color: LightColors.Primary[800],
              },
            },
            isCompleted: {
              true: {
                color: LightColors.Primary[600],
              },
            },
            isDisabled: {
              true: {
                color: LightColors.Primary[200],
              },
            },
          },
        },
      },
    },
  },
} as PhaselisComponentTheme;
