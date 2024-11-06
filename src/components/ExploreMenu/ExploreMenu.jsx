import { useContext } from "react";
import PropTypes from "prop-types";
import "./ExploreMenu.css";
import Context from "../../context/Context";

//explremenu sender props setcategory og category
// oppdaterer valg av kategori mens kategori er den nåværende
const ExploreMenu = ({ setCategory, category }) => {
  const { menu_list } = useContext(Context);

  //behandler valgt kategori , oppdaterer valg av kategori med den nye kategorien
  const handleCategoryClick = (menuName) => {
    setCategory((prev) => (prev === menuName ? "All" : menuName));
  };

  return (
    //hoved containern
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of gluten-free
        dishes. Our mission is to satisfy your cravings and elevate your dining
        experience, one delicious gluten-free meal at a time.
      </p>
      <div className="explore-menu-list">
        {menu_list?.map((item, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(item.menu_name)}
            className="explore-menu-list-item"
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={category === item.menu_name ? "active" : ""}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr className="explore-menu-hr" />
    </div>
  );
};

ExploreMenu.propTypes = {
  setCategory: PropTypes.func.isRequired,
  category: PropTypes.string,
};

export default ExploreMenu;
