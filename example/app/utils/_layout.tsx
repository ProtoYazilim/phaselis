import { Drawer } from "expo-router/drawer";
import {
  LucideIcon,
  PopupProvider,
  useColors,
  useTheme,
  type PhaselisColors,
} from "phaselis";
import { Pressable } from "react-native";
import CustomDrawerContent from "../../src/CustomDrawerContent";

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
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            elevation: 0,
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
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        initialRouteName="popup-hook"
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
          }}
        />
        <Drawer.Screen
          name="popup-hook2"
          options={{
            drawerLabel: "usePopup Hook 2",
            title: "usePopup Hook 2",
            drawerItemStyle: { display: "none" }, // Hide this screen from the drawer
          }}
        />
      </Drawer>
    </PopupProvider>
  );
}
