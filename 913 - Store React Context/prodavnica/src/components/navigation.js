import React from 'react';
import {Navlink} from "react-router-dom"
import "./navigation.css"

const Navigation=(props)=>{
  <header className="navigation">
    <nav>
      <ul>
        <li>
          <Navlink to="/">Products</Navlink>
        </li>
        <li>
          <Navlink to="/cart">Cart ({props.cartItemsNumber})</Navlink>
        </li>
      </ul>

    </nav>
  </header>
}

export default Navigation;