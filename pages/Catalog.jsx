import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RNPickerSelect from "react-native-picker-select";
import { Ionicons } from '@expo/vector-icons';
import ProductsList from "../components/ProductsList";
import { Products } from "../Objects/Products";
import { styled } from 'nativewind';

const StyledView = styled(View);

const Catalog = ({ route }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortByPrice, setSortByPrice] = useState(null);
  const [originalProducts, setOriginalProducts] = useState(Products);
  const [filteredProducts, setFilteredProducts] = useState(Products);
  const [searchQuery, setSearchQuery] = useState('');
  const { width } = useWindowDimensions();
  const isWideScreen = width >= 768; // 768px es un ancho común para tablets o vistas web

  const categories = [
    { label: "Todas", value: '' },
    { label: "Ceras", value: "Ceras" },
    { label: "Cuchillas", value: "Cuchillas" },
    { label: "Capas", value: "Capas" }
  ];

  useEffect(() => {
    if (route.params?.query !== undefined) {
      setSearchQuery(route.params.query);
    }
  }, [route.params?.query]);

  useEffect(() => {
    let filtered = originalProducts;

    if (selectedCategory && selectedCategory !== '') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (sortByPrice !== null) {
      filtered = filtered.sort((a, b) => sortByPrice ? b.price - a.price : a.price - b.price);
    }

    if (searchQuery) {
      filtered = filtered.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, sortByPrice, searchQuery, originalProducts]);

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={{ flex: 1, marginHorizontal: 10 }}>
        <StyledView className={isWideScreen ? "flex-row mb-2 justify-between items-center" : "mb-2"}>
          <StyledView className={isWideScreen ? "flex-1 mr-2" : ""}>
            <RNPickerSelect
              onValueChange={(value) => setSelectedCategory(value)}
              items={categories}
              placeholder={{ label: "Selecciona una categoría", value: '' }}
            />
          </StyledView>
          <StyledView className={isWideScreen ? "flex-1 ml-2" : ""}>
            <RNPickerSelect
              onValueChange={(value) => setSortByPrice(value)}
              items={[
                { label: "Menor a mayor precio", value: false },
                { label: "Mayor a menor precio", value: true }
              ]}
              placeholder={{ label: "Ordenar por precio", value: null }}
            />
          </StyledView>
        </StyledView>
        {searchQuery ? (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Text style={{ fontSize: 18, marginRight: 10 }}>
              Resultados para "{searchQuery}"
            </Text>
            <TouchableOpacity onPress={handleClearSearch}>
              <Ionicons name="trash-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        ) : null}
        <ProductsList products={filteredProducts} />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Catalog;
