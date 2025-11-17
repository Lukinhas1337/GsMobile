import { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import SkillProgress from "../src/components/SkillProgress";
import { getSkills, saveSkills } from "../src/services/storage";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors } from "@/constants/theme";

type Skill = {
  name: string;
  level: number;
};

export default function Explore() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [name, setName] = useState("");
  const [level, setLevel] = useState("50");
  const theme = useColorScheme() ?? "light";
  const c = Colors[theme];

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data = await getSkills();
    setSkills(data || []);
  };

  const addSkill = async () => {
    if (!name.trim()) return;

    const levelNumber = Math.min(100, Math.max(0, Number(level) || 0));

    const existing = (await getSkills()) || [];
    const updated = [
      ...existing,
      {
        name: name.trim(),
        level: levelNumber,
      },
    ];

    await saveSkills(updated);
    setSkills(updated);
    setName("");
    setLevel("50");
  };

  const handleDelete = async (index: number) => {
    const updated = skills.filter((_, i) => i !== index);
    setSkills(updated);
    await saveSkills(updated);
  };

  const confirmDelete = (index: number) => {
    handleDelete(index);
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: c.background }]}
      contentContainerStyle={{ paddingBottom: 32 }}
    >
      <Text style={[styles.title, { color: c.text }]}>
        Mapeie suas skills
      </Text>

      <Text style={[styles.subtitle, { color: c.muted }]}>
        Registre as competências que você está desenvolvendo para o futuro
        do trabalho. Isso te ajuda a acompanhar sua jornada de reskilling.
      </Text>

      <View style={styles.form}>
        <Text style={[styles.label, { color: c.muted }]}>
          Nome da skill
        </Text>
        <TextInput
          placeholder="Ex: Comunicação intercultural, IA generativa..."
          placeholderTextColor={c.muted}
          value={name}
          onChangeText={setName}
          style={[
            styles.input,
            { borderColor: c.border, color: c.text, backgroundColor: c.card },
          ]}
        />

        <Text style={[styles.label, { color: c.muted }]}>
          Nível atual (0 a 100)
        </Text>
        <TextInput
          placeholder="50"
          placeholderTextColor={c.muted}
          value={level}
          onChangeText={setLevel}
          keyboardType="numeric"
          style={[
            styles.input,
            { borderColor: c.border, color: c.text, backgroundColor: c.card },
          ]}
        />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: c.tint }]}
          onPress={addSkill}
        >
          <Text style={styles.buttonText}>Adicionar skill</Text>
        </TouchableOpacity>
      </View>

      {skills.length > 0 && (
        <View style={styles.listSection}>
          <Text style={[styles.listTitle, { color: c.text }]}>
            Minhas skills mapeadas
          </Text>

          {skills.map((s, i) => (
            <SkillProgress
              key={i}
              skill={s.name}
              level={s.level}
              onDelete={() => confirmDelete(i)}
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 24 },
  title: { fontSize: 24, fontWeight: "700", marginBottom: 6 },
  subtitle: { fontSize: 14, marginBottom: 16 },
  form: {
    gap: 10,
    marginBottom: 24,
  },
  label: {
    fontSize: 13,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
  },
  button: {
    marginTop: 8,
    paddingVertical: 12,
    borderRadius: 999,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 14,
  },
  listSection: {
    marginTop: 8,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
});
