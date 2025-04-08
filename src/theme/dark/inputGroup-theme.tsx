import { DarkColors } from "../DarkColors";
import { Spacings } from "../spacings";
import type { PhaselisComponentTheme } from "../types";

export default {
  inputGroup: {
    default: {
      container: {
        alignItems: "flex-start",
        gap: Spacings.SM,
        marginBottom: Spacings.SM,
        variants: {
          error: {
            true: {},
          },
          disabled: {
            true: {},
          },
          size: {
            sm: {
              height: 28,
            },
            md: {
              height: 36,
            },
            lg: {
              height: 44,
            },
          },
          required: {
            true: {},
          },
        },
      },
      label: {
        paddingHorizontal: Spacings.SM,
        color: DarkColors.Primary[950],
        fontSize: 16,
        lineHeight: 16,
        fontWeight: "400",
        variants: {
          disabled: {
            true: {},
          },
          error: {
            true: {},
          },
          size: {
            sm: {},
            md: {},
            lg: {},
          },
          required: { true: {} },
        },
      },
      message: {
        paddingHorizontal: Spacings.SM,
        lineHeight: 14,
        fontSize: 14,
        variants: {
          disabled: {
            true: {},
          },
          error: {
            true: {
              color: DarkColors.Danger[600],
            },
          },
          required: { true: {} },
        },
      },
    },
  },
} as PhaselisComponentTheme;
