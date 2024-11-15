import { Drawer } from "expo-router/drawer";
import { PopupProvider } from "../../src/hooks/usePopup";

export default function Layout() {
  return (
    <PopupProvider>
      <Drawer>
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
