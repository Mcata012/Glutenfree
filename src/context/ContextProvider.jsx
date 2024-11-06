import { useState } from "react";
import { Context } from "./Context";
import { food_list, menu_list } from "../assets/assets";
import PropTypes from "prop-types";

// ContextProvider-komponenten som omgir andre komponenter
const ContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  // Add to cart, her sjekker vi om varen er lagt inn fra før , om ikke så plusses det med 1
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  // Fjerner fra handlekurven
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // Beregner totalpris for handlekurven
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find(
          (product) => product.food_id === Number(item)
        );
        totalAmount += itemInfo.food_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const placeOrder = (deliveryData) => {
    console.log(deliveryData);
  };

  const contextValue = {
    food_list,
    menu_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    placeOrder,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

// Validerer at children er en gyldig node
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
