import type { PhaselisColors, SlotIconName } from "phaselis";
import { useMemo, type FC } from "react";
import { Drawer } from "expo-router/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LucideIcon, useColors, useTheme } from "phaselis";
import { DrawerActions } from "@react-navigation/native";
import { Pressable } from "react-native";
import CustomDrawerContent from "./CustomDrawerContent";

type DrawerScreen = {
  name: string;
  drawerLabel?: string;
  title: string;
  development?: boolean;
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
  headerTintColor,
  showRightIcon = true,
  sceneContainerStyle,
}) => {
  const Colors = useColors<PhaselisColors>();
  const { themeName, toggleTheme } = useTheme();

  const headerTintColorHandler = headerTintColor || Colors.Primary[600];
  const darkModeIcon = themeName === "dark" ? "Sun" : "Moon";

  const draverAvailableScreens = useMemo(() => {
    return drawerScreens.filter((item) => {
      if (process.env.NODE_ENV === "development") {
        return true;
      } else if (process.env.NODE_ENV === "production") {
        return !item.development;
      }
    });
  }, [drawerScreens]);

  return (
    <Drawer
      screenOptions={{
        headerTintColor: headerTintColorHandler,
        drawerPosition: "right",
        swipeEnabled: showRightIcon ? true : false,
        sceneStyle: sceneContainerStyle,
        headerStyle: {
          backgroundColor: Colors.Shades.white,
        },
        drawerStyle: {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          elevation: 0,
          backgroundColor: Colors.Shades.white,
        },
        drawerActiveBackgroundColor: Colors.Primary[400],
        drawerActiveTintColor: Colors.Primary[50],
        drawerInactiveTintColor: Colors.Primary[500],
        headerLeft: () => (
          <Pressable
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            style={{
              marginHorizontal: 11,
            }}
          >
            <LucideIcon
              name={leftIcon}
              style={{ color: headerTintColorHandler }}
              width={24}
              height={24}
            />
          </Pressable>
        ),
        headerRight: () => (
          <>
            <Pressable
              onPress={toggleTheme}
              style={{
                marginHorizontal: 11,
              }}
            >
              <LucideIcon
                name={darkModeIcon} // You can change this to any icon you want
                style={{ color: headerTintColorHandler }}
                width={24}
                height={24}
              />
            </Pressable>
            {draverAvailableScreens?.length > 1 && showRightIcon ? (
              <Pressable
                onPress={() => rootNav.dispatch(DrawerActions.toggleDrawer())}
                style={{
                  marginHorizontal: 11,
                }}
              >
                <LucideIcon
                  name={rightIcon}
                  style={{ color: headerTintColorHandler }}
                  width={24}
                  height={24}
                />
              </Pressable>
            ) : null}
          </>
        ),
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
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      {drawerScreens.map((screen: DrawerScreen, index) => (
        <Drawer.Screen
          key={`screen.name-${index}`}
          name={screen.name}
          options={{
            swipeEnabled: draverAvailableScreens.length > 1,
            drawerLabel: screen.title || screen.drawerLabel,
            title: screen.title,
            drawerItemStyle: {
              display: draverAvailableScreens.includes(screen)
                ? "flex"
                : "none",
            },
          }}
        />
      ))}
    </Drawer>
  );
};

export default CustomDrawer;
