import { CustomDrawer } from "../../../src";
import { useNavigationContainerRef } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { getEnvironmentType } from "../../../src";

export default function Layout() {
  const rootNav = useNavigationContainerRef();
  const navigation = useNavigation();
  const environment = getEnvironmentType();

  return (
    <CustomDrawer
      navigation={navigation}
      rootNav={rootNav}
      showRightIcon={!(environment === "dev")}
      componentName="checkbox"
      drawerScreens={[
        {
          name: "index",
          drawerLabel: "Checkbox",
          title: "Checkbox Story",
        },
        {
          name: "checkbox-size",
          drawerLabel: "Checkbox Sizes",
          title: "Checkbox Sizes",
          development: true,
        },
      ]}
    />
  );
}
