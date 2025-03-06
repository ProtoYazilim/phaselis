import { Drawer } from "expo-router/drawer";
import { LucideIcon, useColors, useTheme, type PhaselisColors } from "phaselis";
import { Pressable } from "react-native";

export default function Layout() {
  const Colors = useColors<PhaselisColors>();
  const { themeName, toggleTheme } = useTheme();

  const darkModeIcon = themeName === "dark" ? "Sun" : "Moon";

  return (
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
      initialRouteName="form-usage"
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Examples",
          title: "Examples",
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="form-usage"
        options={{
          drawerLabel: "Form",
          title: "Form",
        }}
      />
      <Drawer.Screen
        name="shopping-form"
        options={{
          drawerLabel: "Shopping Form",
          title: "Shopping Form",
        }}
      />
      <Drawer.Screen
        name="calculator"
        options={{
          drawerLabel: "Calculator",
          title: "Calculator",
          drawerItemStyle: {
            display: process.env.NODE_ENV === "development" ? "flex" : "none",
          },
        }}
      />
    </Drawer>
  );
}
