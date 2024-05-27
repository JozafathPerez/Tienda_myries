import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OrderList from '../components/OrderList';
import OrderDetails from '../pages/OrderDetails';

const Stack = createStackNavigator();

const OrderNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="OrderList" component={OrderList} options={{ title: 'Mis Pedidos' }} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} options={{ title: 'Detalles del Pedido' }} />
    </Stack.Navigator>
  );
};

export default OrderNavigator;
