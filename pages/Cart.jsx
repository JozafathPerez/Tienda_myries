import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CartCard from "../components/CartCard";
import { CartContext } from '../Objects/CartContext';

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  // Calcular la suma de subtotales
  const subtotal = cart.reduce((total, product) => total + (product.price * product.quantity), 0);
  const taxes = subtotal * 0.13; // Ejemplo de impuestos al 13%
  const shippingCost = 2000; // Ejemplo de gastos de envío fijos
  const total = subtotal + taxes + shippingCost;

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
          <TouchableOpacity 
            onPress={() => {
              alert('Pago Confirmado');
              clearCart();
            }} 
            className="mt-4 bg-blue-500 py-2 px-4 rounded-lg"
          >
            <Text className="text-white text-center">Confirmar Pago</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default Cart;
