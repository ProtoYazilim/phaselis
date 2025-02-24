import { DarkColors } from "../DarkColors";
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
              backgroundColor: DarkColors.Gray[100],
            },
          },
        },
      },
    },
  },
} as PhaselisComponentTheme;
