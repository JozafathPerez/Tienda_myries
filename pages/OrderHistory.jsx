import React, { useContext } from "react";
import { View, Text, FlatList } from "react-native";
import { styled } from "nativewind";
import { OrderContext } from '../Objects/OrderContext';

const StyledView = styled(View);
const StyledText = styled(Text);

export default function OrderHistory() {
  const { orders } = useContext(OrderContext);

  const renderOrderItem = ({ item }) => (
    <StyledView className="pb-3 bg-white rounded-lg shadow-lg mb-4 border-gray-300">
      <StyledView className="px-4 py-1 flex-row justify-between items-center mb-3 bg-slate-300 rounded-t-lg border-b border-blue-500">
        <StyledText className="text-xl font-extrabold text text-black">Pedido #{item.id}</StyledText>
        <StyledText className="text-sm text-gray-600">{item.date}</StyledText>
      </StyledView>
      <StyledText className="text-base font-semibold mb-2 mx-4">Estado: <StyledText className="text-blue-500">{item.status}</StyledText></StyledText>
      <StyledText className="text-base font-semibold mb-2 mx-4">Productos:</StyledText>
      {item.items.map((product, index) => (
        <StyledView key={index} className="ml-8 mb-1">
          <StyledText className="text-base">- {product.title} <StyledText className="font-bold">x {product.quantity}</StyledText></StyledText>
        </StyledView>
      ))}
    </StyledView>
  );

  return (
    <StyledView className="flex-1 p-5 bg-gray-100">
      {/* <StyledText className="text-3xl font-bold mb-5 text-center text-blue-500">Historial de Pedidos</StyledText> */}
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderOrderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </StyledView>
  );
}
