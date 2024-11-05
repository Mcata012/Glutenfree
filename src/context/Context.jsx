/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { food_list,menu_list } from "../assets/assets";


// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext(null);

const ContextProvider = (props) => {

    const [cartItems,setCartItems] = useState({});
    
    
    const addToCart = (itemId) =>{
        if(!cartItems[itemId])
        {
            setCartItems((prev)=>({...prev,[itemId]:1}));
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        }
    }
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = food_list.find((product) => product.food_id === Number(item));
            totalAmount += itemInfo.food_price * cartItems[item];
          }
        }
        return totalAmount;
      }

    const placeOrder = (deliveryData) =>{

        console.log(deliveryData);
    }

    const contextValue = {
        food_list,
        menu_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        placeOrder
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
        )

}

export default ContextProvider;