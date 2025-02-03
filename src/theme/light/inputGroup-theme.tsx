import { Colors } from "../colors";
import { Spacings } from "../spacings";

export default {
  inputGroup: {
    default: {
      container: {
        alignItems: "flex-start",
        variants: {
          error: {
            true: {},
          },
          disabled: {
            true: {},
          },
          size: {
            sm: {
              height: 28,
            },
            md: {
              height: 36,
            },
            lg: {
              height: 44,
            },
          },
          required: {
            true: {},
          },
        },
      },
      label: {
        lineHeight: 24,
        marginBottom: 4,
        paddingHorizontal: Spacings.MD,
        variants: {
          disabled: {
            true: {},
          },
          error: {
            true: {},
          },
          size: {
            sm: {},
            md: {},
            lg: {},
          },
          required: { true: {} },
        },
      },
      message: {
        lineHeight: 21,
        marginTop: 4,
        variants: {
          disabled: {
            true: {},
          },
          error: {
            true: {
              color: Colors.Danger[600],
            },
          },
          required: { true: {} },
        },
      },
    },
  },
};
