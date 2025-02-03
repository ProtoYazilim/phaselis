import type { SlotIconName } from "phaselis";
import type { FC } from "react";
import { Drawer } from "expo-router/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LucideIcon, Colors } from "phaselis";
import { DrawerActions } from "@react-navigation/native";
import { Pressable } from "react-native";

type DrawerScreen = {
  name: string;
  drawerLabel?: string;
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
  sceneContainerStyle?: any;
}> = ({
  navigation,
  rootNav,
  drawerScreens,
  componentName,
  leftIcon = "AlignLeft",
  rightIcon = "SquareChevronLeft",
  headerTintColor = Colors.Primary[600],
  showRightIcon = true,
  sceneContainerStyle,
}) => {
  return (
    <Drawer
      screenOptions={{
        headerTintColor: headerTintColor,
        drawerPosition: "right",
        swipeEnabled: showRightIcon ? true : false,
        sceneStyle: sceneContainerStyle,
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
          drawerScreens.length > 1 && showRightIcon ? (
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
      {drawerScreens.map((screen: DrawerScreen, index) => (
        <Drawer.Screen
          key={`screen.name-${index}`}
          name={screen.name}
          options={{
            drawerLabel: screen.title || screen.drawerLabel,
            title: screen.title,
          }}
        />
      ))}
    </Drawer>
  );
};

export default CustomDrawer;
