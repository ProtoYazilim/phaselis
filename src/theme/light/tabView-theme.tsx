import { Colors } from "../colors";
import { Radius, Spacings, FontSizes } from "../spacings";

export default {
  tab: {
    default: {
      header: {
        container: {
          variants: {},
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
          paddingTop: Spacings.SM,
          paddingBottom: Spacings.SM,
          paddingLeft: Spacings.MD,
          paddingRight: Spacings.MD,
          variants: {
            active: {
              true: {
                borderBottomColor: Colors.Primary[500],
              },
            },
          },
        },
        text: {
          fontSize: FontSizes.MD,
          color: Colors.Gray[950],
        },
      },
      tabItem: {
        container: {},
      },
    },
  },
};
