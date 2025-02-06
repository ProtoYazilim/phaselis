import { Drawer } from "expo-router/drawer";
import { Colors, PopupProvider } from "phaselis";

export default function Layout() {
  return (
    <PopupProvider>
      <Drawer
        screenOptions={{
          headerTintColor: Colors.Primary[600],
        }}
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
      </Drawer>
    </PopupProvider>
  );
}
