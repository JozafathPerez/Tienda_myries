import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { Account } from "./pages/Account";
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
        <Menu.Screen name="Home" component={Home} options={{ headerTitle: "Inicio" }} />
        <Menu.Screen name="Contacts" component={Contacts} />
        <Menu.Screen name="Account" component={Account} />
        <Menu.Screen name="Catalog" component={Catalog} />
        <Menu.Screen name="Cart" component={Cart} />
      </Menu.Navigator>
    </NavigationContainer>
  );
}
