import React, { useState, useContext } from "react";
import { View, Text, Image, TouchableOpacity, Modal, Dimensions } from "react-native";
import { styled } from "nativewind";
import { CartContext } from '../Objects/CartContext';

const { width } = Dimensions.get("window");

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledTouchableOpacity = styled(TouchableOpacity);

export default function ProductCard({ id, image, category, title, price, description }) {
  const { addToCart } = useContext(CartContext);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddToCart = () => {
    addToCart({ id, image, category, title, price });
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <StyledTouchableOpacity onPress={openModal} className="flex-1 w-1/2 p-2 bg-slate-300 rounded-2xl m-2">
      <StyledView className="rounded-2xl overflow-hidden">
        <StyledImage 
          source={image} 
          className="h-40 w-full" 
          resizeMode="cover" 
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
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <StyledView className="flex-1 justify-center items-center bg-black/25">
          <StyledView className="bg-white p-8 rounded-lg w-11/12">
            <StyledTouchableOpacity onPress={closeModal} className="absolute top-1 right-3 max-h-full">
              <StyledText className="text-gray-700 text-lg">X</StyledText>
            </StyledTouchableOpacity>
            <StyledView className="rounded-2xl overflow-hidden justify-center items-center">
              <StyledImage 
                source={image} 
                className="h-40 w-full" 
                resizeMode="cover" 
              />
            </StyledView>
            <StyledView>
              <StyledText className="text-2xl mb-1 font-extrabold">{title}</StyledText>
              <StyledText className="text-sm mb-1 font-light">Categoria: {category}</StyledText>
              <StyledText className="text-lg mb-4 font-bold">₡ {price}</StyledText>
              <StyledText className="text-base">{description}</StyledText>
            </StyledView>
          </StyledView>
        </StyledView>
      </Modal>
    </StyledTouchableOpacity>
  );
}
