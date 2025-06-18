// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home Screen</Text>
      <Text style={styles.header}>Notícias de Hoje</Text>
      <FlatList
        data={newsData}
        renderItem={({ item }) => <NewsItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

// Simulação de dados de notícias
const newsData = [
  { id: '1', title: 'Últimas notícias sobre Tecnologia', description: 'Flamengo tem o melhor CT fora da europa.' },
  { id: '2', title: 'Mercado Financeiro em Alta', description: 'Flamengo é o vigésimo primeiro time mais rico do mundo de acordo com a Forbes.' },
  { id: '3', title: 'Dicas de Viagem para o Verão', description: 'O Flamengo jogará o super-mundial de clubes' },
  { id: '4', title: 'Nova Atualização de Software Disponível', description: 'Detalhes sobre a mais recente versão do software.' },
  { id: '5', title: 'Principal evento para o Fim de Semana', description: 'Destruir os baianos' },
];

const NewsItem = ({ item }) => (
  <View style={styles.newsItem}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.description}>{item.description}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 60, 
    paddingHorizontal: 20,
  },

  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30, 
    color: '#C52613',
    textAlign: 'center', 
  },
  newsItem: {
    backgroundColor: '#1E1E1E', 
    padding: 20,
    marginBottom: 15, 
    borderRadius: 10, 
    borderWidth: 1,
    borderColor: '#C52613',
  },
  title: {
    fontSize: 20, 
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#C52613',
  },
  description: {
    fontSize: 16,
    color: '#D3D3D3', 
    lineHeight: 22,
  },
});