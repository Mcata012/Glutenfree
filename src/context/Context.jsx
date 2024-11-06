import { createContext, useState } from "react";
import { food_list, menu_list } from "../assets/assets";
import PropTypes from "prop-types";

// lager  produkter og håndeter det i handlekurven
export const Context = createContext(null);

//prop-types brukes til å validere at props er riktig eller sendt inn.
//her er cartitem en usestate tilstand som lagrer antall av hver vare i handlekurven.
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
  //fjerner fra handlekruven
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  //beregner totalpris for handlekurven og her henter vi alt fra item, cartimten info , food_list osv
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
  //henter info fra assets med constextvalue
  const contextValue = {
    food_list,
    menu_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    placeOrder,
  };

  //constext provider er bare en komponent som omgir andre komponenter
  //( hadde jeg ikke tatt med den så hadde jeg ikke kunne hentet conxtextvalue)
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

// Validerer children at den blir passet inn som en gyldig node
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
