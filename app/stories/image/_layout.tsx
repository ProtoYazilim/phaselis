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
      componentName="image"
      drawerScreens={[
        {
          name: "index",
          drawerLabel: "Image",
          title: "Image Story",
        },
        {
          name: "image-with-background",
          drawerLabel: "Image with Background",
          title: "Image with Background",
        },
      ]}
    />
  );
}
