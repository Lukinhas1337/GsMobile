import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors } from "@/constants/theme";
import SkillProgress from "../src/components/SkillProgress";

export default function SkillDetails() {
  const { id } = useLocalSearchParams();
  const theme = useColorScheme() ?? "light";
  const c = Colors[theme];

  const level = Number(id) % 100 || 42; // mock só para visual

  return (
    <View style={[styles.container, { backgroundColor: c.background }]}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={[styles.back, { color: c.tint }]}>Voltar</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { color: c.text }]}>Skill #{id}</Text>
      <Text style={[styles.text, { color: c.muted }]}>
        Aqui você pode exibir detalhes da skill, trilhas sugeridas e recursos.
      </Text>

      <View style={styles.section}>
        <SkillProgress skill={`Skill #${id}`} level={level} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 24 },
  back: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 12,
  },
  title: { fontSize: 26, fontWeight: "700", marginBottom: 8 },
  text: { fontSize: 14 },
  section: { marginTop: 20 },
});
