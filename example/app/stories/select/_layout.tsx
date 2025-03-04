import { useNavigationContainerRef } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { CustomDrawer } from "../../../src";
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
      componentName="select"
      drawerScreens={[
        {
          name: "index",
          drawerLabel: "Select",
          title: "Select Story",
        },
        {
          name: "select-custom",
          drawerLabel: "Custom Select",
          title: "Custom Select Story",
        },
        {
          name: "form-usage",
          title: "Form Usage",
          development: true,
        },
      ]}
    />
  );
}
