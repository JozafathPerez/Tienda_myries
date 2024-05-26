import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Account from "./pages/Account";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";

const Menu = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Menu.Navigator>
        <Menu.Screen name="Inicio" component={Home} options={{ headerTitle: "Inicio" }} />
        <Menu.Screen name="Catalogo" component={Catalog} />
        <Menu.Screen name="Carrito" component={Cart} />
        <Menu.Screen name="Cuenta" component={Account} />
        <Menu.Screen name="Contactenos" component={Contacts} />
      </Menu.Navigator>
    </NavigationContainer>
  );
}
