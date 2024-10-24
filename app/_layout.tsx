import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../config/unistyle";
import { Provider as FrameWorkProvider } from "@phaselis/components";
import { lightTheme } from "@phaselis/theme/lightTheme";
import { Stack } from "expo-router";
import { LogBox } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.

LogBox.ignoreLogs(["Require cycles are allowed"]);

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  // const colorScheme = useColorScheme()
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

  return (
    <FrameWorkProvider theme={lightTheme}>
      <ThemeProvider value={DefaultTheme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </GestureHandlerRootView>
      </ThemeProvider>
    </FrameWorkProvider>
  );
}
