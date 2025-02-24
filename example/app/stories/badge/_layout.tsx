import { useNavigationContainerRef } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { CustomDrawer, getEnvironmentType } from "../../../src";

export default function Layout() {
  const rootNav = useNavigationContainerRef();
  const navigation = useNavigation();
  const environment = getEnvironmentType();

  return (
    <CustomDrawer
      navigation={navigation}
      rootNav={rootNav}
      showRightIcon={!(environment === "dev")}
      componentName="badge"
      drawerScreens={[
        {
          name: "index",
          drawerLabel: "Badge",
          title: "Badge Story",
        },
        {
          name: "badge-with-textfield",
          drawerLabel: "Badge with Textfield",
          title: "Badge with Textfield",
          development: true,
        },
        {
          name: "badge-with-avatar",
          drawerLabel: "Badge With Avatar",
          title: "Badge With Avatar",
          development: true,
        },
      ]}
    />
  );
}
