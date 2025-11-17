import { View, Text, StyleSheet } from "react-native";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors } from "@/constants/theme";

export default function PostItem({ author, content }) {
  const theme = useColorScheme() ?? "light";
  const c = Colors[theme];

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: c.card, borderColor: c.border },
      ]}
    >
      <Text style={[styles.author, { color: c.text }]}>{author}</Text>
      <Text style={[styles.content, { color: c.muted }]}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
    marginVertical: 6,
  },
  author: {
    fontWeight: "600",
    marginBottom: 4,
    fontSize: 14,
  },
  content: {
    fontSize: 13,
  },
});
