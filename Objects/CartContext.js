import React, { createContext, useState, useContext } from 'react';
import Toast from 'react-native-toast-message';
import { OrderContext } from './OrderContext';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { addOrder } = useContext(OrderContext);
  const [orderIdCounter, setOrderIdCounter] = useState(1);

  const addToCart = (product) => {
    const productExists = cart.find(item => item.id === product.id);
    
    if (productExists) {
      Toast.show({
        type: 'success',
        text1: `${product.title} agregado al carrito`,
        text2: 'El producto ya se encuentra en el carrito',
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

  // Función para obtener el total de elementos en el carrito
  const getTotalItemsInCart = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const confirmPayment = () => {
    const orderId = orderIdCounter;
    setOrderIdCounter(orderIdCounter + 1); // Incrementar el contador de IDs
    const date = new Date().toLocaleDateString();
    const newOrder = { id: orderId, date, status: 'Pendiente', items: cart };

    addOrder(newOrder);
    clearCart();
    Toast.show({
      type: 'success',
      text1: 'Pedido confirmado',
      text2: 'Su pedido ha sido realizado con éxito',
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCart, removeFromCart, clearCart, getTotalItemsInCart, confirmPayment }}>
      {children}
    </CartContext.Provider>
  );
};
