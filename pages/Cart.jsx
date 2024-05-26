import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CartList from "../components/CartList";
import { CartProduct } from '../Objects/CartProduct';
import { Products } from '../Objects/Products';

const Cart = () => {
  // SOLUCION TEMPORAL PARA HACER LOS PRODUCTOS DE CARRITO A BASE DE LA LISTE DE PRODUCTOS NORMALES
  const cartProducts = Products.map((product) => new CartProduct(product));

  // Calcular la suma de subtotales
  const subtotal = cartProducts.reduce((total, product) => total + (product.price * product.quantity), 0);

  // Agregar otros montos como impuestos o gastos de envío
  const taxes = subtotal * 0.13; // Ejemplo de impuestos al 13%
  const shippingCost = 2000; // Ejemplo de gastos de envío fijos

  // Calcular el total
  const total = subtotal + taxes + shippingCost;

  return (
    <GestureHandlerRootView>
      <SafeAreaView className="flex-1 mx-5">
        <CartList products={cartProducts} />
        <View className="mt-0 p-4 bg-white rounded-lg">
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
            onPress={() => alert('Pago Confirmado')} 
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
