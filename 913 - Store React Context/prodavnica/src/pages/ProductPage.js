import React, { Component } from "react";
import ShopContext from "../context/ShopContext";
import Navigation from "../components/navigation";
import "./product.css";

class ProductPage extends Component {
  render() {
    return (
      <ShopContext.Consumer>
        {(context) => (
          <React.Fragment>
            <Navigation
              cartItemsNumber={context.cart.reduce((acc, curItem) => {
                return acc + curItem.quantity;
              }, 0)}
            ></Navigation>

            <main className="products">
              <ul>
                {context.products.map((product) => (
                  <li key={product.id}>
                    <div>
                      <img src={product.img} alt={product.title}/>
                      <strong>{product.title}</strong> Cena {product.price}$
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

export default ProductPage;
