import { LightColors } from "../LightColors";
import { Spacings, FontSizes } from "../spacings";
import type { PhaselisComponentTheme } from "../types";

export default {
  popup: {
    default: {
      container: {
        backgroundColor: LightColors.Gray[50],
        padding: Spacings.MD,
        borderRadius: Spacings.MD,
      },
      leftSlot: {
        color: LightColors.Gray[950],
        marginRight: Spacings.SM,
      },
      closeIcon: {
        marginBottom: Spacings.MD,
        marginRight: Spacings.MD,
        marginTop: Spacings.MD,
        color: LightColors.Gray[950],
      },
      element: {
        padding: Spacings.MD,
      },
      header: {
        marginBottom: Spacings.SM,
      },
      title: {
        fontSize: FontSizes.MD,
        color: LightColors.Gray[950],
        fontWeight: 700,
        lineHeight: 20,
      },
      backDrop: {},
    },
    info: {
      container: {
        backgroundColor: LightColors.Info[100],
      },
    },
    success: {
      container: {
        backgroundColor: LightColors.Success[100],
      },
    },
    warning: {
      container: {
        backgroundColor: LightColors.Warning[100],
      },
    },
    error: {
      container: {
        backgroundColor: LightColors.Danger[100],
      },
    },
  },
} as PhaselisComponentTheme;
