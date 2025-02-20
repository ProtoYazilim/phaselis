import { Colors } from "../colors";
import { Spacings } from "../spacings";

export default {
  inputGroup: {
    default: {
      container: {
        alignItems: "flex-start",
        gap: Spacings.SM,
        marginBottom: Spacings.SM,
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
        paddingHorizontal: Spacings.SM,
        color: Colors.Primary[950],
        variants: {
          fontSize: 16,
          lineHeight: 16,
          fontWeight: "400",
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
        paddingHorizontal: Spacings.SM,
        lineHeight: 14,
        fontSize: 14,
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
