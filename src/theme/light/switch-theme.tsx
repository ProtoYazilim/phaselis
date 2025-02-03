import { Colors } from "../colors";
import { Spacings } from "../spacings";

export default {
  switch: {
    default: {
      container: {},
      track: {
        onColor: Colors.Primary[500],
        offColor: Colors.Gray[300],
        variants: {
          disabled: {
            true: {
              onColor: Colors.Primary[100],
              offColor: Colors.Gray[100],
            },
          },
        },
      },
      thumb: {
        width: Spacings.LG,
        height: Spacings.LG,
        onColor: Colors.Gray[50],
        offColor: Colors.Gray[50],
        variants: {
          disabled: {
            true: {
              onColor: Colors.Primary[50],
              offColor: Colors.Gray[50],
            },
          },
        },
      },
      leftIcon: {
        color: Colors.Gray[100],
        variants: {
          disabled: {
            true: {
              color: Colors.Gray[50],
            },
          },
        },
      },
      rightIcon: {
        color: Colors.Gray[100],
        variants: {
          disabled: {
            true: {
              color: Colors.Gray[50],
            },
          },
        },
      },
    },
    primary: {
      track: {
        onColor: Colors.Primary[600],
        offColor: Colors.Primary[300],
        variants: {
          disabled: {
            true: {
              onColor: Colors.Primary[200],
              offColor: Colors.Primary[100],
            },
          },
        },
      },
      thumb: {
        onColor: Colors.Primary[50],
        offColor: Colors.Primary[50],
      },
      rightIcon: {
        color: Colors.Primary[50],
      },
      leftIcon: {
        color: Colors.Primary[50],
      },
    },
    secondary: {
      track: {
        onColor: Colors.Secondary[600],
        offColor: Colors.Secondary[300],
        variants: {
          disabled: {
            true: {
              onColor: Colors.Secondary[200],
              offColor: Colors.Secondary[100],
            },
          },
        },
      },
      thumb: {
        onColor: Colors.Secondary[50],
        offColor: Colors.Secondary[50],
      },
      rightIcon: {
        color: Colors.Secondary[50],
      },
      leftIcon: {
        color: Colors.Secondary[50],
      },
    },
    tertiary: {
      track: {
        onColor: Colors.Tertiary[600],
        offColor: Colors.Tertiary[300],
        variants: {
          disabled: {
            true: {
              onColor: Colors.Tertiary[200],
              offColor: Colors.Tertiary[100],
            },
          },
        },
      },
      thumb: {
        onColor: Colors.Tertiary[50],
        offColor: Colors.Tertiary[50],
      },
      rightIcon: {
        color: Colors.Tertiary[50],
      },
      leftIcon: {
        color: Colors.Tertiary[50],
      },
    },
  },
};
