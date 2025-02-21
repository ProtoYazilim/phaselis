import { DarkColors } from "../DarkColors";
import { Radius, Spacings, FontSizes } from "../spacings";

export default {
  tab: {
    default: {
      header: {
        container: {},
        element: {
          variants: {
            true: {},
            false: {},
          },
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
        leftSlot: {},
        rightSlot: {},
      },
      tabItem: {
        container: {},
      },
    },
  },
};
