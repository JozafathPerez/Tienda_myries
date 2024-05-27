import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { styled } from 'nativewind';

const StyledView = styled(View);

const OrderDetails = ({ route }) => {
  const { order } = route.params;

  const renderItem = ({ item }) => (
    <StyledView className="p-2 border-b border-gray-200">
      <Text className="text-base font-bold">{item.title}</Text>
      <Text className="text-base">Cantidad: {item.quantity}</Text>
      <Text className="text-base">Precio: ₡ {item.price.toFixed(2)}</Text>
    </StyledView>
  );

  return (
    <GestureHandlerRootView>
      <SafeAreaView className="flex-1 mx-5">
        <View className="mt-5 p-4 bg-white rounded-lg shadow-lg">
          <Text className="text-lg font-bold mb-2">Detalles del Pedido</Text>
          <Text className="text-base">Pedido ID: {order.id}</Text>
          <Text className="text-base">Fecha: {order.date}</Text>
          <Text className="text-base mb-2">Estado: {order.status}</Text>
          <FlatList
            data={order.cartProducts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default OrderDetails;
