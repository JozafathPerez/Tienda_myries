import React, { useState, useEffect } from "react";
import { View, Image, Text, Platform, useWindowDimensions } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledImage = styled(Image);
const StyledText = styled(Text);

const CategoryBubbles = () => {
  const { width } = useWindowDimensions();
  const isWeb = Platform.OS === "web";
  const [numColumns, setNumColumns] = useState(3); // Número de columnas por defecto

  useEffect(() => {
    // Ajusta el número de columnas en función del ancho de la ventana
    if (width < 768) {
      setNumColumns(1);
    } else if (width < 1024) {
      setNumColumns(2);
    } else {
      setNumColumns(3);
    }
  }, [width]);

  const categories = [
    { name: "Ceras      ", image: require("../Objects/Images/CeraBlanca.jpg"), color: "bg-red-500" },
    { name: "Cuchillas  ", image: require("../Objects/Images/Cuchilla(T-wide).jpg"), color: "bg-gray-500" },
    { name: "Capas      ", image: require("../Objects/Images/Capa(Babers).jpg"), color: "bg-blue-500" },
  ];

  return (
    <StyledView style={{ marginTop: 30 }}>
      <StyledView
        className={`flex ${isWeb ? 'flex-row flex-wrap justify-center' : 'flex-col'} ${isWeb ? 'justify-center' : 'items-center'}`}
        style={isWeb ? { marginHorizontal: 'auto', maxWidth: '1400px', padding: '0 20px' } : {}}
      >
        {categories.map((category, index) => (
          <StyledView
            key={index}
            className={`h-28 flex-row items-center mb-16 rounded-lg ${category.color} ${
              isWeb ? `w-${1 / numColumns} mx-8` : 'w-full'
            }`}
            style={isWeb && index !== categories.length - 1 ? { marginRight: '2rem' } : {}}
          >
            <StyledImage
              source={category.image}
              style={{ width: 150, height: 150, borderRadius: 100, overflow: "hidden" }}
            />
            <StyledText className="text-4xl font-semibold ml-3 text-white">{category.name}</StyledText>
          </StyledView>
        ))}
      </StyledView>
    </StyledView>
  );
};

export default CategoryBubbles;
