import { View, Text, StyleSheet } from "react-native";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors } from "@/constants/theme";

export default function Home() {
  const theme = useColorScheme() ?? "light";
  const c = Colors[theme];

  return (
    <View style={[styles.container, { backgroundColor: c.background }]}>
      <Text style={[styles.title, { color: c.text }]}>Home Geral</Text>
      <Text style={[styles.subtitle, { color: c.muted }]}>
        Esta tela fica fora das tabs e pode ser usada para testes ou fluxos extras.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 60 },
  title: { fontSize: 28, fontWeight: "700", marginBottom: 8 },
  subtitle: { fontSize: 15 },
});
