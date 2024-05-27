import React, { useContext, useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
import { CartContext } from './Objects/CartContext';
import SearchBar from './components/SearchBar';


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
    height: 110,
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

const cartOptions = ({ navigation }) => {
  const options = commonHeaderOptions({ navigation });
  return {
    ...options,
    headerRight: () => (
      <IconContainer>
        <Ionicons 
          name="reader-outline"
          size={30} 
          color="black" 
          onPress={() => navigation.navigate('Historial')} 
          style={{ marginRight: 20 }}
        />
        {options.headerRight()}
      </IconContainer>
    ),
  };
};

const homeOptions = ({ navigation }) => {
  const options = commonHeaderOptions({ navigation });
  const [searchVisible, setSearchVisible] = useState(false);

  const handleSearch = (query) => {
    setSearchVisible(false);
    navigation.navigate('Catalogo', { query });
  };

  const handleCloseSearch = () => {
    setSearchVisible(false);
  };

  return {
    ...options,
    headerTitle: searchVisible ? '' : 'Inicio',
    headerRight: () => (
      <IconContainer>
        {searchVisible ? (
          <SearchBar onSearch={handleSearch} onClose={handleCloseSearch} />
        ) : (
          <>
            <Ionicons 
              name="search-outline" 
              size={30} 
              color="black" 
              onPress={() => setSearchVisible(true)} 
              style={{ marginRight: 20 }}
            />
            <CartIcon navigation={navigation} />
          </>
        )}
        {options.headerRight()}
      </IconContainer>
    ),
  };
};

const catalogOptions = ({ navigation }) => {
  const options = commonHeaderOptions({ navigation });
  const [searchVisible, setSearchVisible] = useState(false);

  const handleSearch = (query) => {
    setSearchVisible(false);
    navigation.setParams({ query });
  };

  const handleCloseSearch = () => {
    setSearchVisible(false);
    navigation.setParams({ query });
  };

  return {
    ...options,
    headerTitle: searchVisible ? '' : 'Catalogo',
    headerRight: () => (
      <IconContainer>
        {searchVisible ? (
          <SearchBar onSearch={handleSearch} onClose={handleCloseSearch} />
        ) : (
          <>
            <Ionicons 
              name="search-outline" 
              size={30} 
              color="black" 
              onPress={() => setSearchVisible(true)} 
              style={{ marginRight: 20 }}
            />
            <CartIcon navigation={navigation} />
          </>
        )}
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


const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
});

export { cartOptions, homeOptions, otherScreenOptions, accountOptions, catalogOptions };
