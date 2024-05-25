import { Text, StyleSheet, View } from "react-native";

export function Catalog() {
  return (
    <View style={styles.container}>
      <Text>Catalogo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});