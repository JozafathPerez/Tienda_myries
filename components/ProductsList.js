import * as React from "react";
import { FlatList } from "react-native";
import { products } from "../Objects/Products";
import ProductCard from "./ProductCard";

export default function ProductsList() {
  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product.id.toString()}
      renderItem={({ item }) => <ProductCard {...item} />}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
    />
  );
}
