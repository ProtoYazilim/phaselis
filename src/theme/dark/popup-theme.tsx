import { DarkColors } from "../DarkColors";
import { Spacings, FontSizes } from "../spacings";
import type { PhaselisComponentTheme } from "../types";

export default {
  popup: {
    default: {
      container: {
        backgroundColor: DarkColors.Gray[50],
        padding: Spacings.MD,
        borderRadius: Spacings.MD,
      },
      leftSlot: {
        color: DarkColors.Gray[950],
        marginRight: Spacings.SM,
      },
      closeIcon: {
        marginBottom: Spacings.MD,
        marginRight: Spacings.MD,
        marginTop: Spacings.MD,
        color: DarkColors.Gray[950],
      },
      element: {
        padding: Spacings.MD,
      },
      header: {
        marginBottom: Spacings.SM,
      },
      title: {
        fontSize: FontSizes.MD,
        color: DarkColors.Gray[950],
        fontWeight: 700,
        lineHeight: 20,
      },
      backDrop: {},
    },
    info: {
      container: {
        backgroundColor: DarkColors.Info[100],
      },
    },
    success: {
      container: {
        backgroundColor: DarkColors.Success[100],
      },
    },
    warning: {
      container: {
        backgroundColor: DarkColors.Warning[100],
      },
    },
    error: {
      container: {
        backgroundColor: DarkColors.Danger[100],
      },
    },
  },
} as PhaselisComponentTheme;
