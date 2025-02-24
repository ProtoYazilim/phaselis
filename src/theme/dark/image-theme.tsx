import type { PhaselisComponentTheme } from "../types";

export default {
  image: {
    default: {
      container: {
        variants: {
          background: {
            true: {
              flex: 1,
            },
          },
        },
      },
      element: {
        variants: {
          background: {
            true: {
              flex: 1,
              justifyContent: "center",
            },
          },
        },
      },
    },
  },
} as PhaselisComponentTheme;
