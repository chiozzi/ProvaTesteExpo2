import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Prova Teste Expo 2</Text>

      <View style={styles.containerbotoes}>
        <Link style={styles.botao} href="/lista">Ir para a lista</Link>
        {/* A tela de detalhes não é acessada direto,
            ela é aberta passando parâmetros a partir da lista */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d88bddff"
  },
   titulo: {
    fontSize: 28,
    marginBottom: 10,
    fontWeight: "bold",
    paddingBottom: 15,
    color: '#421046ff',
  },
  containerbotoes: {
    gap: 20,
  },
  botao: {
    backgroundColor: "#59035fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    color: "#fff",
  },
});
