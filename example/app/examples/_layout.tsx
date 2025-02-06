import { Drawer } from "expo-router/drawer";
import { Colors } from "phaselis";

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        headerTintColor: Colors.Primary[600],
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
        name="calculator"
        options={{
          drawerLabel: "Calculator",
          title: "Calculator",
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
        name="full-custom-styling"
        options={{
          drawerLabel: "Full Custom Styling",
          title: "Full Custom Styling",
          // drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="generated-style-prop"
        options={{
          drawerLabel: "Generated Style Prop",
          title: "Generated Style Prop",
          // drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="preset-demo"
        options={{
          drawerLabel: "Preset Demo",
          title: "Preset Demo",
          // drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="psudo-style-change"
        options={{
          drawerLabel: "Psudo Style Change",
          title: "Psudo Style Change",
          // drawerItemStyle: { display: "none" },
        }}
      />
    </Drawer>
  );
}
