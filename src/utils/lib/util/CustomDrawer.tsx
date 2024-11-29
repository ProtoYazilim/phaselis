import { Drawer } from "expo-router/drawer";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Colors } from "@phaselis/theme";
import { LucideIcon } from "@phaselis/components";
import { DrawerActions } from "@react-navigation/native";
import { Pressable } from "react-native";
import { FC } from "react";
import { SlotIconName } from "@phaselis/types/base";

type DrawerScreen = {
  name: string;
  drawerLabel: string;
  title: string;
};

const CustomDrawer: FC<{
  navigation: any;
  rootNav: any;
  drawerScreens: DrawerScreen[];
  componentName: string;
  leftIcon?: SlotIconName;
  rightIcon?: SlotIconName;
  headerTintColor?: string;
  showRightIcon?: boolean;
}> = ({
  navigation,
  rootNav,
  drawerScreens,
  componentName,
  leftIcon = "SquareChevronRight",
  rightIcon = "Puzzle",
  headerTintColor = Colors.Primary[500],
  showRightIcon = true,
}) => {
  return (
    <Drawer
      screenOptions={{
        headerTintColor: headerTintColor,
        drawerPosition: "right",
        swipeEnabled: showRightIcon ? true : false,
        headerLeft: () => (
          <Pressable
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            style={{
              marginHorizontal: 11,
            }}
          >
            <LucideIcon
              name={leftIcon}
              style={{ color: headerTintColor }}
              width={24}
              height={24}
            />
          </Pressable>
        ),
        headerRight: () =>
          showRightIcon ? (
            <Pressable
              onPress={() => rootNav.dispatch(DrawerActions.toggleDrawer())}
              style={{
                marginHorizontal: 11,
              }}
            >
              <LucideIcon
                name={rightIcon}
                style={{ color: headerTintColor }}
                width={24}
                height={24}
              />
            </Pressable>
          ) : null,
      }}
      screenListeners={{
        focus: () => {
          const routeName = rootNav.getCurrentRoute()?.name;
          console.log("routeName", routeName);
          if (routeName !== "index" && routeName !== undefined) {
            AsyncStorage.setItem("lastStoryRouteName", routeName || "/").catch(
              console.error,
            );
            AsyncStorage.setItem("lastStoryRouteBase", componentName).catch(
              console.error,
            );
          } else if (routeName === "index") {
            AsyncStorage.setItem("lastStoryRouteName", componentName).catch(
              console.error,
            );
            AsyncStorage.setItem("lastStoryRouteBase", "").catch(console.error);
          }
        },
      }}
    >
      {drawerScreens.map((screen: DrawerScreen) => (
        <Drawer.Screen
          name={screen.name}
          options={{
            drawerLabel: screen.drawerLabel,
            title: screen.title,
          }}
        />
      ))}
    </Drawer>
  );
};

export default CustomDrawer;
