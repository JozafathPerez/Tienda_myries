import * as React from 'react';
import { FlatList } from 'react-native';
import CartCard from './CartCard';

export default function CartList({ products }) {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <CartCard product={item} />}
      numColumns={1}
    />
  );
}
