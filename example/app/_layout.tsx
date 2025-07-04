import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../config/unistyle";
import {
  Provider as FrameWorkProvider,
  LucideIcon,
  useColors,
  type PhaselisColors,
} from "phaselis";
import { Tabs } from "expo-router";
import { getEnvironmentType } from "../src";
import { appLightTheme, appDarkTheme } from "../src/extendedTheme";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { Appearance } from "react-native";
import { PlatformPressable } from "@react-navigation/elements";
import "react-native-gesture-handler";
SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export const unstable_settings = {
  initialRouteName: "/stories",
};

const TabsNavigator = () => {
  const environment = getEnvironmentType();
  const Colors = useColors<PhaselisColors>();

  DefaultTheme.colors.background = Colors.Shades.white;

  return (
    <ThemeProvider value={DefaultTheme}>
      <Tabs
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: Colors.Primary[800],
          tabBarInactiveTintColor: Colors.Primary[300],
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Colors.Primary[50],
            display: "flex",
          },
          tabBarLabelStyle: {
            fontWeight: 700,
          },
          tabBarButton: (props) => (
            <PlatformPressable
              {...props}
              android_disableSound={true}
              android_ripple={{ color: "transparent" }}
            />
          ),
        }}
        initialRouteName="stories"
      >
        <Tabs.Screen
          name="stories"
          redirect={environment === "production"}
          options={{
            title: "Stories",
            tabBarIcon: ({ focused }) => (
              <LucideIcon
                name="BookImage"
                // size={"lg"}
                style={{
                  color: focused ? Colors.Primary[800] : Colors.Primary[300],
                }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="examples"
          options={{
            title: "Examples",
            tabBarIcon: ({ focused }) => (
              <LucideIcon
                name="TabletSmartphone"
                // size={"lg"}
                style={{
                  color: focused ? Colors.Primary[800] : Colors.Primary[300],
                }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="utils"
          options={{
            title: "Utils",
            tabBarIcon: ({ focused }) => (
              <LucideIcon
                name="Webhook"
                // size={"lg"}
                style={{
                  color: focused ? Colors.Primary[800] : Colors.Primary[300],
                }}
              />
            ),
          }}
        />
        <Tabs.Screen name="index" redirect={true} />
      </Tabs>
    </ThemeProvider>
  );
};

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <KeyboardProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <FrameWorkProvider
          initialThemeName={Appearance.getColorScheme() || "light"}
          themes={{ light: appLightTheme, dark: appDarkTheme }}
        >
          <TabsNavigator />
        </FrameWorkProvider>
      </GestureHandlerRootView>
    </KeyboardProvider>
  );
}
