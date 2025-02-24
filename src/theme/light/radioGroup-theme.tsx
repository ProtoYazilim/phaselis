import { LightColors } from "../LightColors";
import { Spacings } from "../spacings";
import type { PhaselisComponentTheme } from "../types";

export default {
  radioGroup: {
    default: {
      group: {
        gap: Spacings.SM,
        variants: {
          disabled: {
            true: {
              backgroundColor: LightColors.Gray[100],
            },
          },
        },
      },
    },
  },
} as PhaselisComponentTheme;
