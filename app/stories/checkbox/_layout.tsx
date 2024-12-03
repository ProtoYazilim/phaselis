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
        },
      ]}
    />
  );
}
