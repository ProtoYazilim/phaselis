import { Drawer } from "expo-router/drawer";
import { LucideIcon, useColors, useTheme, type PhaselisColors } from "phaselis";
import { Pressable } from "react-native";
import CustomDrawerContent from "../../src/CustomDrawerContent";

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
              name={darkModeIcon}
              style={{ color: Colors.Primary[600] }}
              width={24}
              height={24}
            />
          </Pressable>
        ),
      }}
      initialRouteName="form-usage"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
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
        name="credit-card-payment"
        options={{
          drawerLabel: "Credit Card Payment",
          title: "Credit Card Payment",
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
        name="healthcare"
        options={{
          drawerLabel: "Healthcare",
          title: "Healthcare",
        }}
      />
      <Drawer.Screen
        name="pin-code"
        options={{
          drawerLabel: "Pin Code",
          title: "Pin Code",
        }}
      />
      <Drawer.Screen
        name="pin-numbers"
        options={{
          drawerLabel: "Pin Numbers",
          title: "Pin Numbers",
        }}
      />
      <Drawer.Screen
        name="shopping-cart"
        options={{
          drawerLabel: "Shopping Cart",
          title: "Shopping Cart",
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
        name="travel"
        options={{
          drawerLabel: "Travel",
          title: "Travel",
        }}
      />
      <Drawer.Screen
        name="doctors-screen"
        options={{
          drawerLabel: "Healthcare",
          title: "Healthcare",
          drawerItemStyle: {
            display: "none",
          },
        }}
      />
      <Drawer.Screen
        name="appointment-screen"
        options={{
          drawerLabel: "Healthcare",
          title: "Healthcare",
          drawerItemStyle: {
            display: "none",
          },
        }}
      />
    </Drawer>
  );
}
