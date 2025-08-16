import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import axios from "axios";
import { useRouter } from "expo-router";

export default function Lista() {
  // estados: lista de gatos, loading e erro
  const [gatos, setGatos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter(); // usado para navegar entre telas

  // chama a função de buscar gatos quando a tela carrega
  useEffect(() => {
    buscarGatos();
  }, []);

  // função que consome a API TheCatAPI
  const buscarGatos = async () => {
    try {
      setLoading(true); // ativa indicador de carregamento
      const response = await axios.get("https://api.thecatapi.com/v1/images/search?limit=10");
      setGatos(response.data); // salva os gatos no estado
    } catch (err) {
      setError("Erro ao carregar gatos 😿"); // trata erro de requisição
    } finally {
      setLoading(false); // desliga o loading
    }
  };

  // enquanto carrega, mostra indicador
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  // se deu erro, mostra mensagem
  if (error) {
    return (
      <View style={styles.center}>
        <Text>{error}</Text>
      </View>
    );
  }

  // exibe lista de gatos
  return (
    <FlatList
      data={gatos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          {/* mostra a imagem do gato */}
          <Image source={{ uri: item.url }} style={styles.image} />

          {/* botão que leva para a tela de detalhes, passando a URL como parâmetro */}
          <TouchableOpacity
            style={styles.botao}
            onPress={() => router.push({ pathname: "/detalhes", params: { url: item.url } })}
          >
            <Text style={styles.botaoTexto}>Ver detalhes 🐾</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}

// estilos da tela
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    margin: 10,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    elevation: 3,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10
  },
  botao: {
    marginTop: 10,
    backgroundColor: "#59035fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
