import { LightColors } from "../LightColors";
import { Spacings } from "../spacings";
import type { PhaselisComponentTheme } from "../types";

export default {
  avatar: {
    default: {
      container: {
        backgroundColor: LightColors.Primary[100],
        variants: {
          size: {
            xs: {
              height: 32,
              width: 32,
              borderRadius: 16,
            },
            sm: {
              height: 48,
              width: 48,
              borderRadius: 24,
            },
            md: {
              height: 64,
              width: 64,
              borderRadius: 32,
            },
            lg: {
              height: 128,
              width: 128,
              borderRadius: 64,
            },
            xl: {
              height: 256,
              width: 256,
              borderRadius: 128,
            },
          },
        },
      },
      image: {
        variants: {
          size: {
            xs: {
              height: 32,
              width: 32,
              borderRadius: 16,
            },
            sm: {
              height: 48,
              width: 48,
              borderRadius: 24,
            },
            md: {
              height: 64,
              width: 64,
              borderRadius: 32,
            },
            lg: {
              height: 128,
              width: 128,
              borderRadius: 64,
            },
            xl: {
              height: 256,
              width: 256,
              borderRadius: 128,
            },
          },
        },
      },
      text: {
        color: LightColors.Primary[600],
        variants: {
          size: {
            xs: {
              fontSize: 16,
            },
            sm: {
              fontSize: 24,
            },
            md: {
              fontSize: 32,
            },
            lg: {
              fontSize: 64,
            },
            xl: {
              fontSize: 128,
            },
          },
        },
      },
      icon: {
        color: LightColors.Primary[600],
      },
    },
    rounded: {
      container: {
        variants: {
          size: {
            xs: {
              borderRadius: Spacings.XS,
            },
            sm: {
              borderRadius: Spacings.SM,
            },
            md: {
              borderRadius: Spacings.MD,
            },
            lg: {
              borderRadius: Spacings.LG,
            },
            xl: {
              borderRadius: Spacings.XL,
            },
          },
        },
      },
      image: {
        variants: {
          size: {
            xs: {
              borderRadius: Spacings.XS,
            },
            sm: {
              borderRadius: Spacings.SM,
            },
            md: {
              borderRadius: Spacings.MD,
            },
            lg: {
              borderRadius: Spacings.LG,
            },
            xl: {
              borderRadius: Spacings.XL,
            },
          },
        },
      },
    },
    square: {
      container: {
        variants: {
          size: {
            xs: {
              borderRadius: 0,
            },
            sm: {
              borderRadius: 0,
            },
            md: {
              borderRadius: 0,
            },
            lg: {
              borderRadius: 0,
            },
            xl: {
              borderRadius: 0,
            },
          },
        },
      },
      image: {
        variants: {
          size: {
            xs: {
              borderRadius: 0,
            },
            sm: {
              borderRadius: 0,
            },
            md: {
              borderRadius: 0,
            },
            lg: {
              borderRadius: 0,
            },
            xl: {
              borderRadius: 0,
            },
          },
        },
      },
    },
  },
} as PhaselisComponentTheme;
