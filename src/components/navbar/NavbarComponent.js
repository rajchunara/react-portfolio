import React,{useState} from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import './navbar.css';

export default function NavbarComponent(props) {
    const [burgerMenu, setBurgerMenu] = useState(false);

    const burgerMenuClass = burgerMenu ? 'nav-active' : '';
    const burgerActiveClass = burgerMenu ? 'burger-active': ''

    const toggleBurger=()=>{
        setBurgerMenu(prev => !prev);
        console.log(burgerMenu)
    }

    //Get current location
    const cntx = useLocation();

    //Assign className based on location
    const navlinkClass = cntx.pathname === '/' ? 'navlink-home' : 'navlink-other-pages';

    const burgerClass = cntx.pathname === '/' ? 'burger-home' : 'burger-other-pages';


    return (
        <div className="navbar">
          <ul className={`nav-links ${navlinkClass} ${burgerMenuClass}`}>
            <NavLink to="/" exact>
                <li>Home  </li>
            </NavLink>

            <NavLink to="/about" exact>
                <li>About </li>
            </NavLink>

            <NavLink to="/projects" exact>
                <li>Projects  </li>
            </NavLink>
          </ul> 

          <div className={`burger  ${burgerActiveClass}`} onClick={toggleBurger}>
              <div className={`line1 ${burgerClass}`}></div>
              <div className={`line2 ${burgerClass}`}></div>
              <div className={`line3 ${burgerClass}`}></div>
            </div>              
      </div>
    )
}
