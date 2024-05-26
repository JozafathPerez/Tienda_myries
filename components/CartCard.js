import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

export default function CartCard({ product }) {
  const [quantity, setQuantity] = useState(product.quantity);

  const subtotal = product.price * quantity;

  // Maneja el cambio en la entrada de cantidad
  const handleQuantityChange = (text) => {
    // Convertir el texto a número, y asegurarse de que sea al menos 1
    const num = parseInt(text, 10);
    setQuantity(isNaN(num) || num < 1 ? 1 : num);
  };

  // Maneja el incremento de la cantidad
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Maneja el decremento de la cantidad
  const decrementQuantity = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };

  return (
    <View className="p-4 bg-slate-300 rounded-2xl m-2">
      {/* Contenedor principal de la información del producto */}
      <View className="flex-row">
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
      <View className="mt-5">
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
    </View>
  );
}
