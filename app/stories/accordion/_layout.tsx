import { useNavigationContainerRef } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { CustomDrawer } from "appSrc";
import { getEnvironmentType } from "appSrc";

export default function Layout() {
  const rootNav = useNavigationContainerRef();
  const navigation = useNavigation();

  const environment = getEnvironmentType();

  return (
    <CustomDrawer
      navigation={navigation}
      rootNav={rootNav}
      showRightIcon={!(environment === "dev")}
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
