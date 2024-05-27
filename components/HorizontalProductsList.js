import React, { useRef, useState } from "react";
import { View, FlatList } from "react-native";
import { styled } from "nativewind";
import ProductCard from "./ProductCard";
import { Ionicons } from "@expo/vector-icons"; // Importa los iconos de Ionicons

const StyledView = styled(View);
const StyledIcon = styled(Ionicons); // Estiliza el componente de icono

const HorizontalProductsList = ({ products }) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  const scrollLeft = () => {
    if (currentIndex > 0) {
      flatListRef.current.scrollToIndex({ index: currentIndex - 1 });
    }
  };

  const scrollRight = () => {
    if (currentIndex < products.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  return (
    <StyledView className="items-center">
      <FlatList
        ref={flatListRef}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard {...item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        contentContainerStyle={{ paddingHorizontal: 10 }}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
      />
      <StyledView className="flex-row justify-between mt-4">
        <StyledIcon
          name="arrow-back-outline"
          size={40}
          color="black"
          onPress={scrollLeft}
          style={{ marginRight: 140 }}
        />
        <StyledIcon
          name="arrow-forward-outline"
          size={40}
          color="black"
          onPress={scrollRight}
          style={{ marginLeft: 140 }}
        />
      </StyledView>
    </StyledView>
  );
};

export default HorizontalProductsList;