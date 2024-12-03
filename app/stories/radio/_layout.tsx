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
