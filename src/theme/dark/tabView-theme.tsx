import { DarkColors } from "../DarkColors";
import { Radius, Spacings, FontSizes } from "../spacings";
import type { PhaselisComponentTheme } from "../types";

export default {
  tab: {
    default: {
      header: {
        container: {},
        element: {
          variants: {},
        },
        leftSlot: {
          color: DarkColors.Primary[950],
        },
        rightSlot: {
          color: DarkColors.Primary[950],
        },
      },
      view: {
        container: {
          backgroundColor: DarkColors.Shades.white,
          borderRadius: Radius.SM,
        },
        element: {
          padding: Spacings.MD,
        },
      },
      headerItem: {
        container: {
          borderBottomColor: DarkColors.Shades.white,
          paddingTop: Spacings.SM,
          paddingBottom: Spacings.SM,
          paddingLeft: Spacings.MD,
          paddingRight: Spacings.MD,
          variants: {
            active: {
              true: {
                borderBottomColor: DarkColors.Primary[500],
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
          color: DarkColors.Gray[950],
        },
        leftSlot: {
          color: DarkColors.Shades.black,
        },
        rightSlot: {
          color: DarkColors.Shades.black,
        },
      },
      tabItem: {
        container: {},
      },
    },
  },
} as PhaselisComponentTheme;
