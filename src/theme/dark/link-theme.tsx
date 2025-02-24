import { DarkColors } from "../DarkColors";
import { FontSizes } from "../spacings";
import type { PhaselisComponentTheme } from "../types";

export default {
  link: {
    default: {
      container: {},
      text: {
        fontSize: FontSizes.MD,
        lineHeight: 22,
        color: DarkColors.Primary[950],
      },
      leftSlot: {
        color: DarkColors.Primary[950],
      },
      rightSlot: {
        color: DarkColors.Primary[950],
      },
    },
    primary: {
      text: {
        color: DarkColors.Primary[600],
      },
      leftSlot: {
        color: DarkColors.Primary[600],
      },
      rightSlot: {
        color: DarkColors.Primary[600],
      },
    },
    secondary: {
      text: {
        color: DarkColors.Secondary[600],
      },
      leftSlot: {
        color: DarkColors.Secondary[600],
      },
      rightSlot: {
        color: DarkColors.Secondary[600],
      },
    },
    tertiary: {
      text: {
        color: DarkColors.Tertiary[600],
      },
      leftSlot: {
        color: DarkColors.Tertiary[600],
      },
      rightSlot: {
        color: DarkColors.Tertiary[600],
      },
    },
  },
} as PhaselisComponentTheme;
