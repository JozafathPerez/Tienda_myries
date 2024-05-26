import React from "react";
import { SafeAreaView, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ProductsList from "../components/ProductsList";
import { Products } from "../Objects/Products";

const Home = () => {
  // IDs de los productos más populares
  const popularProductIds = [1, 4, 9, 8, 13, 12];

  // Filtrar los productos populares
  const popularProducts = Products.filter((product) =>
    popularProductIds.includes(product.id)
  );

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={{ flex: 1, marginHorizontal: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          Los productos más populares
        </Text>
        <ProductsList products={popularProducts} />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Home;
