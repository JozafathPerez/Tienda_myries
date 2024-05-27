import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { OrderContext } from '../Objects/OrderContext';
import { styled } from 'nativewind';

const StyledTouchableOpacity = styled(TouchableOpacity);

const OrderList = ({ navigation }) => {
  const { orders } = useContext(OrderContext);

  const renderItem = ({ item }) => (
    <StyledTouchableOpacity
      className="p-4 bg-white mb-2 rounded-lg shadow-lg"
      onPress={() => navigation.navigate('OrderDetails', { order: item })}
    >
      <Text className="text-lg font-bold">Pedido ID: {item.id}</Text>
      <Text className="text-base">Fecha: {item.date}</Text>
      <Text className="text-base">Estado: {item.status}</Text>
    </StyledTouchableOpacity>
  );

  return (
    <View className="flex-1 mx-5">
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<Text className="text-center mt-10">No hay pedidos realizados</Text>}
      />
    </View>
  );
};

export default OrderList;
