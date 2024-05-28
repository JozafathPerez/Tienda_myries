import React, { useState, useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, useWindowDimensions } from 'react-native';
import { CartContext } from '../Objects/CartContext';

export default function AdminProducts({ product }) {
  const { updateCart, removeFromCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(product.quantity);

  const handleQuantityChange = (text) => {
    const num = parseInt(text, 10);
    const newQuantity = isNaN(num) || num < 1 ? 1 : num;
    setQuantity(newQuantity);
    updateCart(product.id, newQuantity);
  };

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateCart(product.id, newQuantity);
  };

  const decrementQuantity = () => {
    const newQuantity = quantity > 1 ? quantity - 1 : 1;
    setQuantity(newQuantity);
    updateCart(product.id, newQuantity);
  };

  const subtotal = product.price * quantity;

  const { width } = useWindowDimensions();
  const isWideScreen = width >= 768;

  return (
    <View className="flex-1 p-4 bg-slate-300 rounded-2xl m-2 sm:flex-row sm:justify-between space-x-4">
      {/* imagen, titulo y categoria */}
      <View className="flex-row sm:w-1/3">
        <View className="h-20 w-20 rounded-2xl overflow-hidden">
          <Image 
            source={product.image} 
            className="h-full w-full" 
            resizeMode="cover"
          />
        </View>
        <View className="flex-1 ml-5 justify-center">
          <Text numberOfLines={1} className="text-lg font-semibold">{product.title}</Text>
          <Text>{product.category}</Text>
        </View>
      </View>
      {/* info de prrecios y cantidad */}
      <View className="mt-5 sm:mt-0">
        <Text className="text-xl font-bold">₡ {product.price.toFixed(2)}</Text>
        <View className="flex-row items-center mt-2">
          <Text className="mr-2">Cantidad:</Text>
          <TouchableOpacity onPress={decrementQuantity} className="w-8 h-8 bg-gray-400 rounded items-center justify-center">
            <Text className="text-lg font-bold">-</Text>
          </TouchableOpacity>
          <TextInput 
            value={String(quantity)}
            onChangeText={handleQuantityChange}
            keyboardType="numeric"
            className="border border-gray-400 rounded p-1 w-12 text-center mx-2"
          />
          <TouchableOpacity onPress={incrementQuantity} className="w-8 h-8 bg-gray-400 rounded items-center justify-center">
            <Text className="text-lg font-bold">+</Text>
          </TouchableOpacity>
        </View>
        <Text className="mt-2 text-lg font-bold">Subtotal: ₡ {subtotal.toFixed(2)}</Text>
      </View>
      {/* Boton de cancelar */}
      <TouchableOpacity 
        onPress={() => removeFromCart(product.id)} 
        className="mt-4 bg-red-500 rounded-lg justify-center content-center sm:mt-8 sm:h-10 p-2"
      >
        <Text className="text-white text-center">Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
}
