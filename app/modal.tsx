import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informação Importante</Text>
      <Text style={styles.text}>
        Este é um modal. Use-o para avisos, dicas rápidas ou feedback ao usuário.
      </Text>

      <TouchableOpacity style={styles.btn} onPress={() => router.back()}>
        <Text style={styles.btnText}>Fechar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  title: { fontSize: 28, fontWeight: "700", marginBottom: 10 },
  text: { fontSize: 16, color: "#444", marginBottom: 20 },
  btn: {
    backgroundColor: "#4B8DF8",
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
  },
  btnText: { textAlign: "center", color: "#fff", fontSize: 16, fontWeight: "700" },
});
