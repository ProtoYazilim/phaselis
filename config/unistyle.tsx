import { UnistylesRegistry } from "react-native-unistyles";
import { darkTheme, lightTheme } from "@phaselis/theme";
import { PhaselisPlugin } from "./PhaselisPlugin";

type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes({
  light: lightTheme,
  dark: darkTheme,
}).addConfig({
  adaptiveThemes: true,
  initialTheme: "light",
  plugins: [PhaselisPlugin],
});
