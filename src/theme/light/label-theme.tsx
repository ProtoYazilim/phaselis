import { LightColors } from "../LightColors";
export default {
  label: {
    default: {
      container: {},
      text: {
        color: LightColors.Shades.black,
        variants: {
          bold: {
            true: {},
          },
          italic: {
            true: {},
          },
          weight: {
            light: {},
            regular: {},
            medium: {},
            semiBold: {},
            bold: {},
          },
        },
      },
    },
    h1: {
      text: {
        fontSize: 48,
        lineHeight: 48,
      },
    },
    h2: {
      text: {
        fontSize: 34,
        lineHeight: 36,
      },
    },
    h3: {
      text: {
        fontSize: 28,
        lineHeight: 30,
      },
    },
    h4: {
      text: {
        fontSize: 22,
        lineHeight: 24,
      },
    },
    h5: {
      text: {
        fontSize: 18,
        lineHeight: 20,
      },
    },
    h6: {
      text: {
        fontSize: 16,
        lineHeight: 20,
      },
    },
    p: {
      text: {
        fontSize: 16,
        lineHeight: 22,
      },
    },
    quot: {
      text: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: "Times New Roman",
      },
    },
    small: {
      text: {
        fontSize: 14,
        lineHeight: 20,
      },
    },
  },
};
