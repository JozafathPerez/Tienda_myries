import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Catalog from './Catalog'; 
import OrderHistory from './OrderHistory';
import ClientList from '../components/ClientList'; // Importa el componente ClientLis

const ModificarProductosScreen = () => {
  return (
    <View style={styles.container}>
        <Catalog /> 
    </View>
  );
};

const VerPerdidosScreen = () => {
    return (
      <View style={styles.container}>
        <OrderHistory /> 
      </View>
    );
  };

  const ModificarClientesScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Página de Modificar Clientes</Text>
        {/* Muestra el componente ClientList */}
        <ClientList />
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export { ModificarProductosScreen, VerPerdidosScreen, ModificarClientesScreen };
