import React from "react";
import { SafeAreaView, Text, Image, ScrollView, useWindowDimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HorizontalProductsList from "../components/HorizontalProductsList";
import ImageCarousel from "../components/ImageCarousel";
import CategoryBubbles from "../components/CategoryBubbles";
import { Products } from "../Objects/Products";
import { styled } from "nativewind";

const StyledSafeAreaView = styled(SafeAreaView);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledScrollView = styled(ScrollView);

// Importar imágenes locales
const image1 = require('../Objects/Images/Tienda.jpg');
const image2 = require('../Objects/Images/Anuncio.jpg');
const image3 = require('../Objects/Images/Anuncio2.jpg');

const Home = () => {
  const { width } = useWindowDimensions();

  const getFontSize = (baseSize) => {
    if (width < 768) {
      return baseSize * 0.75;
    } else if (width < 1024) {
      return baseSize;
    } else {
      return baseSize * 1.25;
    }
  };

  // IDs de los productos más populares
  const popularProductIds = [1, 4, 9, 8, 13, 12];

  // Filtrar los productos populares
  const popularProducts = Products.filter((product) =>
    popularProductIds.includes(product.id)
  );

  // Arreglo de imágenes locales
  const localImages = [image1, image2, image3];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StyledSafeAreaView className="flex-1 mx-2">
        <StyledScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          <StyledText 
            className="font-bold text-center mb-5 my-5"
            style={{ fontSize: getFontSize(34) }}
          > 
            Tienda Myries
          </StyledText>
          <ImageCarousel images={localImages}/>
          <StyledText 
            className="font-bold text-center mt-10 mb-5"
            style={{ fontSize: getFontSize(30) }}
          > 
            Categorías
          </StyledText>
          <CategoryBubbles />
          <StyledText 
            className="font-bold text-center mb-5 my-5"
            style={{ fontSize: getFontSize(30) }}
          > 
            Los productos más populares
          </StyledText>
          <HorizontalProductsList products={popularProducts} />
        </StyledScrollView>
      </StyledSafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Home;
