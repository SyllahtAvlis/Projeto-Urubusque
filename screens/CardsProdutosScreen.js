import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const produtos = [
    { id: '1', nome: 'Produto 1', imagem: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/375568/01/fnd/BRA/w/1000/h/1000/fmt/png', preco: 'R$ 50,00' },
    { id: '2', nome: 'Produto 2', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh5c8276N5MeitY6exsHDnAk1c4sfoHUBF2w&s', preco: 'R$ 70,00' },
    { id: '3', nome: 'Produto 3', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvYM8W2zanYwoQEG75ZqgA9cug5BkPBbCGNA&s', preco: 'R$ 50,00' },
];

const CardsProdutosScreen = ({ navigation }) => {
    const renderProduto = ({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => alert(`Você selecionou: ${item.nome}`)}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.preco}>{item.preco}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Produtos</Text>
            <FlatList
                data={produtos}
                renderItem={renderProduto}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.lista}
            />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
    padding: 16,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF0000', 
    marginBottom: 16,
    alignSelf: 'center',
  },
  lista: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#111', 
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#FF0000', 
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#FF0000',
  },
  imagem: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 12,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF', 
    marginBottom: 4,
  },
  preco: {
    fontSize: 16,
    color: '#FF0000',
    fontWeight: '600',
  },
});

    
    export default CardsProdutosScreen;