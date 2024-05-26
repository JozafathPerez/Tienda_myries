import React, { useContext } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
import { CartContext } from './Objects/CartContext';

const Logo = () => (
  <Image
    source={require('./Objects/Images/Logo(Myries).png')}
    style={{ width: 90, height: 50, marginLeft: 10 }}
  />
);

const CartIcon = ({ navigation }) => {
  const { getTotalItemsInCart } = useContext(CartContext);
  const cartItemsCount = getTotalItemsInCart();

  return (
    <View style={{ position: 'relative', marginRight: 20 }}>
      <Ionicons 
        name="cart-outline" 
        size={30} 
        color="black" 
        onPress={() => navigation.navigate('Carrito')} 
      />
      {cartItemsCount > 0 && (
        <View style={{ 
          position: 'absolute', 
          top: -5, 
          right: -5, 
          backgroundColor: 'red', 
          borderRadius: 10, 
          padding: 3 
        }}>
          <Text style={{ color: 'white' }}>
            {cartItemsCount}
          </Text>
        </View>
      )}
    </View>
  );
};

const IconContainer = ({ children }) => (
  <View style={styles.iconContainer}>
    {children}
  </View>
);

const commonHeaderOptions = ({ navigation }) => ({
  headerStyle: {
    height: 100,
  },
  headerTitleStyle: {
    fontSize: 24,
  },
  headerLeft: () => <Logo />,
  headerRight: () => (
    <IconContainer>
      <Ionicons 
        name="menu-outline" 
        size={30} 
        color="black" 
        onPress={() => navigation.openDrawer()}
      />
    </IconContainer>
  ),
  drawerIcon: () => false,
});

const homeOptions = ({ navigation }) => {
  const options = commonHeaderOptions({ navigation });
  return {
    ...options,
    headerRight: () => (
      <IconContainer>
        <Ionicons 
          name="search-outline" 
          size={30} 
          color="black" 
          onPress={() => navigation.navigate('Buscar')} 
          style={{ marginRight: 20 }}
        />
        <CartIcon navigation={navigation} />
        {options.headerRight()}
      </IconContainer>
    ),
  };
};

const otherScreenOptions = ({ navigation }) => {
  const options = commonHeaderOptions({ navigation });
  return {
    ...options,
    headerRight: () => (
      <IconContainer>
        <CartIcon navigation={navigation} />
        {options.headerRight()}
      </IconContainer>
    ),
  };
};

const accountOptions = ({ navigation }) => {
  const options = commonHeaderOptions({ navigation });
  return {
    ...options,
    drawerIcon: ({ focused, color, size }) => (
      <Ionicons
        name={focused ? "person-outline" : "person"}
        size={60}
        color={color}
      />
    ),
    headerRight: () => (
      <IconContainer>
        <CartIcon navigation={navigation} />
        {options.headerRight()}
      </IconContainer>
    ),
  };
};

const cartOptions = commonHeaderOptions;

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
});

export { cartOptions, homeOptions, otherScreenOptions, accountOptions };
