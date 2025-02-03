import { useNavigationContainerRef } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { CustomDrawer } from "../../../src";
import { getEnvironmentType } from "../../../src";

export default function Layout() {
  const rootNav = useNavigationContainerRef();
  const navigation = useNavigation();
  const environment = getEnvironmentType();

  return (
    <CustomDrawer
      navigation={navigation}
      rootNav={rootNav}
      showRightIcon={!(environment === "dev")}
      componentName="list"
      drawerScreens={[
        {
          name: "index",
          drawerLabel: "List",
          title: "List Story",
        },
      ]}
    />
  );
}
