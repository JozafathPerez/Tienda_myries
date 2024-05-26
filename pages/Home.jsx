import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ProductsList from "../components/ProductsList";

const Home = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView className="flex-1 mx-5">
        <ProductsList />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Home;
