import { useNavigationContainerRef } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { CustomDrawer, getEnvironmentType } from "@appSrc";

export default function Layout() {
  const rootNav = useNavigationContainerRef();
  const navigation = useNavigation();

  const environment = getEnvironmentType();

  return (
    <CustomDrawer
      navigation={navigation}
      rootNav={rootNav}
      showRightIcon={!(environment === "dev")}
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
