import { LightColors } from "../LightColors";
import type { PhaselisComponentTheme } from "../types";

export default {
  slider: {
    default: {
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
        },
      },
      element: {
        color: LightColors.Primary[950],
        minimumTrackTintColor: LightColors.Primary[500],
        maximumTrackTintColor: LightColors.Primary[200],
        thumbTintColor: LightColors.Primary[500],
        variants: {
          focus: {
            true: {},
          },
          error: {
            true: {},
          },
          disabled: {
            true: {
              color: LightColors.Primary[300],
              minimumTrackTintColor: LightColors.Primary[200],
              maximumTrackTintColor: LightColors.Primary[100],
              thumbTintColor: LightColors.Primary[500],
            },
          },
        },
      },
    },
  },
} as PhaselisComponentTheme;
