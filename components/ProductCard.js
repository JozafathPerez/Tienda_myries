import * as React from "react";
import { View, Text, Image } from "react-native";

export default function ProductCard({ image, category, title, price }) {
  return (
    <View className="flex-1 w-1/2 p-2 bg-slate-300 rounded-2xl m-2">
      <View className="rounded-2xl overflow-hidden">
        <Image source={{ uri: image }} className="h-40 w-30" />
      </View>
      <View className="mt-5">
        <Text numberOfLines={1} className="text-lg font-semibold">{title}</Text>
        <Text>{category}</Text>
        <Text className="text-2xl font-extrabold">₡ {price}</Text>
      </View>
    </View>
  );
}
