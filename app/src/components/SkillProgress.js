import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors } from "@/constants/theme";

type Props = {
  skill: string;
  level: number;
  onDelete?: () => void;
};

export default function SkillProgress({ skill, level, onDelete }: Props) {
  const theme = useColorScheme() ?? "light";
  const c = Colors[theme];

  return (
    <View style={[styles.box, { borderColor: c.border }]}>
      <View style={styles.header}>
        <Text style={[styles.skill, { color: c.text }]}>{skill}</Text>
        <View style={styles.headerRight}>
          <Text style={[styles.level, { color: c.muted }]}>{level}%</Text>
          {onDelete && (
            <TouchableOpacity onPress={onDelete}>
              <Text style={[styles.delete, { color: c.tint }]}>Excluir</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={[styles.barBackground, { backgroundColor: c.border }]}>
        <View
          style={[
            styles.barFill,
            { width: `${level}%`, backgroundColor: c.tint },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    paddingVertical: 12,
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 10,
  },
  header: {
    paddingHorizontal: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  skill: {
    fontSize: 14,
    fontWeight: "500",
  },
  level: {
    fontSize: 12,
  },
  delete: {
    fontSize: 12,
    fontWeight: "500",
  },
  barBackground: {
    height: 8,
    borderRadius: 999,
    overflow: "hidden",
    marginHorizontal: 14,
  },
  barFill: {
    height: "100%",
    borderRadius: 999,
  },
});
