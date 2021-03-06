import React from 'react';
import {NavLink} from "react-router-dom";
import "./navigation.css"

const Navigation=(props)=>{
  return(
  <header className="navigation">
    <nav>
      <ul>
        <li>
          <NavLink to="/">Products</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart ({props.cartItemsNumber})</NavLink>
        </li>
      </ul>

    </nav>
  </header>
  )
}

export default Navigation;

