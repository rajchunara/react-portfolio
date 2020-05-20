import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import './navbar.css';

export default function NavbarComponent(props) {
    const cntx = useLocation();
    const navlinkClass = cntx.pathname === '/' ? 'navlink-home' : 'navlink-other-pages'
    console.log(cntx);
    return (
        <div className="navbar">
          <ul className={`nav-links ${navlinkClass}`}>
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
        
      </div>
    )
}
