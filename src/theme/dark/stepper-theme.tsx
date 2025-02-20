import { Colors } from "../colors";
import { Spacings } from "../spacings";

export default {
  stepper: {
    default: {
      header: {
        container: {},
        element: {
          width: Spacings.LG,
          height: Spacings.LG,
          borderRadius: Spacings.LG,
          backgroundColor: Colors.Primary[200],
          borderColor: Colors.Primary[200],
          borderWidth: 2,
          variants: {
            isActive: {
              true: {
                backgroundColor: Colors.Primary[400],
                borderColor: Colors.Primary[600],
              },
            },
            isCompleted: {
              true: {
                backgroundColor: Colors.Primary[600],
                borderColor: Colors.Primary[600],
              },
            },
            isDisabled: {
              true: {
                backgroundColor: Colors.Primary[100],
                borderColor: Colors.Primary[100],
              },
            },
          },
        },
        text: {
          color: Colors.Primary[500],
          marginTop: 4,
          variants: {
            isActive: {
              true: {
                color: Colors.Primary[800],
              },
            },
            isCompleted: {
              true: {
                color: Colors.Primary[600],
              },
            },
            isDisabled: {
              true: {
                color: Colors.Primary[200],
              },
            },
          },
        },
        number: {
          color: Colors.Primary[500],
          variants: {
            isActive: {
              true: {
                color: Colors.Primary[50],
              },
            },
            isCompleted: {
              true: {
                color: Colors.Primary[50],
              },
            },
            isDisabled: {
              true: {
                color: Colors.Primary[200],
              },
            },
          },
        },
        leftTrail: {
          backgroundColor: Colors.Primary[200],
          height: 3,
          variants: {
            isCompleted: {
              true: {
                backgroundColor: Colors.Primary[600],
              },
            },
            isActive: {
              true: {
                backgroundColor: Colors.Primary[600],
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
          backgroundColor: Colors.Primary[200],
          height: 3,
          variants: {
            isCompleted: {
              true: {
                backgroundColor: Colors.Primary[600],
              },
            },
            isLast: {
              true: {
                backgroundColor: Colors.Transparent,
              },
            },
          },
        },
        completeIcon: {
          color: Colors.Primary[500],
          variants: {
            isActive: {
              true: {
                color: Colors.Primary[50],
              },
            },
            isCompleted: {
              true: {
                color: Colors.Primary[50],
              },
            },
            isDisabled: {
              true: {
                color: Colors.Primary[200],
              },
            },
          },
        },
        leftText: {
          color: Colors.Primary[500],
          paddingRight: Spacings.SM,
          paddingLeft: Spacings.SM,
          variants: {
            isActive: {
              true: {
                color: Colors.Primary[800],
              },
            },
            isCompleted: {
              true: {
                color: Colors.Primary[600],
              },
            },
            isDisabled: {
              true: {
                color: Colors.Primary[200],
              },
            },
          },
        },
        rightText: {
          color: Colors.Primary[500],
          paddingRight: Spacings.SM,
          paddingLeft: Spacings.SM,
          variants: {
            isActive: {
              true: {
                color: Colors.Primary[800],
              },
            },
            isCompleted: {
              true: {
                color: Colors.Primary[600],
              },
            },
            isDisabled: {
              true: {
                color: Colors.Primary[200],
              },
            },
          },
        },
        topText: {
          color: Colors.Primary[500],
          marginBottom: Spacings.XS,
          marginRight: Spacings.SM,
          variants: {
            isActive: {
              true: {
                color: Colors.Primary[800],
              },
            },
            isCompleted: {
              true: {
                color: Colors.Primary[600],
              },
            },
            isDisabled: {
              true: {
                color: Colors.Primary[200],
              },
            },
          },
        },
        bottomText: {
          color: Colors.Primary[500],
          marginBottom: Spacings.XS,
          marginRight: Spacings.SM,
          variants: {
            isActive: {
              true: {
                color: Colors.Primary[800],
              },
            },
            isCompleted: {
              true: {
                color: Colors.Primary[600],
              },
            },
            isDisabled: {
              true: {
                color: Colors.Primary[200],
              },
            },
          },
        },
      },
    },
  },
};
