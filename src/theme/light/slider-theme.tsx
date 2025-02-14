import { Colors } from "../colors";

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
        color: Colors.Primary[950],
        minimumTrackTintColor: Colors.Primary[500],
        maximumTrackTintColor: Colors.Primary[200],
        thumbTintColor: Colors.Primary[500],
        variants: {
          focus: {
            true: {},
          },
          error: {
            true: {},
          },
          disabled: {
            true: {
              color: Colors.Primary[300],
              minimumTrackTintColor: Colors.Primary[200],
              maximumTrackTintColor: Colors.Primary[100],
              thumbTintColor: Colors.Primary[500],
            },
          },
        },
      },
    },
  },
};
