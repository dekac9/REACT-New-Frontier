import React, { Component } from "react";
import {HashRouter,NavLink,Route} from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";

class Main extends Component {

  render() {
    return (
      <HashRouter>
      <div>
        <h1>SinglePageAplication</h1>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li> 
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
        </ul>
        <div className="sadrzaj">
<Route path="/" component = {Home}/>
<Route path="about" component = {About}/>
<Route path="contact" component = {Contact}/>
        </div>
      </div>
</HashRouter>
    );
  }
}

export default Main;
