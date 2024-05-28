import React, { useRef, useState } from "react";
import { View, FlatList, useWindowDimensions } from "react-native";
import { styled } from "nativewind";
import ProductCard from "./ProductCard";

const StyledView = styled(View);

const HorizontalProductsList = ({ products }) => {
  const flatListRef = useRef(null);
  const { width } = useWindowDimensions();

  const getItemWidth = () => {
    if (width < 768) {
      return width * 0.8;
    } else if (width < 1024) {
      return width * 0.5;
    } else {
      return width * 0.33;
    }
  };

  return (
    <StyledView className="items-center">
      <FlatList
        ref={flatListRef}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard {...item} style={{ width: getItemWidth() }} />}
        horizontal
        showsHorizontalScrollIndicator={true} // Mostrar el indicador de scroll horizontal
        pagingEnabled
        contentContainerStyle={{ paddingHorizontal: 10 }}
        snapToAlignment="start"
        snapToInterval={getItemWidth()}
        decelerationRate="fast"
      />
    </StyledView>
  );
};

export default HorizontalProductsList;
