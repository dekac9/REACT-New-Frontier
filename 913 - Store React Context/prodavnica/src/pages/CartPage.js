import React, { Component } from "react";
import Navigation from "../components/Navigation";
import ShopContext from "../context/ShopContext";

class CartPage extends Component {
  render() {
    return (
      <ShopContext.Consumer>
        {(context) => (
          <React.Fragment>
            <Navigation cartItemsNumber={context.cart.reduce((ukupno,elem)=>elem.quantity+ukupno),0}></Navigation>
            <main className="products">
            <ul>
                {context.cart.map((product) => (
                  <li key={product.id}>
                    <div>
                      <img src={product.img} alt={product.title}/>
                      
                      <strong>{product.title}</strong><strong>[{product.quantity} KOMADA]</strong><span className="cena"> Cena {product.total}$</span>
                    </div>
                    <div>
                      <button onClick={()=>context.izbaci(product)}>Izbaci iz korpe</button>
                    </div>
                  </li>
                ))}
              </ul>
            </main>
          </React.Fragment>
        )}
      </ShopContext.Consumer>
    );
  }
}

export default CartPage;
