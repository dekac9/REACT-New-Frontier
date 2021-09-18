import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import GlobalState from './context/GlobalState';
import ProductPage from "./pages/ProductPage"
import CartPage from "./pages/CartPage"

import './App.css';

class App extends Component {
  render(){

  
  return (
<GlobalState>
  <BrowserRouter>
  <Switch>
    <Route path="/" component={ProductPage} exact></Route>
    <Route path="/cart" component={CartPage} exact></Route>
  </Switch>
  </BrowserRouter>
</GlobalState>
  );
}
}

export default App;
