import { useNavigationContainerRef } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { CustomDrawer } from "../../../appSrc";

export default function Layout() {
  const rootNav = useNavigationContainerRef();
  const navigation = useNavigation();

  return (
    <CustomDrawer
      navigation={navigation}
      rootNav={rootNav}
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
      ]}
    />
  );
}
