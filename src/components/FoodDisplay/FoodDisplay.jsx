import { useContext } from 'react';
import PropTypes from 'prop-types';
import './FoodDisplay.css';
import FoodItem from '../FoodItem/FoodItem';
import { Context } from '../../context/Context';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(Context);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item) => {
          if (category === "All" || category === item.food_category) {
            // Render all dishes that match the category
            return (
              <FoodItem
                key={item.food_id}
                image={item.food_image}
                name={item.food_name}
                desc={item.food_desc}
                price={item.food_price}
                id={item.food_id}
              />
            );
          }
          return null; // Ensure the map function always returns a value
        })}
      </div>
    </div>
  );
};

// Define PropTypes for FoodDisplay
FoodDisplay.propTypes = {
  category: PropTypes.string.isRequired, // Mark as required if category is essential
};

export default FoodDisplay;
