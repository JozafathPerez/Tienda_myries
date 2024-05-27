import React, { useContext } from "react";
import { View, Text, FlatList } from "react-native";
import { styled } from "nativewind";
import { OrderContext } from '../Objects/OrderContext';

const StyledView = styled(View);
const StyledText = styled(Text);

export default function OrderHistory() {
  const { orders } = useContext(OrderContext);

  const renderOrderItem = ({ item }) => (
    <StyledView className="p-5 bg-white rounded-lg shadow-lg mb-4 border border-gray-300">
      <StyledView className="flex-row justify-between items-center mb-3">
        <StyledText className="text-xl font-bold text-blue-700">Pedido #{item.id}</StyledText>
        <StyledText className="text-sm text-gray-500">{item.date}</StyledText>
      </StyledView>
      <StyledText className="text-base font-semibold mb-2">Estado: <StyledText className="text-blue-500">{item.status}</StyledText></StyledText>
      <StyledText className="text-base font-semibold mb-2">Productos:</StyledText>
      {item.items.map((product, index) => (
        <StyledView key={index} className="ml-4 mb-1">
          <StyledText className="text-base">- {product.title} <StyledText className="font-semibold">x {product.quantity}</StyledText></StyledText>
        </StyledView>
      ))}
    </StyledView>
  );

  return (
    <StyledView className="flex-1 p-5 bg-gray-100">
      <StyledText className="text-3xl font-bold mb-5 text-center text-blue-700">Historial de Pedidos</StyledText>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderOrderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </StyledView>
  );
}
