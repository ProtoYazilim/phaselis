import { Colors } from "src/theme";
import { ButtonPropTypes } from "../button/types";

type ButtonPresets = "primary" | "secondary" | "slate";

const buttonPresetList = new Map<string, ButtonPropTypes>([]);

// Secondary
buttonPresetList.set("secondary", {
  style: {
    extraStyleContainer: (disabled: boolean, outline: boolean) => {
      if (disabled && outline) {
        return {
          borderColor: Colors.Secondary[100],
          backgroundColor: "transparent",
        };
      }
    },
    container: {
      borderColor: Colors.Secondary[900],
      backgroundColor: [Colors.Secondary[700], Colors.Secondary[800]] as any,
      variants: {
        outline: {
          true: {
            backgroundColor: "transparent",
            borderColor: Colors.Secondary[500],
          },
        },
        disabled: {
          true: {
            backgroundColor: Colors.Secondary[100],
            borderColor: Colors.Secondary[50],
          },
        },
      },
    },
    text: {
      variants: {
        outline: {
          true: {
            color: Colors.Secondary[500],
          },
        },
        disabled: {
          true: {
            color: Colors.Secondary[400],
          },
        },
      },
    },
  } as any,
});

// Gray
buttonPresetList.set("slate", {
  style: {
    extraStyleContainer: (disabled: boolean, outline: boolean) => {
      if (disabled && outline) {
        return {
          borderColor: Colors.Gray[100],
          backgroundColor: "transparent",
        };
      }
    },
    container: {
      borderColor: Colors.Gray[500],
      backgroundColor: [Colors.Gray[700], Colors.Gray[800]] as any,
      variants: {
        outline: {
          true: {
            backgroundColor: "transparent",
            borderColor: Colors.Gray[900],
          },
        },
        disabled: {
          true: {
            backgroundColor: Colors.Gray[100],
            borderColor: Colors.Gray[100],
          },
        },
      },
    },
    text: {
      variants: {
        outline: {
          true: {
            color: Colors.Gray[900],
          },
        },
        disabled: {
          true: {
            color: Colors.Gray[400],
          },
        },
      },
    },
  } as any,
});

export type { ButtonPresets };
export { buttonPresetList };
