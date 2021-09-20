import React, { Component } from "react";
import Navigation from "../components/Navigation";
import ShopContext from "../context/ShopContext";
import styled from "styled-components";

class CartPage extends Component {
  render() {
    return (
      <ShopContext.Consumer>
        {(context) => (
          <React.Fragment>
            <Navigation
              cartItemsNumber={context.cart.reduce((ukupno, elem) => {
                return elem.quantity + ukupno;
              }, 0)}
            ></Navigation>
          
            <main className="products">
              <ul>
                {context.cart.map((product) => (
                  <li key={product.id}>
                    <div>
                      <img src={product.img} alt={product.title} />

                      <strong>{product.title}</strong>
                      <strong>[{product.quantity} KOMADA]</strong>
                      <span className="cena"> Cena {product.total}$</span>
                    </div>
                    <div>
                      <Button onClick={() => context.izbaci(product)}>
                        Izbaci iz korpe
                      </Button>
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

const Button = styled.button`
display: inline-block;
border-radius: 3px;
padding: 0.5rem 0;
margin: 0.5rem 1rem;
width: 11rem;
background: transparent;
color: white;
border: 2px solid white;`