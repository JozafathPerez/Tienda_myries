import * as React from "react";
import { FlatList } from "react-native";
import ProductCard from "./ProductCard";

export default function ProductsList({ products }) {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ProductCard {...item} />}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
    />
  );
}
