import React from "react";
import { SafeAreaView, Text, Image, ScrollView } from "react-native";
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
          <StyledText className="text-3xl font-bold text-center mb-5 my-5 font-sans " style = {{ fontFamily: "ui-sans-serif"}}> 
            Tienda Myries
          </StyledText>
          <ImageCarousel images={localImages} />
          <CategoryBubbles />
          <StyledText className="text-3xl font-bold text-center mb-5 my-5 font-sans " style = {{ fontFamily: "ui-sans-serif"}}> 
            Los productos más populares
          </StyledText>
          <HorizontalProductsList products={popularProducts} />
        </StyledScrollView>
      </StyledSafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Home;
