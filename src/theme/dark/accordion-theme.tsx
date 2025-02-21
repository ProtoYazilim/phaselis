import { DarkColors } from "../DarkColors";
import { FontSizes, Spacings } from "../spacings";

export default {
  accordion_header: {
    default: {
      container: {},
      text: {
        fontSize: FontSizes.MD,
        fontWeight: 700,
        lineHeight: 20,
        color: DarkColors.Primary[800],
        variants: {
          disabled: {
            true: {
              color: DarkColors.Primary[200],
            },
          },
        },
      },
      icon: {
        color: DarkColors.Gray[950],
        variants: {
          disabled: {
            true: {
              color: DarkColors.Gray[300],
            },
          },
        },
      },
      drop: {
        color: DarkColors.Primary[800],
        variants: {
          disabled: {
            true: {
              color: DarkColors.Primary[200],
            },
          },
        },
      },
    },
  },
  accordion_item: {
    default: {
      container: {
        padding: Spacings.MD,
        borderColor: DarkColors.Primary[200],
        variants: {
          disabled: {
            true: {
              backgroundColor: DarkColors.Primary[100],
            },
          },
        },
      },
      element: {
        marginTop: Spacings.MD,
      },
    },
  },
};
