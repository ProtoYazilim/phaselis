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
import * as Sentry from "@sentry/react-native";
import { Appearance } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

const navigationIntegration = Sentry.reactNavigationIntegration({
  enableTimeToInitialDisplay: true,
});

Sentry.init({
  dsn: "https://d4ae84ce50a536e6d21dbfc0c51b5311@o4508874801807360.ingest.de.sentry.io/4508874810327120",
  debug: true,
  tracesSampleRate: 1.0,
  integrations: [navigationIntegration],
  enableNativeFramesTracking: true,
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
