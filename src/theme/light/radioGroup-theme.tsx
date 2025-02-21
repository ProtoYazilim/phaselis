import { LightColors } from "../LightColors";
import { Spacings } from "../spacings";

export default {
  radioGroup: {
    default: {
      group: {
        gap: Spacings.SM,
        variants: {
          disabled: {
            true: {
              backgroundColor: LightColors.Gray[100],
            },
          },
        },
      },
    },
  },
};
