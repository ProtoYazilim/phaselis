import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Examples",
          title: "Examples",
        }}
      />
      <Drawer.Screen
        name="calculator"
        options={{
          drawerLabel: "Calculator",
          title: "Calculator",
        }}
      />
    </Drawer>
  );
}
