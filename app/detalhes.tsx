import React from "react";
import { View, Text, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Detalhes() {
  // pega o parâmetro (url da imagem) enviado pela tela de lista
  const { url } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Detalhes do Gato 🐱</Text>
      
      {/* mostra a imagem recebida por parâmetro */}
      <Image source={{ uri: url as string }} style={{ width: 300, height: 300, borderRadius: 15 }} />
    </View>
  );
}
