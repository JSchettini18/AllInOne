import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const cars = [
  {
    id: '1',
    brand: 'VW',
    model: 'Fusca',
    year: 1978,
    color: 'Vermelho',
    image: require('@/assets/images/fusca.png'), // Substitua pela imagem correta
  },
  {
    id: '2',
    brand: 'VW',
    model: 'Gol',
    year: 2010,
    color: 'Vermelho',
    image: require('@/assets/images/gol.png'), // Substitua pela imagem correta
  },
];

export default function CarListScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.header}>Objeto</ThemedText>
      <FlatList
        data={cars}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.title}>{item.brand} - {item.model}</Text>
              <Text style={styles.detail}>Ano: {item.year}</Text>
              <Text style={styles.detail}>Cor: {item.color}</Text>
            </View>
          </View>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  detail: {
    fontSize: 14,
    color: '#555',
  },
});
