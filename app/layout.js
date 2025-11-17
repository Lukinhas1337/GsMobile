import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors } from "@/constants/theme";

export default function RootLayout() {
  const theme = useColorScheme() ?? "light";
  const isDark = theme === "dark";
  const themeColors = Colors[theme];

  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: themeColors.background },
          headerShadowVisible: false,
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: "600",
            color: themeColors.text,
          },
          headerTintColor: themeColors.text,
        }}
      />
      <StatusBar style={isDark ? "light" : "dark"} />
    </>
  );
}
