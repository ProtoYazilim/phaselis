import { CustomDrawer } from "../../../src";
import { useNavigationContainerRef } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { getEnvironmentType } from "../../../src";
import { useColors, type PhaselisColors } from "phaselis";

export default function Layout() {
  const rootNav = useNavigationContainerRef();
  const navigation = useNavigation();
  const environment = getEnvironmentType();
  const Colors = useColors<PhaselisColors>();

  return (
    <CustomDrawer
      navigation={navigation}
      rootNav={rootNav}
      showRightIcon={!(environment === "dev")}
      componentName="colors"
      sceneContainerStyle={{ backgroundColor: Colors.Shades.white }}
      drawerScreens={[
        {
          name: "index",
          drawerLabel: "Color",
          title: "Color",
        },
      ]}
    />
  );
}
