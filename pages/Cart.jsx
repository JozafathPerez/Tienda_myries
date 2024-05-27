import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Modal from 'react-native-modal';
import { Ionicons, MaterialIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import CartCard from "../components/CartCard";
import { CartContext } from '../Objects/CartContext';
import { styled } from 'nativewind';

const StyledTouchableOpacity = styled(TouchableOpacity);

const Cart = () => {
  const { cart, confirmPayment } = useContext(CartContext);

  // Calcular la suma de subtotales
  const subtotal = cart.reduce((total, product) => total + (product.price * product.quantity), 0);
  const taxes = subtotal * 0.13; // Ejemplo de impuestos al 13%
  const shippingCost = 2000; // Ejemplo de gastos de envío fijos
  const total = subtotal + taxes + shippingCost;

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [selectedShippingMethod, setSelectedShippingMethod] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handlePaymentConfirmation = () => {
    confirmPayment();
    toggleModal();
  };

  return (
    <GestureHandlerRootView>
      <SafeAreaView className="flex-1 mx-5">
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CartCard product={item} />}
        />
        <View className="mt-5 p-4 bg-white rounded-lg shadow-lg">
          <Text className="text-lg font-bold mb-2">Resumen del Pedido</Text>
          <View className="flex-row justify-between">
            <Text className="text-base">Subtotal:</Text>
            <Text className="text-base">₡ {subtotal.toFixed(2)}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-base">Impuestos:</Text>
            <Text className="text-base">₡ {taxes.toFixed(2)}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-base">Gastos de Envío:</Text>
            <Text className="text-base">₡ {shippingCost.toFixed(2)}</Text>
          </View>
          <View className="flex-row justify-between mt-2">
            <Text className="text-lg font-bold">Total:</Text>
            <Text className="text-lg font-bold">₡ {total.toFixed(2)}</Text>
          </View>
          <StyledTouchableOpacity 
            onPress={toggleModal} 
            className="mt-4 bg-blue-500 py-2 px-4 rounded-lg"
          >
            <Text className="text-white text-center">Confirmar Pago</Text>
          </StyledTouchableOpacity>
        </View>

        <Modal isVisible={isModalVisible}>
          <View className="bg-white p-4 rounded-lg">
            <Text className="text-lg font-bold mb-2">Selecciona Método de Pago</Text>
            <StyledTouchableOpacity 
              onPress={() => setSelectedPaymentMethod('Tarjeta de Crédito')}
              className={`flex-row items-center mb-2 ml-5 ${selectedPaymentMethod === 'Tarjeta de Crédito' ? 'text-blue-500' : 'text-black'}`}
            >
              <Ionicons name="card-outline" size={24} color={selectedPaymentMethod === 'Tarjeta de Crédito' ? '#3b82f6' : 'dimgrey'} />
              <Text className="ml-2">Tarjeta de Crédito</Text>
            </StyledTouchableOpacity>
            <StyledTouchableOpacity 
              onPress={() => setSelectedPaymentMethod('PayPal')}
              className={`flex-row items-center mb-2 ml-5 ${selectedPaymentMethod === 'PayPal' ? 'text-blue-500' : 'text-black'}`}
            >
              <FontAwesome name="paypal" size={24} color={selectedPaymentMethod === 'PayPal' ? '#3b82f6' : 'dimgrey'} />
              <Text className="ml-2">PayPal</Text>
            </StyledTouchableOpacity>

            <Text className="text-lg font-bold mb-2">Selecciona Método de Envío</Text>
            <StyledTouchableOpacity 
              onPress={() => setSelectedShippingMethod('Envío por Correo')}
              className={`flex-row items-center mb-2 ml-5 ${selectedShippingMethod === 'Envío por Correo' ? 'text-blue-500' : 'text-black'}`}
            >
              <MaterialCommunityIcons name="mailbox" size={24} color={selectedShippingMethod === 'Envío por Correo' ? '#3b82f6' : 'dimgrey'} />
              <Text className="ml-2">Envío por Correo</Text>
            </StyledTouchableOpacity>
            <StyledTouchableOpacity 
              onPress={() => setSelectedShippingMethod('Entrega en Ruta')}
              className={`flex-row items-center mb-2 ml-5 ${selectedShippingMethod === 'Entrega en Ruta' ? 'text-blue-500' : 'text-black'}`}
            >
              <MaterialIcons name="local-shipping" size={24} color={selectedShippingMethod === 'Entrega en Ruta' ? '#3b82f6' : 'dimgrey'} />
              <Text className="ml-2">Entrega en Ruta</Text>
            </StyledTouchableOpacity>
            <StyledTouchableOpacity 
              onPress={() => setSelectedShippingMethod('Retiro en Tienda')}
              className={`flex-row items-center mb-2 ml-5 ${selectedShippingMethod === 'Retiro en Tienda' ? 'text-blue-500' : 'text-black'}`}
            >
              <MaterialIcons name="store" size={24} color={selectedShippingMethod === 'Retiro en Tienda' ? '#3b82f6' : 'dimgrey'} />
              <Text className="ml-2">Retiro en Tienda</Text>
            </StyledTouchableOpacity>

            <View className="flex-row justify-around mt-4">
              <StyledTouchableOpacity 
                onPress={handlePaymentConfirmation}
                className="bg-blue-500 py-2 px-4 rounded-lg"
              >
                <Text className="text-white">Confirmar</Text>
              </StyledTouchableOpacity>
              <StyledTouchableOpacity 
                onPress={toggleModal}
                className="bg-red-500 py-2 px-4 rounded-lg"
              >
                <Text className="text-white">Cancelar</Text>
              </StyledTouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default Cart;
