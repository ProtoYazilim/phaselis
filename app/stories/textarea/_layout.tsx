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
      componentName="textarea"
      drawerScreens={[
        {
          name: "index",
          drawerLabel: "Textarea",
          title: "Textarea Story",
        },
      ]}
    />
  );
}
