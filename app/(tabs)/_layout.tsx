import { Tabs } from "expo-router";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors } from "@/constants/theme";

export default function TabsLayout() {
  const theme = useColorScheme() ?? "light";
  const c = Colors[theme];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0.5,
          borderTopColor: c.border,
          backgroundColor: c.background,
          height: 64,
        },
        tabBarActiveTintColor: c.tint,
        tabBarInactiveTintColor: c.icon,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "500",
        },
      }}
    >
      //<Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="explore" options={{ title: "Minhas skills" }} />
      <Tabs.Screen name="mural" options={{ title: "Mural global" }} />
      <Tabs.Screen name="comunidade" options={{ title: "Comunidades" }} />
    </Tabs>
  );
}
