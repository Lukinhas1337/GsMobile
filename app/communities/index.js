import { useEffect, useState } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { getCommunities } from "../src/services/storage";
import CommunityCard from "../src/components/CommunityCard";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors } from "@/constants/theme";

export default function CommunitiesPage() {
  const [communities, setCommunities] = useState([]);
  const theme = useColorScheme() ?? "light";
  const c = Colors[theme];

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data = await getCommunities();
    setCommunities(data || []);
  };
  const deleteCommunities = async (name) => {
    console.log("Deleting community:", name);
    const filtered = communities.filter((c) => c.name !== name);
    setCommunities(filtered);
    await removeCommunities(filtered);
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: c.background }]}
      contentContainerStyle={{ paddingBottom: 24 }}
    >
      <Text style={[styles.title, { color: c.text }]}>Comunidades</Text>
      <Text style={[styles.subtitle, { color: c.muted }]}>
        Participe de grupos focados em habilidades e áreas do futuro.
      </Text>

      {communities.map((community, index) => (
        <CommunityCard
          key={index}
          name={community.name}
          description={community.description}
          onDelete={() => deleteCommunities(community.name)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 24 },
  title: { fontSize: 24, fontWeight: "700", marginBottom: 6 },
  subtitle: { fontSize: 14, marginBottom: 16 },
});
