import { useColors } from "@phaselis/components/provider/lib/hooks";
import { PhaselisColors } from "@phaselis/theme";
import { Tabs } from "expo-router";
import {
  LucideAirplay,
  LucideComponent,
  DraftingCompass,
} from "lucide-react-native";

export default function TabLayout() {
  const COLORS = useColors<PhaselisColors>();
  return (
    <Tabs
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: COLORS.Primary[500],
        tabBarInactiveTintColor: COLORS.Gray[600],
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="(stories)"
        options={{
          title: "Components",
          tabBarIcon: ({ color }) => <LucideComponent color={color} />,
        }}
      />
      <Tabs.Screen
        name="(examples)"
        options={{
          title: "Examples",
          tabBarIcon: ({ color }) => <LucideAirplay color={color} />,
        }}
      />
      <Tabs.Screen
        name="(utils)"
        options={{
          title: "Utils",
          tabBarIcon: ({ color }) => <DraftingCompass color={color} />,
        }}
      />
    </Tabs>
  );
}
