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
      componentName="radio"
      drawerScreens={[
        {
          name: "index",
          drawerLabel: "Radio / RadioGroup",
          title: "Radio / RadioGroup Story",
        },
        {
          name: "radio-group-size",
          drawerLabel: "RadioGroup with Size",
          title: "RadioGroup with Size",
        },
      ]}
    />
  );
}
