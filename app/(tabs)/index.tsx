import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import CommunityCard from "../src/components/CommunityCard";
import {
  getCommunities,
  removeData,
  saveCommunities,
} from "../src/services/storage";
import { useEffect, useState } from "react";
import { Link } from "expo-router";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors } from "@/constants/theme";

type Community = {
  name: string;
  description: string;
};

export default function Home() {
  const [communities, setCommunities] = useState<Community[]>([]);
  const theme = useColorScheme() ?? "light";
  const c = Colors[theme];

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data = await getCommunities();
    setCommunities(data || []);
  };

  const handleDelete = async (index: number) => {
    console.log("Deleting community at index:", index);
    const updated = communities.filter((_, i) => i !== index);
    setCommunities(updated);
    await removeData(updated);
  };

  const confirmDelete = (index: number) => {
    handleDelete(index);
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: c.background }]}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <Text style={[styles.h1, { color: c.text }]}>
        O Futuro do Trabalho Começa Aqui
      </Text>

      <Text style={[styles.body, { color: c.muted }]}>
        Vivemos um período em que a tecnologia evolui rapidamente — e, ao mesmo
        tempo, habilidades humanas como colaboração, criatividade e aprendizagem
        contínua se tornam indispensáveis. Este aplicativo foi criado para
        ajudar pessoas a desenvolverem competências essenciais, se conectarem
        globalmente e se prepararem para o futuro do trabalho.
      </Text>

      {/* --- SEÇÃO 1 --- */}
      <Text style={[styles.sectionTitle, { color: c.text }]}>
        · Comunidades colaborativas
      </Text>
      <Text style={[styles.body, { color: c.muted }]}>
        Espaços onde pessoas de diferentes áreas, países, culturas e fusos
        horários podem trocar conhecimento, aprender juntas e construir redes
        globais de apoio e desenvolvimento.
      </Text>

      {/* --- SEÇÃO 2 --- */}
      <Text style={[styles.sectionTitle, { color: c.text }]}>
        · Mapeamento de habilidades
      </Text>
      <Text style={[styles.body, { color: c.muted }]}>
        Acompanhe suas soft e hard skills, registre seu progresso e desenvolva
        competências-chave para um mercado cada vez mais dinâmico, digital e
        internacional.
      </Text>

      {/* --- SEÇÃO 3 --- */}
      <Text style={[styles.sectionTitle, { color: c.text }]}>
        · Mural global de ideias
      </Text>
      <Text style={[styles.body, { color: c.muted }]}>
        Compartilhe aprendizados, reflexões, projetos ou oportunidades com uma
        comunidade aberta. O mural conecta pessoas que querem crescer juntas e
        construir o futuro de forma colaborativa.
      </Text>

      {/* --- NOVA SEÇÃO: Por que isso importa --- */}
      <Text style={[styles.h2, { color: c.text }]}>Por que isso importa?</Text>

      <Text style={[styles.body, { color: c.muted }]}>
        O futuro do trabalho exige autonomia, adaptabilidade e aprendizagem
        contínua. Com a expansão do trabalho remoto e de ecossistemas globais,
        novas formas de aprender, colaborar e se desenvolver profissionalmente
        estão surgindo.
      </Text>

      <Text style={[styles.body, { color: c.muted, marginTop: 6 }]}>
        Este app traz uma visão prática e humana desse futuro:
      </Text>

      <View style={styles.bulletList}>
        <Text style={[styles.bulletItem, { color: c.text }]}>
          • Você aprende no seu ritmo
        </Text>
        <Text style={[styles.bulletItem, { color: c.text }]}>
          • Você conecta-se com outras pessoas
        </Text>
        <Text style={[styles.bulletItem, { color: c.text }]}>
          • Você desenvolve habilidades reais
        </Text>
        <Text style={[styles.bulletItem, { color: c.text }]}>
          • Você participa de comunidades que crescem juntas
        </Text>
      </View>

      {/* --- PROPÓSITO --- */}
      <Text style={[styles.h2, { color: c.text, marginTop: 28 }]}>
        Nosso propósito
      </Text>

      <Text style={[styles.body, { color: c.muted }]}>
        Criar um ambiente onde qualquer pessoa possa aprender de forma
        colaborativa, global e acessível — transformando o futuro do trabalho em
        uma oportunidade para todos.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 28 },

  h1: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 12,
    lineHeight: 34,
  },

  h2: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 32,
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 28,
    marginBottom: 6,
  },

  body: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400",
    marginBottom: 4,
  },

  bulletList: {
    marginTop: 12,
    marginBottom: 8,
    paddingLeft: 4,
    gap: 6,
  },

  bulletItem: {
    fontSize: 16,
    lineHeight: 24,
  },
});
