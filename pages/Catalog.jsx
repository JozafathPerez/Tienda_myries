import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RNPickerSelect from "react-native-picker-select";
import ProductsList from "../components/ProductsList";
import { Products } from "../Objects/Products";

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortByPrice, setSortByPrice] = useState(null);
  const [originalProducts, setOriginalProducts] = useState(Products);

  const categories = [
    { label: "Todas", value: '' },
    { label: "Ceras", value: "Ceras" },
    { label: "Cuchillas", value: "Cuchillas" },
    { label: "Capas", value: "Capas" }
  ];

  let filteredProducts = originalProducts;

  // Aplicar filtro por categoría si no es "Todas"
  if (selectedCategory && selectedCategory !== '') {
    filteredProducts = originalProducts.filter(product => product.category === selectedCategory);
  }

  // Aplicar filtro de orden por precio
  if (sortByPrice !== null) {
    filteredProducts = [...filteredProducts].sort((a, b) => {
      if (sortByPrice) {
        return b.price - a.price; // Mayor a menor precio
      } else {
        return a.price - b.price; // Menor a mayor precio
      }
    });
  }

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={{ flex: 1, marginHorizontal: 10 }}>
        <View style={{ marginBottom: 10 }}>
          <RNPickerSelect
            onValueChange={(value) => setSelectedCategory(value)}
            items={categories}
            placeholder={{ label: "Selecciona una categoría", value: '' }}
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <RNPickerSelect
            onValueChange={(value) => setSortByPrice(value)}
            items={[
              { label: "Menor a mayor precio", value: false },
              { label: "Mayor a menor precio", value: true }
            ]}
            placeholder={{ label: "Ordenar por precio", value: null }}
          />
        </View>
        <ProductsList products={filteredProducts} />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Catalog;
