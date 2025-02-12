import { Colors } from "../colors";
import { FontSizes } from "../spacings";

export default {
  link: {
    default: {
      container: {},
      text: {
        fontSize: FontSizes.MD,
        lineHeight: 22,
        color: Colors.Primary[950],
      },
      leftSlot: {
        color: Colors.Primary[950],
        marginRight: 2,
      },
      rightSlot: {
        color: Colors.Primary[950],
        marginLeft: 2,
      },
    },
    primary: {
      text: {
        color: Colors.Primary[600],
      },
      leftSlot: {
        color: Colors.Primary[600],
      },
      rightSlot: {
        color: Colors.Primary[600],
      },
    },
    secondary: {
      text: {
        color: Colors.Secondary[600],
      },
      leftSlot: {
        color: Colors.Secondary[600],
      },
      rightSlot: {
        color: Colors.Secondary[600],
      },
    },
    tertiary: {
      text: {
        color: Colors.Tertiary[600],
      },
      leftSlot: {
        color: Colors.Tertiary[600],
      },
      rightSlot: {
        color: Colors.Tertiary[600],
      },
    },
  },
};
