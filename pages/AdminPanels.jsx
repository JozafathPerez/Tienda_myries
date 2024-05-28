import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ModificarProductosScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página de Modificar Productos</Text>
      {/* Aquí puedes añadir el contenido específico de esta pantalla */}
    </View>
  );
};

const VerPerdidosScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página de Ver Perdidos</Text>
      {/* Contenido de la pantalla de Ver Perdidos */}
    </View>
  );
};

const ModificarClientesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página de Modificar Clientes</Text>
      {/* Contenido de la pantalla de Modificar Clientes */}
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
