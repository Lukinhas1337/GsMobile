import { useEffect, useState } from "react";
import {
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { getPosts, savePosts } from "../src/services/storage";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors } from "@/constants/theme";
import { getCommunities, saveCommunities } from "../src/services/storage";
import CommunityCard from "../src/components/CommunityCard";

type Community = {
  name: string;
  description: string;
};

type Post = {
  id: string;
  author: string;
  community: string;
  content: string;
  createdAt: number;
};

export default function MuralGlobal() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const theme = useColorScheme() ?? "light";
  const c = Colors[theme];
  const [communities, setCommunities] = useState<Community[]>([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data = await getCommunities();
    setCommunities(data || []);
  };

  const save = async () => {
    if (!name.trim()) return;

    const existing = (await getCommunities()) || [];
    const updated = [
      ...existing,
      {
        name: name.trim(),
        description: desc.trim(),
      },
    ];

    await saveCommunities(updated);
    setCommunities(updated);
    setName("");
    setDesc("");
  };

  const handleDelete = async (index: number) => {
    const updated = communities.filter((_, i) => i !== index);
    setCommunities(updated);
    await saveCommunities(updated);
  };

  const confirmDelete = (index: number) => {
    handleDelete(index);
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: c.background }]}
      contentContainerStyle={{ paddingBottom: 32 }}
    >
      <Text style={[styles.title, { color: c.text }]}>Comunidade</Text>
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

      {communities.map((community, index) => (
        <CommunityCard
          key={index}
          name={community.name}
          description={community.description}
          onDelete={() => confirmDelete(index)}
          onPress={() => console.log("funcao onpress")}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 24 },

  textarea: {
    height: 100,
    textAlignVertical: "top",
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
  btn: {
    marginTop: 24,
    padding: 14,
    borderRadius: 999,
    alignItems: "center",
    marginBottom: 24,
  },
  btnText: { textAlign: "center", color: "#fff", fontWeight: "700" },
});
