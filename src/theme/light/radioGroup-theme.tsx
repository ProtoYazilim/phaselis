import { Colors } from "../colors";
import { Spacings } from "../spacings";

export default {
  radioGroup: {
    default: {
      group: {
        gap: Spacings.SM,
        variants: {
          disabled: {
            true: {
              backgroundColor: Colors.Gray[100],
            },
          },
        },
      },
    },
  },
};
