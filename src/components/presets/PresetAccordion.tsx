import { Colors } from "src/theme";

type AccordionPresets = "primary" | "secondary" | "slate";

const accordionPresetList = new Map<string, any>([]);

// Secondary
accordionPresetList.set("secondary", {
  style: {
    container: {
      borderColor: Colors.Primary[400],
      variants: {
        disabled: {
          true: {
            borderColor: Colors.Gray[500],
            backgroundColor: Colors.Gray[100],
          },
        },
      },
    },
    element: {},
  } as any,
});

export type { AccordionPresets };
export { accordionPresetList };
