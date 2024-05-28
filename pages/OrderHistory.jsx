import React, { useState, useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, LayoutAnimation, UIManager, Platform } from "react-native";
import { styled } from "nativewind";
import { OrderContext } from '../Objects/OrderContext';
import Toast from "react-native-toast-message";

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
    Toast.show({
      type: 'success',
      text1: 'Pedido cancelado',
      text2: 'Su pedido ha sido cancelado con éxito',
    });
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
      <View className="p-5 bg-slate-300 rounded-lg shadow-lg mb-4 sm:flex-row sm:justify-between sm:space-x-5">
        <StyledView className="flex-row justify-between mb-3">
          <StyledText className="text-xl font-bold text-black">Pedido #{item.id}</StyledText>
          <Text className="text-sm text-gray-500 ml-5 sm:pt-1">{item.date}</Text>
        </StyledView>
        <Text className="text-base font-semibold mb-2 sm:mb:0">
          Estado: <StyledText className={statusColor}>{item.status}</StyledText>
        </Text>
        <View className='flex-col'>
          <TouchableOpacity onPress={() => toggleDetails(item.id)} className="mb-2 sm:mb:0">
            <Text className="text-blue-500">{isExpanded ? 'Ocultar detalles' : 'Mostrar más detalles'}</Text>
          </TouchableOpacity>
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
        </View>
        <TouchableOpacity 
          onPress={() => handleCancelOrder(item.id)}
          className={(item.status !== 'Cancelado' && item.status !== 'Entregado') ? "mt-4 bg-red-500 py-2 px-4 rounded-lg sm:mt-0 sm:h-9" : "mt-4 bg-gray-400 py-2 px-4 rounded-lg sm:mt-0 sm:h-9"}
          disabled={(item.status !== 'Cancelado' && item.status !== 'Entregado') ? false : true}
        >
          <Text className="text-white text-center">Cancelar Pedido</Text>
        </TouchableOpacity>
      </View>
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
