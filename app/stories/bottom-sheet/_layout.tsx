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
      componentName="bottom-sheet"
      showRightIcon={false}
      drawerScreens={[
        {
          name: "index",
          drawerLabel: "Bottom Sheet",
          title: "Bottom Sheet Story",
        },
      ]}
    />
  );
}
