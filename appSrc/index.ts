import Constants from "expo-constants";
import CustomDrawer from "./CustomDrawer";
import ColorView from "./ColorView";

export { CustomDrawer, ColorView };

export const getEnvironmentType = () => {
  return Constants.expoConfig?.extra?.stories;
};
