import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CartList from "../components/CartList";

const Cart = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView className="flex-1 mx-5">
        <CartList />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default Cart;
