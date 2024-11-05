import { useState } from "react";
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
        <li
          className={menu === "home" ? "active" : ""}
          onClick={() => handleMenuClick("home")}
        >
          Home
        </li>
        <li
          className={menu === "menu" ? "active" : ""}
          onClick={() => handleMenuClick("menu")}
        >
          Menu
        </li>
        <li
          className={menu === "contact-us" ? "active" : ""}
          onClick={() => handleMenuClick("contact-us")}
        >
          Contact Us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={search_icon} alt="search" className="search_icon" />
        <div className="basket_icon">
          <img src={basket_icon} alt="basket_icon" />
          <div className="dot"></div>{" "}
          {}
        </div>
      </div>
      <button>Sign in</button>
    </div>
  );
};

export default NavBar;