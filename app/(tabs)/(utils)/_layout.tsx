import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Utils",
          title: "Utils",
        }}
      />
    </Drawer>
  );
}
