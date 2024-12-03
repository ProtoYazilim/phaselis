import { useNavigationContainerRef } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { CustomDrawer } from "../../../appSrc";
// import { CustomDrawer } from "@appSrc";

export default function Layout() {
  const rootNav = useNavigationContainerRef();
  const navigation = useNavigation();

  return (
    <CustomDrawer
      navigation={navigation}
      rootNav={rootNav}
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
        },
        {
          name: "badge-with-avatar",
          drawerLabel: "Badge With Avatar",
          title: "Badge With Avatar",
        },
      ]}
    />
  );
}
