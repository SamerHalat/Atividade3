import React from 'react';
import { View, Text, Image, StyleSheet, Button, Alert } from 'react-native';

const ProductCard = ({ nome, preco, imagem }) => {
  const handleComprar = () => {
    Alert.alert('Compra realizada', `Produto ${nome} comprado!`);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: imagem }} style={styles.imagem} />
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.preco}>R$ {preco.toFixed(2)}</Text>
      <Button title="Comprar" onPress={handleComprar} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  preco: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
});

export default ProductCard;
