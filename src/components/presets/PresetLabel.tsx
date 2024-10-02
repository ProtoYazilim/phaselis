import { LabelProps } from "../label/types";

type LabelPresets =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "small"
  | "bkt_demo";

const labelPresetList = new Map<string, LabelProps>([]);

// Header 1
labelPresetList.set("h1", {
  style: {
    text: {
      fontFamily: "Raleway",
      fontSize: 48,
      fontStyle: "normal",
      fontWeight: 400,
    },
  },
});

// Header 2
labelPresetList.set("h2", {
  style: {
    text: {
      fontFamily: "Poppins",
      fontSize: 32,
      fontStyle: "normal",
      fontWeight: 400,
    },
  },
});

// Header 3
labelPresetList.set("h3", {
  style: {
    text: {
      fontFamily: "Raleway",
      fontSize: 24,
      fontStyle: "normal",
      fontWeight: 400,
    },
  },
});

// Header 4
labelPresetList.set("h4", {
  style: {
    text: {
      fontFamily: "Poppins",
      fontSize: 20,
      fontStyle: "normal",
      fontWeight: 400,
    },
  },
});

// Header 5
labelPresetList.set("h5", {
  style: {
    text: {
      fontFamily: "Poppins",
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: 600,
    },
  },
});

// Header 6
labelPresetList.set("h6", {
  style: {
    text: {
      fontFamily: "Poppins",
      fontSize: 14,
      fontStyle: "normal",
      fontWeight: 600,
    },
  },
});

// Paragraph
labelPresetList.set("p", {
  style: {
    text: {
      fontFamily: "Poppins",
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: 400,
    },
  },
});

// Small
labelPresetList.set("small", {
  style: {
    text: {
      fontFamily: "Poppins",
      fontSize: 14,
      fontStyle: "normal",
      fontWeight: 400,
    },
  },
});

labelPresetList.set("bkt_demo", {
  style: {
    text: {
      fontFamily: "Helvetica",
      fontSize: 22,
      fontWeight: "bold",
      color: "#eb2128",
    },
  },
});
export type { LabelPresets };
export { labelPresetList };
