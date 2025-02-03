import { Drawer } from "expo-router/drawer";
import { Colors, PopupProvider } from "phaselis";

export default function Layout() {
  return (
    <PopupProvider>
      <Drawer
        screenOptions={{
          headerTintColor: Colors.Primary[600],
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Utils",
            title: "Utils",
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
