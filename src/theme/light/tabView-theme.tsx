import { LightColors } from "../LightColors";
import { Radius, Spacings, FontSizes } from "../spacings";
import type { PhaselisComponentTheme } from "../types";

export default {
  tab: {
    default: {
      header: {
        container: {},
        element: {
          variants: {
            scrollable: {
              true: {},
              false: {},
            },
          },
        },
        leftSlot: {
          color: LightColors.Primary[950],
        },
        rightSlot: {
          color: LightColors.Primary[950],
        },
      },
      view: {
        container: {
          backgroundColor: LightColors.Shades.white,
          borderRadius: Radius.SM,
        },
        element: {
          padding: Spacings.MD,
        },
      },
      headerItem: {
        container: {
          borderBottomColor: "transparent",
          paddingTop: Spacings.SM,
          paddingBottom: Spacings.SM,
          paddingLeft: Spacings.MD,
          paddingRight: Spacings.MD,
          variants: {
            active: {
              true: {
                borderBottomColor: LightColors.Primary[500],
              },
              false: {},
            },
            scrollable: {
              true: {},
              false: {},
            },
          },
        },
        text: {
          fontSize: FontSizes.MD,
          color: LightColors.Gray[950],
        },
        leftSlot: {
          color: LightColors.Shades.black,
        },
        rightSlot: {
          color: LightColors.Shades.black,
        },
      },
      tabItem: {
        container: {},
      },
    },
  },
} as PhaselisComponentTheme;
