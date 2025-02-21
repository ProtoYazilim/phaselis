import { DarkColors } from "../DarkColors";

export default {
  slider: {
    default: {
      container: {
        variants: {
          focus: {
            true: {},
          },
          error: {
            true: {},
          },
          disabled: {
            true: {},
          },
        },
      },
      element: {
        color: DarkColors.Primary[950],
        minimumTrackTintColor: DarkColors.Primary[500],
        maximumTrackTintColor: DarkColors.Primary[200],
        thumbTintColor: DarkColors.Primary[500],
        variants: {
          focus: {
            true: {},
          },
          error: {
            true: {},
          },
          disabled: {
            true: {
              color: DarkColors.Primary[300],
              minimumTrackTintColor: DarkColors.Primary[200],
              maximumTrackTintColor: DarkColors.Primary[100],
              thumbTintColor: DarkColors.Primary[500],
            },
          },
        },
      },
    },
  },
};
