import { Drawer } from "expo-router/drawer";
import {
  LucideIcon,
  PopupProvider,
  useColors,
  useTheme,
  type PhaselisColors,
} from "phaselis";
import { Pressable } from "react-native";

export default function Layout() {
  const Colors = useColors<PhaselisColors>();
  const { themeName, toggleTheme } = useTheme();

  const darkModeIcon = themeName === "dark" ? "Sun" : "Moon";

  return (
    <PopupProvider>
      <Drawer
        screenOptions={{
          headerTintColor: Colors.Primary[600],
          headerStyle: {
            backgroundColor: Colors.Shades.white,
          },
          drawerStyle: {
            backgroundColor: Colors.Shades.white,
          },
          drawerActiveBackgroundColor: Colors.Primary[400],
          drawerActiveTintColor: Colors.Primary[50],
          drawerInactiveTintColor: Colors.Primary[500],
          headerRight: () => (
            <Pressable
              onPress={toggleTheme}
              style={{
                marginHorizontal: 11,
              }}
            >
              <LucideIcon
                name={darkModeIcon} // You can change this to any icon you want
                style={{ color: Colors.Primary[600] }}
                width={24}
                height={24}
              />
            </Pressable>
          ),
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Utils",
            title: "Utils",
            drawerItemStyle: { display: "none" },
          }}
        />
        <Drawer.Screen
          name="popup-hook"
          options={{
            drawerLabel: "usePopup Hook",
            title: "usePopup Hook",
            drawerItemStyle: {
              display: process.env.NODE_ENV === "development" ? "flex" : "none",
            },
          }}
        />
      </Drawer>
    </PopupProvider>
  );
}
