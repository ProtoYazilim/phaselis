import { Drawer } from "expo-router/drawer";
import { Colors } from "../../src/theme";

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        headerTintColor: Colors.Primary[600],
      }}
    >
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
