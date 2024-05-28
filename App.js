import 'react-native-get-random-values';
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Toast from 'react-native-toast-message';
import { OrderProvider } from './Objects/OrderContext';
import { CartProvider } from "./Objects/CartContext";
import { NativeWindStyleSheet } from "nativewind";
import { AdminProvider, AdminContext } from './Objects/AdminContext';

NativeWindStyleSheet.setOutput({
  default: "native",
});

import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Account from "./pages/Account";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import OrderHistory from './pages/OrderHistory';
import AdminSettings from './pages/AdminSettings';
import { cartOptions, homeOptions, otherScreenOptions, accountOptions, catalogOptions, commonHeaderOptions } from './NavigatorStyle';

const Menu = createDrawerNavigator();

export default function App() {
  return (
    <OrderProvider>
      <CartProvider>
        <AdminProvider>
          <NavigationContainer>
            <AppNavigator />
            <Toast />
          </NavigationContainer>
        </AdminProvider>
      </CartProvider>
    </OrderProvider>
  );
}

const AppNavigator = () => {
  const { isAdmin } = React.useContext(AdminContext);

  return (
    <Menu.Navigator initialRouteName='Inicio' screenOptions={{ drawerPosition: 'right' }}>
      <Menu.Screen name="Cuenta" component={Account} options={accountOptions} />
      <Menu.Screen name="Inicio" component={Home} options={homeOptions} />
      <Menu.Screen name="Catálogo" component={Catalog} options={catalogOptions} />
      <Menu.Screen name="Carrito" component={Cart} options={cartOptions} /> 
      <Menu.Screen name="Historial" component={OrderHistory} options={otherScreenOptions} /> 
      <Menu.Screen name="Contactenos" component={Contacts} options={otherScreenOptions} />
      {isAdmin && (
        <Menu.Screen name="Administración" component={AdminSettings} options={commonHeaderOptions} />
      )}
    </Menu.Navigator>
  );
};
