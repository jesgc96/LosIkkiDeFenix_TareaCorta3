import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';

export default function App() {
  // Datos de ejemplo (Esto es lo que reemplazará el fetch del API ☝️🤓)
  // el id es a modo de encabezado 
  const [datos, setDatos] = useState([
    { id: '1', campo1: 'Dato A', campo2: 'Valor X', campo3: 'Info 1' },
    { id: '2', campo1: 'Dato B', campo2: 'Valor Y', campo3: 'Info 2' },
    { id: '3', campo1: 'Dato C', campo2: 'Valor Z', campo3: 'Info 3' },
  ]);

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.campo1}</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Propiedad 1:</Text>
        <Text style={styles.value}>{item.campo2}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Propiedad 2:</Text>
        <Text style={styles.value}>{item.campo3}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Resultados del API</Text>
      <FlatList
        data={datos}
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Gris claro de fondo
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  listContent: {
    paddingHorizontal: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    // Sombrita
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#007AFF', // Color azul estándar
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
    color: '#666',
  },
  value: {
    color: '#333',
  },
});