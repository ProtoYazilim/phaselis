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
      componentName="switch"
      drawerScreens={[
        {
          name: "index",
          drawerLabel: "Switch",
          title: "Switch Story",
        },
      ]}
    />
  );
}
