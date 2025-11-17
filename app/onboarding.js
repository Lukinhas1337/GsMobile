import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors } from "@/constants/theme";

export default function Onboarding() {
  const theme = useColorScheme() ?? "light";
  const c = Colors[theme];

  return (
    <View style={[styles.container, { backgroundColor: c.background }]}>
      <View style={styles.textBlock}>
        <Text style={[styles.title, { color: c.text }]}>
          Futuro do trabalho, hoje.
        </Text>

        <Text style={[styles.subtitle, { color: c.muted }]}>
          Crie comunidades globais, mapeie suas skills e compartilhe
          aprendizados em um mural colaborativo.
        </Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.primaryBtn, { backgroundColor: c.tint }]}
          onPress={() => router.replace("/(tabs)")}
        >
          <Text style={styles.primaryText}>Começar agora</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.secondaryBtn, { borderColor: c.border }]}
          onPress={() => router.replace("/profile")}
        >
          <Text style={[styles.secondaryText, { color: c.muted }]}>
            Ver meu perfil
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
    justifyContent: "space-between",
  },
  textBlock: {
    marginTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    letterSpacing: -0.5,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
  },
  actions: {
    gap: 12,
  },
  primaryBtn: {
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: "center",
  },
  primaryText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryBtn: {
    paddingVertical: 12,
    borderRadius: 999,
    borderWidth: 1,
    alignItems: "center",
  },
  secondaryText: {
    fontSize: 14,
    fontWeight: "500",
  },
});
