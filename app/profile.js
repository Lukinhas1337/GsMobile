import { View, Text, StyleSheet, Image } from "react-native";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors } from "@/constants/theme";

export default function Profile() {
  const theme = useColorScheme() ?? "light";
  const c = Colors[theme];

  return (
    <View style={[styles.container, { backgroundColor: c.background }]}>
      <Image
        source={{ uri: "https://i.pravatar.cc/150" }}
        style={styles.avatar}
      />

      <Text style={[styles.name, { color: c.text }]}>Usuário</Text>
      <Text style={[styles.role, { color: c.muted }]}>Aprendiz do Futuro</Text>

      <Text style={[styles.bio, { color: c.muted }]}>
        Explorando novas formas de aprendizado global, personalizado e colaborativo.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, alignItems: "center", paddingTop: 80 },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 4,
  },
  role: {
    fontSize: 14,
    marginBottom: 12,
  },
  bio: {
    fontSize: 13,
    lineHeight: 20,
    textAlign: "center",
    maxWidth: 260,
  },
});
