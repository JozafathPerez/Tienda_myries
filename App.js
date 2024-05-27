import 'react-native-get-random-values'; // Importar polyfill para getRandomValues
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Toast from 'react-native-toast-message';
import { OrderProvider } from './Objects/OrderContext';

// Configuración para vista de navegador
import { NativeWindStyleSheet } from "nativewind";
NativeWindStyleSheet.setOutput({
  default: "native",
});

// Imports de las paginas
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Account from "./pages/Account";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import Shopping from "./pages/Shopping";
import { CartProvider } from "./Objects/CartContext";
import OrderNavigator from './navigation/OrderNavigator';

// Import del estilo de la barra de navegador y mensajes tipo toast
import { cartOptions, homeOptions, otherScreenOptions, accountOptions, catalogOptions } from './NavigatorStyle';

const Menu = createDrawerNavigator();

export default function App() {
  return (
    <OrderProvider>
      <CartProvider>
        <NavigationContainer>
          <Menu.Navigator initialRouteName='Inicio' screenOptions={{ drawerPosition: 'right' }}>
            <Menu.Screen name="Cuenta" component={Account} options={accountOptions} />
            <Menu.Screen name="Inicio" component={Home} options={homeOptions} />
            <Menu.Screen name="Catalogo" component={Catalog} options={catalogOptions} />
            <Menu.Screen name="Carrito" component={Cart} options={cartOptions} /> 
            <Menu.Screen name="Historial" component={Shopping} options={otherScreenOptions} /> 
            <Menu.Screen name="Contactenos" component={Contacts} options={otherScreenOptions} />
          </Menu.Navigator>

          <Toast />
        </NavigationContainer>
      </CartProvider>
    </OrderProvider>
  );
}
