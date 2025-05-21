import { Drawer } from "expo-router/drawer";
import { useNavigationContainerRef } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LucideIcon, useColors, useTheme, type PhaselisColors } from "phaselis";
import { Pressable } from "react-native";
import CustomDrawerContent from "../../src/CustomDrawerContent";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  const rootNav = useNavigationContainerRef();
  const Colors = useColors<PhaselisColors>();
  const { themeName, toggleTheme } = useTheme();

  const darkModeIcon = themeName === "dark" ? "Sun" : "Moon";

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerStyle: {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            elevation: 0, // removes shadow if needed
            backgroundColor: Colors.Shades.white,
          },
          headerTintColor: Colors.Primary[600],
          headerStyle: {
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
        screenListeners={{
          focus: () => {
            const routeName = rootNav.getCurrentRoute()?.name;
            if (routeName !== "index" && routeName !== undefined) {
              AsyncStorage.setItem(
                "lastStoryRouteName",
                routeName || "/",
              ).catch(console.error);
              AsyncStorage.setItem("lastStoryRouteBase", "").catch(
                console.error,
              );
            }
          },
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Phaselis",
            title: "Components",
          }}
        />
        <Drawer.Screen
          name="accordion"
          options={{
            drawerLabel: "Accordion",
            title: "Accordion Story",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="avatar"
          options={{
            drawerLabel: "Avatar",
            title: "Avatar Story",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="badge"
          options={{
            drawerLabel: "Badge",
            title: "Badge Story",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="bottom-sheet"
          options={{
            drawerLabel: "Bottom Sheet",
            title: "Bottom Sheet Story",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="button"
          options={{
            drawerLabel: "Button",
            title: "Button Story",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="checkbox"
          options={{
            drawerLabel: "Checkbox",
            title: "Checkbox Story",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="colors"
          options={{
            drawerLabel: "Colors",
            title: "Colors",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="datepicker"
          options={{
            drawerLabel: "Datepicker",
            title: "Datepicker Story",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="image"
          options={{
            drawerLabel: "Image",
            title: "Image Story",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="label"
          options={{
            drawerLabel: "Label",
            title: "Label Story",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="link"
          options={{
            drawerLabel: "Link",
            title: "Link Story",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="list"
          options={{
            drawerLabel: "List",
            title: "List Story",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="popup"
          options={{
            drawerLabel: "Popup",
            title: "Popup Story",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="radio"
          options={{
            drawerLabel: "Radio / RadioGroup",
            title: "Radio Story",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="row-col-block"
          options={{
            drawerLabel: "Row / Col / Block",
            title: "Row / Col / Block Story",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="select"
          options={{
            drawerLabel: "Select",
            title: "Select Story",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="shadow"
          options={{
            drawerLabel: "Shadow",
            title: "Shadow Story",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="slider"
          options={{
            drawerLabel: "Slider",
            title: "Slider Story",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="stepper"
          options={{
            drawerLabel: "Stepper",
            title: "Stepper Story",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="switch"
          options={{
            drawerLabel: "Switch",
            title: "Switch Story",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="tab-view"
          options={{
            drawerLabel: "Tab View",
            title: "Tab View Story",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="textarea"
          options={{
            drawerLabel: "Textarea",
            title: "Textarea Story",
            headerShown: false,
            drawerItemStyle: {
              display: process.env.NODE_ENV === "development" ? "flex" : "none",
            },
          }}
        />
        <Drawer.Screen
          name="textfield"
          options={{
            drawerLabel: "Textfield",
            title: "Textfield Story",
            headerShown: false,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
