import * as React from "react";
import { FlatList } from "react-native";
import { Products } from "../Objects/Products";
import CartCard from "./CartCard";

export default function ProductsList() {
  return (
    <FlatList
      data={Products}
      keyExtractor={(Product) => Product.id.toString()}
      renderItem={({ item }) => <CartCard {...item} />}
      numColumns={1}
    />
  );
}
