import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import gluten_free from "../../assets/gluten_free.png";
import search_icon from "../../assets/search_icon.png";
import {basket_icon} from "../../assets/basket_icon.png";

export const NavBar = () => {
  const [menu, setMenu] = useState("menu");

  const handleMenuClick = (item) => {
    setMenu(item);
  };

  return (
    <div className="navbar">
      <Link to="/" /><img
        className="logo"
        src={gluten_free}
        alt="logo"
        style={{ width: "70px", height: "auto" }}
      />
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => handleMenuClick("home")}
          className={menu === "home" ? "active" : ""}>Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => handleMenuClick("menu")}
          className={menu === "menu" ? "active" : ""}>Menu
        </a>
        <a
          href="#footer"
          onClick={() => handleMenuClick("contact")}
          className={menu === "contact" ? "active" : ""}>Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={search_icon} alt="search" className="search_icon" />
        <Link to="/cart" className="navbar-search-icon">
        <img src={basket_icon} alt="" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}>
          </div>
        </Link>
      <button>Sign in</button>
    </div>
    </div>
  );
};

export default NavBar;
