import { LightColors } from "../LightColors";
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
          backgroundColor: LightColors.Shades.white,
          borderRadius: Radius.SM,
        },
        element: {
          padding: Spacings.MD,
        },
      },
      headerItem: {
        container: {
          borderBottomColor: LightColors.Shades.white,
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
        leftSlot: {},
        rightSlot: {},
      },
      tabItem: {
        container: {},
      },
    },
  },
};
