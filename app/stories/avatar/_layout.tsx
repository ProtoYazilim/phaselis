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
      componentName="avatar"
      drawerScreens={[
        {
          name: "index",
          drawerLabel: "Avatar",
          title: "Avatar Story",
        },
        {
          name: "avatar-123123",
          drawerLabel: "Avatar Test",
          title: "Avatar Test",
        },
      ]}
    />
  );
}
