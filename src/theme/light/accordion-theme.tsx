import { LightColors } from "../LightColors";
import { FontSizes, Spacings } from "../spacings";

export default {
  accordion_header: {
    default: {
      container: {},
      text: {
        fontSize: FontSizes.MD,
        fontWeight: 700,
        lineHeight: 20,
        color: LightColors.Primary[800],
        variants: {
          disabled: {
            true: {
              color: LightColors.Primary[200],
            },
          },
        },
      },
      icon: {
        color: LightColors.Gray[950],
        variants: {
          disabled: {
            true: {
              color: LightColors.Gray[300],
            },
          },
        },
      },
      drop: {
        color: LightColors.Primary[800],
        variants: {
          disabled: {
            true: {
              color: LightColors.Primary[200],
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
        borderColor: LightColors.Primary[200],
        variants: {
          disabled: {
            true: {
              backgroundColor: LightColors.Primary[100],
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
