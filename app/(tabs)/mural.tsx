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
import { getPosts, savePosts } from "../src/services/storage";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors } from "@/constants/theme";

type Post = {
  id: string;
  author: string;
  community: string;
  content: string;
  createdAt: number;
};

export default function MuralGlobal() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [author, setAuthor] = useState("");
  const [community, setCommunity] = useState("");
  const [content, setContent] = useState("");
  const theme = useColorScheme() ?? "light";
  const c = Colors[theme];

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data = await getPosts();
    setPosts((data || []).sort((a: Post, b: Post) => b.createdAt - a.createdAt));
  };

  const publish = async () => {
    if (!content.trim()) return;

    const existing = (await getPosts()) || [];

    const newPost: Post = {
      id: String(Date.now()),
      author: author.trim() || "Anônimo",
      community: community.trim(),
      content: content.trim(),
      createdAt: Date.now(),
    };

    const updated = [newPost, ...existing];
    await savePosts(updated);
    setPosts(updated);
    setContent("");
  };

  const handleDelete = async (id: string) => {
    const existing = (await getPosts()) || [];
    const updated = existing.filter((p: Post) => p.id !== id);
    setPosts(updated);
    await savePosts(updated);
  };

  const confirmDelete = (id: string) => {
    handleDelete(id);
  };

  const formatDate = (timestamp: number) => {
    const d = new Date(timestamp);
    return d.toLocaleString();
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: c.background }]}
      contentContainerStyle={{ paddingBottom: 32 }}
    >
      <Text style={[styles.title, { color: c.text }]}>Mural global</Text>
      <Text style={[styles.subtitle, { color: c.muted }]}>
        Compartilhe aprendizados, dúvidas e oportunidades com pessoas de
        diferentes comunidades, fusos e culturas.
      </Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Seu nome (opcional)"
          placeholderTextColor={c.muted}
          value={author}
          onChangeText={setAuthor}
          style={[
            styles.input,
            { borderColor: c.border, backgroundColor: c.card, color: c.text },
          ]}
        />

        <TextInput
          placeholder="Comunidade / tema (opcional)"
          placeholderTextColor={c.muted}
          value={community}
          onChangeText={setCommunity}
          style={[
            styles.input,
            { borderColor: c.border, backgroundColor: c.card, color: c.text },
          ]}
        />

        <TextInput
          placeholder="O que você quer compartilhar com a rede?"
          placeholderTextColor={c.muted}
          value={content}
          onChangeText={setContent}
          style={[
            styles.input,
            styles.textarea,
            { borderColor: c.border, backgroundColor: c.card, color: c.text },
          ]}
          multiline
        />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: c.tint }]}
          onPress={publish}
        >
          <Text style={styles.buttonText}>Publicar no mural</Text>
        </TouchableOpacity>
      </View>

      {posts.length > 0 && (
        <View style={styles.listSection}>
          <Text style={[styles.listTitle, { color: c.text }]}>
            Últimas publicações
          </Text>

          {posts.map((post) => (
            <View
              key={post.id}
              style={[
                styles.postCard,
                { backgroundColor: c.card, borderColor: c.border },
              ]}
            >
              <View style={styles.postHeader}>
                <View>
                  <Text style={[styles.postAuthor, { color: c.text }]}>
                    {post.author}
                  </Text>
                  {post.community ? (
                    <Text style={[styles.postCommunity, { color: c.muted }]}>
                      {post.community}
                    </Text>
                  ) : null}
                </View>
                <View style={styles.postHeaderRight}>
                  <Text style={[styles.postDate, { color: c.muted }]}>
                    {formatDate(post.createdAt)}
                  </Text>
                  <TouchableOpacity onPress={() => confirmDelete(post.id)}>
                    <Text style={[styles.delete, { color: c.tint }]}>Excluir</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <Text style={[styles.postContent, { color: c.text }]}>
                {post.content}
              </Text>
            </View>
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
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
  },
  textarea: {
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    marginTop: 4,
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
  postCard: {
    borderWidth: 1,
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
    alignItems: "flex-start",
  },
  postHeaderRight: {
    alignItems: "flex-end",
    gap: 4,
  },
  postAuthor: {
    fontSize: 14,
    fontWeight: "600",
  },
  postDate: {
    fontSize: 11,
  },
  delete: {
    fontSize: 12,
    fontWeight: "500",
  },
  postCommunity: {
    fontSize: 12,
    marginTop: 2,
  },
  postContent: {
    fontSize: 14,
    lineHeight: 20,
  },
});
