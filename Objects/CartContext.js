import React, { createContext, useState } from 'react';
import Toast from 'react-native-toast-message';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const productExists = cart.find(item => item.id === product.id);
    
    if (productExists) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
      Toast.show({
        type: 'success',
        text1: `${product.title} agregado al carrito`,
        text2: 'Cantidad aumentada',
      });
    } else {
      setCart([...cart, { ...product, quantity: 1, paid: false }]);
      Toast.show({
        type: 'success',
        text1: `${product.title} agregado al carrito`,
      });
    }
  };

  const updateCart = (productId, newQuantity) => {
    setCart(cart.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
