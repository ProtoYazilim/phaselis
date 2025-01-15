import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../config/unistyle";
import {
  Provider as FrameWorkProvider,
  lightTheme,
  Colors,
  LucideIcon,
} from "phaselis";
import { Tabs } from "expo-router";
import { LogBox } from "react-native";
import { getEnvironmentType } from "../appSrc";

// Prevent the splash screen from auto-hiding before asset loading is complete.

LogBox.ignoreLogs(["Require cycles are allowed"]);

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: "/stories",
};
export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const environment = getEnvironmentType();

  DefaultTheme.colors.background = "white";

  return (
    <FrameWorkProvider theme={lightTheme}>
      <ThemeProvider value={DefaultTheme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
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
                // fontSize: 16,
                fontWeight: 700,
              },
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
                      color: focused
                        ? Colors.Primary[800]
                        : Colors.Primary[300],
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
                      color: focused
                        ? Colors.Primary[800]
                        : Colors.Primary[300],
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
                      color: focused
                        ? Colors.Primary[800]
                        : Colors.Primary[300],
                    }}
                  />
                ),
              }}
            />
            <Tabs.Screen name="index" redirect={true} />
          </Tabs>
        </GestureHandlerRootView>
      </ThemeProvider>
    </FrameWorkProvider>
  );
}
