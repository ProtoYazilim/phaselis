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
      componentName="row-col-block"
      drawerScreens={[
        {
          name: "index",
          drawerLabel: "Row / Col / Block",
          title: "Row / Col / Block Story",
        },
      ]}
    />
  );
}
