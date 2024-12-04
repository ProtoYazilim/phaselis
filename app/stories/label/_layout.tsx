import { useNavigationContainerRef } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { CustomDrawer } from "../../../appSrc";
import { getEnvironmentType } from "../../../appSrc";

export default function Layout() {
  const rootNav = useNavigationContainerRef();
  const navigation = useNavigation();
  const environment = getEnvironmentType();

  return (
    <CustomDrawer
      navigation={navigation}
      rootNav={rootNav}
      showRightIcon={!(environment === "dev")}
      componentName="label"
      drawerScreens={[
        {
          name: "index",
          drawerLabel: "Label",
          title: "Label Story",
        },
      ]}
    />
  );
}
