import React, { useState, useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, LayoutAnimation, UIManager, Platform } from "react-native";
import { styled } from "nativewind";
import { OrderContext } from '../Objects/OrderContext';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

export default function OrderHistory() {
  const { orders, updateOrderStatus } = useContext(OrderContext);
  const [expandedOrderIds, setExpandedOrderIds] = useState([]);

  const handleCancelOrder = (orderId) => {
    updateOrderStatus(orderId, 'Cancelado');
  };

  const toggleDetails = (orderId) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedOrderIds(prevState =>
      prevState.includes(orderId)
        ? prevState.filter(id => id !== orderId)
        : [...prevState, orderId]
    );
  };

  const renderOrderItem = ({ item }) => {
    const isExpanded = expandedOrderIds.includes(item.id);
    const statusColor = item.status === 'Cancelado' ? 'text-red-500' : item.status === 'Entregado' ? 'text-green-500' : 'text-blue-500';

    return (
      <StyledView className="p-5 bg-slate-300 rounded-lg shadow-lg mb-4">
        <StyledView className="flex-row justify-between items-center mb-3">
          <StyledText className="text-xl font-bold text-black">Pedido #{item.id}</StyledText>
          <StyledText className="text-sm text-gray-500">{item.date}</StyledText>
        </StyledView>
        <StyledText className="text-base font-semibold mb-2">
          Estado: <StyledText className={statusColor}>{item.status}</StyledText>
        </StyledText>
        <StyledTouchableOpacity onPress={() => toggleDetails(item.id)} className="mb-2">
          <Text className="text-blue-500">{isExpanded ? 'Ocultar detalles' : 'Mostrar más detalles'}</Text>
        </StyledTouchableOpacity>
        {isExpanded && (
          <StyledView>
            <StyledText className="text-base font-semibold mb-2">Productos:</StyledText>
            {item.items.map((product, index) => (
              <StyledView key={index} className="ml-4 mb-1">
                <StyledText className="text-base">- {product.title} <StyledText className="font-semibold">x {product.quantity}</StyledText></StyledText>
              </StyledView>
            ))}
          </StyledView>
        )}
        {item.status !== 'Cancelado' && item.status !== 'Entregado' && (
          <StyledTouchableOpacity 
            onPress={() => handleCancelOrder(item.id)}
            className="mt-4 bg-red-500 py-2 px-4 rounded-lg"
          >
            <Text className="text-white text-center">Cancelar Pedido</Text>
          </StyledTouchableOpacity>
        )}
      </StyledView>
    );
  };

  return (
    <StyledView className="flex-1 p-5 bg-gray-100">
      {orders.length === 0 ? (
        <StyledView className="flex-1 justify-center items-center">
          <StyledText className="text-lg font-semibold">No hay pedidos en el historial</StyledText>
        </StyledView>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderOrderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </StyledView>
  );
}
