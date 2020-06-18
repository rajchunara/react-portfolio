import React, { useState } from "react";
// import { NavLink, useLocation } from "react-router-dom";
import "./navbar.css";
const vanillaSmoothie = require("vanilla-smoothie");

export default function NavbarComponent(props) {
  const [burgerMenu, setBurgerMenu] = useState(false);

  const burgerMenuClass = burgerMenu ? "nav-active" : "";
  const burgerActiveClass = burgerMenu ? "burger-active" : "";

  const toggleBurger = () => {
    setBurgerMenu((prev) => !prev);
    console.log(burgerMenu);
  };

  //When use react-router
  //Get current location
  //   const cntx = useLocation();
  var cntx = {
    pathname: "/",
  };

  //Assign className based on location
  const navlinkClass =
    cntx.pathname === "/" ? "navlink-home" : "navlink-other-pages";

  const burgerClass =
    cntx.pathname === "/" ? "burger-home" : "burger-other-pages";

  return (
    <div className="navbar">
      <ul className={`nav-links ${navlinkClass} ${burgerMenuClass}`}>
        {/* Setup for react-router */}
        {/* <NavLink to="/" exact>
                <li>Home  </li>
            </NavLink>

            <NavLink to="/about" exact>
                <li>About </li>
            </NavLink>

            <NavLink to="/projects" exact>
                <li>Projects  </li>
            </NavLink> */}

        <li onClick={() => vanillaSmoothie.scrollTo("#homeCmp")}>
          <a href="#homeCmp">Home</a>
        </li>
        <li onClick={() => vanillaSmoothie.scrollTo("#aboutCmp")}>
          <a href="#aboutCmp">About</a>
        </li>
        <li onClick={() => vanillaSmoothie.scrollTo("#projectCmp")}>
          <a href="#projectCmp">Projects</a>
        </li>
      </ul>

      <div className={`burger  ${burgerActiveClass}`} onClick={toggleBurger}>
        <div className={`line1 ${burgerClass}`}></div>
        <div className={`line2 ${burgerClass}`}></div>
        <div className={`line3 ${burgerClass}`}></div>
      </div>
    </div>
  );
}
