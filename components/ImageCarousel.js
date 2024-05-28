import React, { useRef, useState, useEffect } from "react";
import { View, FlatList, Image, TouchableOpacity, useWindowDimensions, Platform } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledImage = styled(Image);
const StyledTouchableOpacity = styled(TouchableOpacity);

const ImageCarousel = ({ images }) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width, height } = useWindowDimensions();
  const [imageSize, setImageSize] = useState({ width: width, height: height });

  const resizeImage = () => {
    if (Platform.OS === "web") {
      // Ajusta el tamaño de la imagen para la web
      setImageSize({ width: width, height: height - 200});
    } else {
      // Ajusta el tamaño de la imagen para dispositivos móviles
      setImageSize({ width: width + 40, height: height / 3 + 40 });
    }
  };

  useEffect(() => {
    resizeImage();

    if (Platform.OS === "web") {
      // Añadir un event listener para manejar cambios en el tamaño de la ventana en la web
      window.addEventListener("resize", resizeImage);
      return () => window.removeEventListener("resize", resizeImage);
    }
  }, [width, height]);

  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const scrollToIndex = (index) => {
    flatListRef.current.scrollToIndex({ index, animated: true });
  };

  return (
    <StyledView className="flex justify-center items-center">
      <FlatList
        ref={flatListRef}
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <StyledImage 
            source={item} 
            className="mx-2" 
            style={imageSize} 
            resizeMode="contain"
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        style={{ width: width - 20 }}
      />
      <StyledView className="flex-row justify-center mt-4">
        {images.map((_, index) => (
          <StyledTouchableOpacity
            key={index}
            onPress={() => scrollToIndex(index)}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </StyledView>
    </StyledView>
  );
};

export default ImageCarousel;
