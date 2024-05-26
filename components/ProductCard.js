import { React, useContext } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styled } from "nativewind";
import { CartContext } from '../Objects/CartContext';
import Toast from 'react-native-toast-message';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

export default function ProductCard({ id, image, category, title, price }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ id, image, category, title, price });
  };

  return (
    <StyledView className="flex-1 w-1/2 p-2 bg-slate-300 rounded-2xl m-2">
      <StyledView className="rounded-2xl overflow-hidden">
        <StyledImage 
          source={image} 
          className="h-40 w-30" 
          resizeMode="object-scale-down" 
          style={{ height: 160, width: 155 }}
        />
      </StyledView>
      <StyledView className="mt-5">
        <StyledText numberOfLines={2} className="text-lg font-semibold">
          {title}
        </StyledText>
        <StyledText>{category}</StyledText>
        <StyledText className="text-2xl font-extrabold">₡ {price}</StyledText>
      </StyledView>
      <TouchableOpacity 
        onPress={handleAddToCart} 
        className="mt-4 bg-blue-500 py-2 px-4 rounded-lg"
      >
        <StyledText className="text-white text-center">Añadir al Carrito</StyledText>
      </TouchableOpacity>
    </StyledView>
  );
}
