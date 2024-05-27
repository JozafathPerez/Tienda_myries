import React from "react";
import { View, Image, Text } from "react-native";
import { styled } from "nativewind";

const CategoryBubbles = () => {
  return (
    <View style={{ marginTop: 30 }}>
      {/* Ceras */}
      <View className="h-28 flex-row items-center mb-16 bg-red-500 rounded-lg">
        <Image
          source={require("../Objects/Images/CeraBlanca.jpg")}
          style={{ width: 150, height: 150, borderRadius: 75, overflow: "hidden" }}
        />
        <Text className="text-4xl font-semibold ml-3 text-white">Ceras</Text>
      </View>

      {/* Cuchillas */}
      <View className="h-28 flex-row items-center mb-16 bg-gray-500 rounded-lg">
        <Image
          source={require("../Objects/Images/Cuchilla(T-wide).jpg")}
          style={{ width: 150, height: 150, borderRadius: 75, overflow: "hidden" }}
        />
        <Text className="text-4xl font-semibold ml-3 text-white">Cuchillas</Text>
      </View>

      {/* Capas */}
      <View className="h-28 flex-row items-center mb-16 bg-blue-500 rounded-lg">
        <Image
          source={require("../Objects/Images/Capa(Babers).jpg")}
          style={{ width: 150, height: 150, borderRadius: 75, overflow: "hidden" }}
        />
        <Text className="text-4xl font-semibold ml-3 text-white">Capas</Text>
      </View>
    </View>
  );
};

export default CategoryBubbles;
