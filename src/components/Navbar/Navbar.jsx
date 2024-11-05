import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link if using React Router
import "./NavBar.css";
import gluten_free from "../../assets/gluten_free.png";
import search_icon from "../../assets/search_icon.png";
import basket_icon from "../../assets/basket_icon.png";

export const NavBar = () => {
  const [menu, setMenu] = useState("menu");

  const handleMenuClick = (item) => {
    setMenu(item);
  };

  return (
    <div className="navbar">
      <img
        className="logo"
        src={gluten_free}
        alt="logo"
        style={{ width: "70px", height: "auto" }}
      />
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => handleMenuClick("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => handleMenuClick("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#footer"
          onClick={() => handleMenuClick("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={search_icon} alt="search" className="search_icon" />
        <div className="basket_icon">
          <img src={basket_icon} alt="basket" />
          <div className="dot"></div>
        </div>
      </div>
      <button>Sign in</button>
    </div>
  );
};

export default NavBar;
