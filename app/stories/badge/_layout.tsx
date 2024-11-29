import { useNavigationContainerRef } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { CustomDrawer } from "@phaselis/utils";

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
          name: "simple-badge",
          drawerLabel: "Simple Badge",
          title: "Simple Badge",
        },
      ]}
    />
  );
}
