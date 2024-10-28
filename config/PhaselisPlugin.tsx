import type { UnistylesPlugin } from "react-native-unistyles";

const PhaselisPlugin: UnistylesPlugin = {
  name: "PhaselisPlugin",
  onParsedStyle: (key, styles, runtime) => {
    // console.log("onParsedStyle", key, styles, runtime);
    return styles;
  },
};

export { PhaselisPlugin };
