import { useContext } from "react";
import PropTypes from "prop-types";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

//viser informasjon om varene i handlekurven , henter alt av bilde , navn etc .
const FoodItem = ({ image, name, price, desc, id }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(Context);

  // Debugging logs
  console.log("cartItems:", cartItems);
  console.log("assets:", assets);

  //viser konteksten, lar brukeren legge til eller fjerne produkter også fra handlekurven
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
        {!cartItems?.[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Add item to cart"
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              onClick={() => removeFromCart(id)}
              alt="Remove item from cart"
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              onClick={() => addToCart(id)}
              alt="Add more of this item"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-desc">{desc}</p>
        <p className="food-item-price">Kr {price}</p>
      </div>
    </div>
  );
};

// Optional: Add PropTypes for type-checking
FoodItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  desc: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default FoodItem;
