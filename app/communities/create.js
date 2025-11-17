import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { getCommunities, saveCommunities } from "../src/services/storage";
import { router } from "expo-router";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors } from "@/constants/theme";

export default function CreateCommunity() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const theme = useColorScheme() ?? "light";
  const c = Colors[theme];

  const save = async () => {
    if (!name.trim()) return;

    const existing = (await getCommunities()) || [];

    const newItem = {
      name: name.trim(),
      description: desc.trim(),
      createdAt: Date.now(),
    };

    await saveCommunities([...existing, newItem]);

  };

  const goBack = () => {
    router.back();
  };

  return (
    <View style={[styles.container, { backgroundColor: c.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Text style={[styles.back, { color: c.tint }]}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.title, { color: c.text }]}>
        Nova comunidade
      </Text>
      <Text style={[styles.subtitle, { color: c.muted }]}>
        Crie uma comunidade de aprendizagem colaborativa e global para
        compartilhar conhecimento, desafios e oportunidades.
      </Text>

      <TextInput
        placeholder="Nome da comunidade"
        placeholderTextColor={c.muted}
        value={name}
        onChangeText={setName}
        style={[
          styles.input,
          { borderColor: c.border, color: c.text, backgroundColor: c.card },
        ]}
      />

      <TextInput
        placeholder="Descrição, foco, idioma, fuso horário..."
        placeholderTextColor={c.muted}
        value={desc}
        onChangeText={setDesc}
        style={[
          styles.input,
          styles.textarea,
          { borderColor: c.border, color: c.text, backgroundColor: c.card },
        ]}
        multiline
      />

      <TouchableOpacity
        style={[styles.btn, { backgroundColor: c.tint }]}
        onPress={save}
      >
        <Text style={styles.btnText}>Salvar comunidade</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 24 },
  header: {
    marginBottom: 8,
  },
  back: {
    fontSize: 14,
    fontWeight: "500",
  },
  title: { fontSize: 24, fontWeight: "700", marginBottom: 6 },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    fontSize: 14,
  },
  textarea: { height: 120, textAlignVertical: "top" },
  btn: {
    marginTop: 24,
    padding: 14,
    borderRadius: 999,
    alignItems: "center",
  },
  btnText: { textAlign: "center", color: "#fff", fontWeight: "700" },
});
