import { Colors } from "../colors";
import { FontSizes, Spacings } from "../spacings";

export default {
  accordion_header: {
    default: {
      container: {},
      text: {
        fontSize: FontSizes.MD,
        fontWeight: 700,
        lineHeight: 20,
        color: Colors.Primary[800],
        variants: {
          disabled: {
            true: {
              color: Colors.Primary[200],
            },
          },
        },
      },
      icon: {
        color: Colors.Gray[950],
        variants: {
          disabled: {
            true: {
              color: Colors.Gray[300],
            },
          },
        },
      },
      drop: {
        color: Colors.Primary[800],
        variants: {
          disabled: {
            true: {
              color: Colors.Primary[200],
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
        borderColor: Colors.Primary[200],
        variants: {
          disabled: {
            true: {
              backgroundColor: Colors.Primary[100],
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
