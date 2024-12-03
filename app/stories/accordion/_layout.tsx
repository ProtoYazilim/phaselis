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
      componentName="accordion"
      drawerScreens={[
        {
          name: "accordion-story",
          drawerLabel: "Accordion",
          title: "Accordion Story",
        },
        {
          name: "accordion-list-story",
          drawerLabel: "Accordion List",
          title: "Accordion List Story",
        },
      ]}
    />
  );
}
