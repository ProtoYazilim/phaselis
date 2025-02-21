import { DarkColors } from "../DarkColors";
import { Spacings } from "../spacings";

export default {
  switch: {
    default: {
      container: {
        gap: Spacings.SM,
      },
      track: {
        onColor: DarkColors.Primary[500],
        offColor: DarkColors.Gray[300],
        variants: {
          disabled: {
            true: {
              onColor: DarkColors.Primary[100],
              offColor: DarkColors.Gray[100],
            },
          },
        },
      },
      thumb: {
        width: Spacings.LG,
        height: Spacings.LG,
        onColor: DarkColors.Gray[50],
        offColor: DarkColors.Gray[50],
        variants: {
          disabled: {
            true: {
              onColor: DarkColors.Primary[50],
              offColor: DarkColors.Gray[50],
            },
          },
        },
      },
      leftIcon: {
        color: DarkColors.Gray[100],
        variants: {
          disabled: {
            true: {
              color: DarkColors.Gray[50],
            },
          },
        },
      },
      rightIcon: {
        color: DarkColors.Gray[100],
        variants: {
          disabled: {
            true: {
              color: DarkColors.Gray[50],
            },
          },
        },
      },
    },
    primary: {
      track: {
        onColor: DarkColors.Primary[600],
        offColor: DarkColors.Primary[300],
        variants: {
          disabled: {
            true: {
              onColor: DarkColors.Primary[200],
              offColor: DarkColors.Primary[100],
            },
          },
        },
      },
      thumb: {
        onColor: DarkColors.Primary[50],
        offColor: DarkColors.Primary[50],
      },
      rightIcon: {
        color: DarkColors.Primary[50],
      },
      leftIcon: {
        color: DarkColors.Primary[50],
      },
    },
    secondary: {
      track: {
        onColor: DarkColors.Secondary[600],
        offColor: DarkColors.Secondary[300],
        variants: {
          disabled: {
            true: {
              onColor: DarkColors.Secondary[200],
              offColor: DarkColors.Secondary[100],
            },
          },
        },
      },
      thumb: {
        onColor: DarkColors.Secondary[50],
        offColor: DarkColors.Secondary[50],
      },
      rightIcon: {
        color: DarkColors.Secondary[50],
      },
      leftIcon: {
        color: DarkColors.Secondary[50],
      },
    },
    tertiary: {
      track: {
        onColor: DarkColors.Tertiary[600],
        offColor: DarkColors.Tertiary[300],
        variants: {
          disabled: {
            true: {
              onColor: DarkColors.Tertiary[200],
              offColor: DarkColors.Tertiary[100],
            },
          },
        },
      },
      thumb: {
        onColor: DarkColors.Tertiary[50],
        offColor: DarkColors.Tertiary[50],
      },
      rightIcon: {
        color: DarkColors.Tertiary[50],
      },
      leftIcon: {
        color: DarkColors.Tertiary[50],
      },
    },
  },
};
