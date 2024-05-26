import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

// Imports de las paginas
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Account from "./pages/Account";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";

// Import del estilo de la barra de navegador
import { CartScreenOptions, homeScreenOptions, otherScreenOptions } from './NavigatorStyle';

const Menu = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Menu.Navigator screenOptions={{ drawerPosition: 'right' }}>
        <Menu.Screen name="Inicio" component={Home} options={homeScreenOptions} />
        <Menu.Screen name="Catalogo" component={Catalog} options={homeScreenOptions} />
        <Menu.Screen name="Carrito" component={Cart} options={CartScreenOptions} />
        <Menu.Screen name="Cuenta" component={Account} options={otherScreenOptions} />
        <Menu.Screen name="Contactenos" component={Contacts} options={otherScreenOptions} />
      </Menu.Navigator>
    </NavigationContainer>
  );
}
