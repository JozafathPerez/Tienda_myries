import React from "react";
import { View, Image, Text } from "react-native";
import { styled } from "nativewind";

const CategoryBubbles = () => {
  return (
    <View style={{ marginTop: 30 }}>
      {/* Ceras */}
      <View style={{height: 100, flexDirection: "row", alignItems: "center", marginBottom: 60, backgroundColor: "#FF0000", borderRadius: 10, padding: 10 }}>
        <Image
          source={require("../Objects/Images/CeraBlanca.jpg")}
          style={{ width: 150, height: 150, borderRadius: 75, marginRight: 50, overflow: "hidden" }}
        />
        <Text style={{ fontSize: 34, fontFamily: "ui-sans-serif"}}>Ceras</Text>
      </View>

      {/* Cuchillas */}
      <View style={{ height: 100, flexDirection: "row", alignItems: "center", marginBottom: 60, backgroundColor: "#FFFFFF", borderRadius: 10, padding: 10 }}>
        <Image
          source={require("../Objects/Images/Cuchilla(T-wide).jpg")}
          style={{ width: 150, height: 150, borderRadius: 75, marginRight: 50, overflow: "hidden" }}
        />
        <Text style={{ fontSize: 34, fontFamily: "ui-sans-serif" }}>Cuchillas</Text>
      </View>

      {/* Capas */}
      <View style={{ height: 100, flexDirection: "row", alignItems: "center", marginBottom: 30, backgroundColor: "#0043FA", borderRadius: 10, padding: 10 }}>
        <Image
          source={require("../Objects/Images/Capa(Babers).jpg")}
          style={{ width: 150, height: 150, borderRadius: 75, marginRight: 50, overflow: "hidden" }}
        />
        <Text style={{ fontSize: 34, fontFamily: "ui-sans-serif" }}>Capas</Text>
      </View>
    </View>
  );
};

export default CategoryBubbles;
