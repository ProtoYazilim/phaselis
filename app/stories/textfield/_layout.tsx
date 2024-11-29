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
      componentName="textfield"
      drawerScreens={[
        {
          name: "index",
          drawerLabel: "Textfield",
          title: "Textfield Story",
        },
        {
          name: "masked-textfield-story",
          drawerLabel: "Masked Textfield",
          title: "Masked Textfield Story",
        },
      ]}
    />
  );
}
