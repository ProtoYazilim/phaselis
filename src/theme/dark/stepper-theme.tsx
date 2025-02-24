import { DarkColors } from "../DarkColors";
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
          backgroundColor: DarkColors.Primary[200],
          borderColor: DarkColors.Primary[200],
          borderWidth: 2,
          variants: {
            isActive: {
              true: {
                backgroundColor: DarkColors.Primary[400],
                borderColor: DarkColors.Primary[600],
              },
            },
            isCompleted: {
              true: {
                backgroundColor: DarkColors.Primary[600],
                borderColor: DarkColors.Primary[600],
              },
            },
            isDisabled: {
              true: {
                backgroundColor: DarkColors.Primary[100],
                borderColor: DarkColors.Primary[100],
              },
            },
          },
        },
        text: {
          color: DarkColors.Primary[500],
          marginTop: 4,
          variants: {
            isActive: {
              true: {
                color: DarkColors.Primary[800],
              },
            },
            isCompleted: {
              true: {
                color: DarkColors.Primary[600],
              },
            },
            isDisabled: {
              true: {
                color: DarkColors.Primary[200],
              },
            },
          },
        },
        number: {
          color: DarkColors.Primary[500],
          variants: {
            isActive: {
              true: {
                color: DarkColors.Primary[50],
              },
            },
            isCompleted: {
              true: {
                color: DarkColors.Primary[50],
              },
            },
            isDisabled: {
              true: {
                color: DarkColors.Primary[200],
              },
            },
          },
        },
        leftTrail: {
          backgroundColor: DarkColors.Primary[200],
          height: 3,
          variants: {
            isCompleted: {
              true: {
                backgroundColor: DarkColors.Primary[600],
              },
            },
            isActive: {
              true: {
                backgroundColor: DarkColors.Primary[600],
              },
            },
            isFirst: {
              true: {
                backgroundColor: DarkColors.Transparent,
              },
            },
          },
        },
        rightTrail: {
          backgroundColor: DarkColors.Primary[200],
          height: 3,
          variants: {
            isCompleted: {
              true: {
                backgroundColor: DarkColors.Primary[600],
              },
            },
            isLast: {
              true: {
                backgroundColor: DarkColors.Transparent,
              },
            },
          },
        },
        completeIcon: {
          color: DarkColors.Primary[500],
          variants: {
            isActive: {
              true: {
                color: DarkColors.Primary[50],
              },
            },
            isCompleted: {
              true: {
                color: DarkColors.Primary[50],
              },
            },
            isDisabled: {
              true: {
                color: DarkColors.Primary[200],
              },
            },
          },
        },
        leftText: {
          color: DarkColors.Primary[500],
          paddingRight: Spacings.SM,
          paddingLeft: Spacings.SM,
          variants: {
            isActive: {
              true: {
                color: DarkColors.Primary[800],
              },
            },
            isCompleted: {
              true: {
                color: DarkColors.Primary[600],
              },
            },
            isDisabled: {
              true: {
                color: DarkColors.Primary[200],
              },
            },
          },
        },
        rightText: {
          color: DarkColors.Primary[500],
          paddingRight: Spacings.SM,
          paddingLeft: Spacings.SM,
          variants: {
            isActive: {
              true: {
                color: DarkColors.Primary[800],
              },
            },
            isCompleted: {
              true: {
                color: DarkColors.Primary[600],
              },
            },
            isDisabled: {
              true: {
                color: DarkColors.Primary[200],
              },
            },
          },
        },
        topText: {
          color: DarkColors.Primary[500],
          marginBottom: Spacings.XS,
          marginRight: Spacings.SM,
          variants: {
            isActive: {
              true: {
                color: DarkColors.Primary[800],
              },
            },
            isCompleted: {
              true: {
                color: DarkColors.Primary[600],
              },
            },
            isDisabled: {
              true: {
                color: DarkColors.Primary[200],
              },
            },
          },
        },
        bottomText: {
          color: DarkColors.Primary[500],
          marginBottom: Spacings.XS,
          marginRight: Spacings.SM,
          variants: {
            isActive: {
              true: {
                color: DarkColors.Primary[800],
              },
            },
            isCompleted: {
              true: {
                color: DarkColors.Primary[600],
              },
            },
            isDisabled: {
              true: {
                color: DarkColors.Primary[200],
              },
            },
          },
        },
      },
    },
  },
} as PhaselisComponentTheme;
