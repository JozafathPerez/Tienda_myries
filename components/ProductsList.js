import * as React from "react";
import { FlatList } from "react-native";
import { Products } from "../Objects/Products";
import ProductCard from "./ProductCard";

export default function ProductsList() {
  return (
    <FlatList
      data={Products}
      keyExtractor={(Product) => Product.id.toString()}
      renderItem={({ item }) => <ProductCard {...item} />}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
    />
  );
}
