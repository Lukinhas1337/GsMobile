import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors } from "@/constants/theme";


export default function CommunityCard({ name, description, onPress, onDelete }) {
  const theme = useColorScheme() ?? "light";
  const c = Colors[theme];
  return (
    <TouchableOpacity
      style={[
        styles.card,
        { backgroundColor: c.card, borderColor: c.border },
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: c.text }]}>{name}</Text>
        {onDelete && (
          <TouchableOpacity onPress={onDelete} >
            <Text style={[styles.delete, { color: c.tint }]}>Excluir</Text>
          </TouchableOpacity>
        )}
      </View>
      <Text style={[styles.desc, { color: c.muted }]}>{description}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
    marginRight: 8,
  },
  delete: {
    fontSize: 12,
    fontWeight: "500",
  },
  desc: {
    fontSize: 13,
    lineHeight: 18,
  },
});
