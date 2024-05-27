import React, { useRef, useState } from "react";
import { View, FlatList, Image, Dimensions, TouchableOpacity } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledImage = styled(Image);
const StyledTouchableOpacity = styled(TouchableOpacity);

const { width, height } = Dimensions.get("window");

const ImageCarousel = ({ images }) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <StyledView className="items-center">
      <FlatList
        ref={flatListRef}
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <StyledImage 
            source={item} 
            className="mx-2" 
            style={{ width: width - 20, height: height / 3 }} 
            resizeMode="contain"
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        contentContainerStyle={{ paddingHorizontal: 10 }}
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
