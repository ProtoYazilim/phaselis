import { LightColors } from "../LightColors";
import { Spacings } from "../spacings";
import type { PhaselisComponentTheme } from "../types";

export default {
  switch: {
    default: {
      container: {
        gap: Spacings.SM,
      },
      track: {
        onColor: LightColors.Primary[500],
        offColor: LightColors.Gray[300],
        variants: {
          disabled: {
            true: {
              onColor: LightColors.Primary[100],
              offColor: LightColors.Gray[100],
            },
          },
        },
      },
      thumb: {
        width: Spacings.LG,
        height: Spacings.LG,
        onColor: LightColors.Gray[50],
        offColor: LightColors.Gray[50],
        variants: {
          disabled: {
            true: {
              onColor: LightColors.Primary[50],
              offColor: LightColors.Gray[50],
            },
          },
        },
      },
      leftIcon: {
        color: LightColors.Gray[100],
        variants: {
          disabled: {
            true: {
              color: LightColors.Gray[50],
            },
          },
        },
      },
      rightIcon: {
        color: LightColors.Gray[100],
        variants: {
          disabled: {
            true: {
              color: LightColors.Gray[50],
            },
          },
        },
      },
    },
    primary: {
      track: {
        onColor: LightColors.Primary[600],
        offColor: LightColors.Primary[300],
        variants: {
          disabled: {
            true: {
              onColor: LightColors.Primary[200],
              offColor: LightColors.Primary[100],
            },
          },
        },
      },
      thumb: {
        onColor: LightColors.Primary[50],
        offColor: LightColors.Primary[50],
      },
      rightIcon: {
        color: LightColors.Primary[50],
      },
      leftIcon: {
        color: LightColors.Primary[50],
      },
    },
    secondary: {
      track: {
        onColor: LightColors.Secondary[600],
        offColor: LightColors.Secondary[300],
        variants: {
          disabled: {
            true: {
              onColor: LightColors.Secondary[200],
              offColor: LightColors.Secondary[100],
            },
          },
        },
      },
      thumb: {
        onColor: LightColors.Secondary[50],
        offColor: LightColors.Secondary[50],
      },
      rightIcon: {
        color: LightColors.Secondary[50],
      },
      leftIcon: {
        color: LightColors.Secondary[50],
      },
    },
    tertiary: {
      track: {
        onColor: LightColors.Tertiary[600],
        offColor: LightColors.Tertiary[300],
        variants: {
          disabled: {
            true: {
              onColor: LightColors.Tertiary[200],
              offColor: LightColors.Tertiary[100],
            },
          },
        },
      },
      thumb: {
        onColor: LightColors.Tertiary[50],
        offColor: LightColors.Tertiary[50],
      },
      rightIcon: {
        color: LightColors.Tertiary[50],
      },
      leftIcon: {
        color: LightColors.Tertiary[50],
      },
    },
  },
} as PhaselisComponentTheme;
