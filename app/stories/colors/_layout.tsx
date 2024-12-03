import { CustomDrawer } from "../../../appSrc";
import { useNavigationContainerRef } from "expo-router";
import { useNavigation } from "@react-navigation/native";

export default function Layout() {
  const rootNav = useNavigationContainerRef();
  const navigation = useNavigation();

  return (
    <CustomDrawer
      navigation={navigation}
      rootNav={rootNav}
      componentName="colors"
      sceneContainerStyle={{ backgroundColor: "white" }}
      drawerScreens={[
        {
          name: "index",
          drawerLabel: "Primary",
          title: "Primary Colors",
        },
        {
          name: "secondary-colors",
          drawerLabel: "Secondary",
          title: "Secondary Colors",
        },
        {
          name: "tertiary-colors",
          drawerLabel: "Tertiary",
          title: "Tertiary Colors",
        },
        {
          name: "success-colors",
          drawerLabel: "Success",
          title: "Success Colors",
        },
        {
          name: "warning-colors",
          drawerLabel: "Warning",
          title: "Warning Colors",
        },
        {
          name: "danger-colors",
          drawerLabel: "Danger",
          title: "Danger Colors",
        },
        {
          name: "info-colors",
          drawerLabel: "Info",
          title: "Info Colors",
        },
      ]}
    />
  );
}
