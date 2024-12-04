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
      componentName="button"
      drawerScreens={[
        {
          name: "index",
          drawerLabel: "Button",
          title: "Button Story",
        },
        {
          name: "button-sizes",
          drawerLabel: "Button Sizes",
          title: "Button Sizes",
        },
        {
          name: "custom-button",
          drawerLabel: "Custom Button",
          title: "Custom Button",
        },
        {
          name: "button-disabled",
          drawerLabel: "Button Disabled",
          title: "Button Disabled",
        },
        {
          name: "button-outline",
          drawerLabel: "Button Outline",
          title: "Button Outline",
        },
      ]}
    />
  );
}
