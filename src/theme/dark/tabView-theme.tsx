import { Colors } from "../colors";
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
          backgroundColor: Colors.Shades.white,
          borderRadius: Radius.SM,
        },
        element: {
          padding: Spacings.MD,
        },
      },
      headerItem: {
        container: {
          borderBottomColor: Colors.Shades.white,
          paddingTop: Spacings.SM,
          paddingBottom: Spacings.SM,
          paddingLeft: Spacings.MD,
          paddingRight: Spacings.MD,
          variants: {
            active: {
              true: {
                borderBottomColor: Colors.Primary[500],
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
          color: Colors.Gray[950],
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
