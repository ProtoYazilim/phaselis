import { LightColors } from "../LightColors";
import { FontSizes } from "../spacings";

export default {
  link: {
    default: {
      container: {},
      text: {
        fontSize: FontSizes.MD,
        lineHeight: 22,
        color: LightColors.Primary[950],
      },
      leftSlot: {
        color: LightColors.Primary[950],
      },
      rightSlot: {
        color: LightColors.Primary[950],
      },
    },
    primary: {
      text: {
        color: LightColors.Primary[600],
      },
      leftSlot: {
        color: LightColors.Primary[600],
      },
      rightSlot: {
        color: LightColors.Primary[600],
      },
    },
    secondary: {
      text: {
        color: LightColors.Secondary[600],
      },
      leftSlot: {
        color: LightColors.Secondary[600],
      },
      rightSlot: {
        color: LightColors.Secondary[600],
      },
    },
    tertiary: {
      text: {
        color: LightColors.Tertiary[600],
      },
      leftSlot: {
        color: LightColors.Tertiary[600],
      },
      rightSlot: {
        color: LightColors.Tertiary[600],
      },
    },
  },
};
