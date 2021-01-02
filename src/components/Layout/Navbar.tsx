import React from 'react';
import { NavLink } from "react-router-dom";
import { routesUrl } from '../../app/Routes';
import Settings from './Settings';

const Navbar = () => {

  return (
    <div className="sidebar">      
      <div className="logo">
        <img src="logo.png" alt=""/>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to={routesUrl.Headers}>Headers</NavLink>
          </li>
          <li>
            <NavLink to={routesUrl.Products}>Products</NavLink>
          </li>
          <li>
            <NavLink to={routesUrl.Footers}>Footers</NavLink>
          </li>
        </ul>
      </nav>
      <Settings />
    </div>    
  );
}

export default Navbar;
