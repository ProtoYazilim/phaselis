import { DarkColors } from "../DarkColors";
import { Spacings } from "../spacings";

export default {
  radioGroup: {
    default: {
      group: {
        gap: Spacings.SM,
        variants: {
          disabled: {
            true: {
              backgroundColor: DarkColors.Gray[100],
            },
          },
        },
      },
    },
  },
};
