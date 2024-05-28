import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ModificarProductosScreen, VerPerdidosScreen, ModificarClientesScreen } from './AdminPanels';

const Stack = createStackNavigator();

const AdminSettings = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ModificarProductos"
        component={ModificarProductosScreen}
        options={{ title: 'Modificar productos' }} // Título personalizado para esta pantalla
      />
      <Stack.Screen
        name="VerPerdidos"
        component={VerPerdidosScreen}
        options={{ title: 'Ver perdidos' }} // Título personalizado para esta pantalla
      />
      <Stack.Screen
        name="ModificarClientes"
        component={ModificarClientesScreen}
        options={{ title: 'Modificar clientes' }} // Título personalizado para esta pantalla
      />
    </Stack.Navigator>
  );
};

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Configuración de Administrador</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.redButton]}
          onPress={() => navigation.navigate('ModificarProductos')}
        >
          <Text style={styles.buttonText}>Modificar productos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.grayButton]}
          onPress={() => navigation.navigate('VerPerdidos')}
        >
          <Text style={styles.buttonText}>Ver perdidos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.blueButton]}
          onPress={() => navigation.navigate('ModificarClientes')}
        >
          <Text style={styles.buttonText}>Modificar clientes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 100,
  },
  button: {
    height: 100,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 16,
  },
  redButton: {
    backgroundColor: '#EF4444',
  },
  grayButton: {
    backgroundColor: '#6B7280',
  },
  blueButton: {
    backgroundColor: '#3B82F6',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AdminSettings;
