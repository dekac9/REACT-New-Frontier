import React, { Component } from 'react';
import ShopContext from './ShopContext';

class GlobalState extends Component {
  state={
    products:[
      {
        id: 1,
        title: "CLS",
        img: "img/product-1.png",
        price: 10,
        company: "Mercedes - Benz",
        info:
          "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0
      },
      {
        id: 2,
        title: "W-116",
        img: "img/product-2.jpg",
        price: 16,
        company: "Mercedes - Benz",
        info:
          "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0
      },
      {
        id: 3,
        title: "E-MZB",
        img: "img/product-3.jpg",
        price: 8,
        company: "Mercedes - Benz",
        info:
          "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0
      },
      {
        id: 4,
        title: "SLK-CABRIOLET",
        img: "img/product-4.png",
        price: 18,
        company: "Mercedes - Benz",
        info:
          "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0
      },
      {
        id: 5,
        title: "SLS",
        img: "img/product-5.jpg",
        price: 24,
        company: "Mercedes - Benz",
        info:
          "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0
      },
      {
        id: 6,
        title: "E-AVANTGARDE",
        img: "img/product-6.png",
        price: 17,
        company: "Mercedes - Benz",
        info:
          "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0
      },
      {
        id: 7,
        title: "E-200 W123",
        img: "img/product-7.jpg",
        price: 30,
        company: "Mercedes - Benz",
        info:
          "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0
      },
      {
        id: 8,
        title: "W-126",
        img: "img/product-8.jpg",
        price: 2,
        company: "Mercedes - Benz",
        info:
          "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0
      }
    ],
   cart:[]
  };
  

  dodajUKorpu = (product)=>{
console.log(product+"prvi korak");
const updatedCart = [...this.state.cart];
console.log(updatedCart)
const findIndex=updatedCart.findIndex((elem)=>elem.id==product.id)
if (findIndex<0){
  updatedCart.push({...product,quantity:1})
    //ako se menja parametar in cart dole, mora i u redu iznad da bude inCart:true
}else{
  const updatedItem={
    ...updatedCart[findIndex]
  }
  updatedItem.quantity++;
  let temp =updatedItem.price * updatedItem.quantity
  updatedItem.total = temp
  console.log(temp)
  //updatedItem.inCart = true;
  updatedCart[findIndex]=updatedItem;
  
}
this.setState({cart:updatedCart})
  }

izbaciIzKorpe = (product)=>{
    const updatedCart = [...this.state.cart];
    const findIndex=updatedCart.findIndex((elem)=>elem.id==product.id);
    const updatedItem=updatedCart[findIndex];
    updatedItem.quantity--;
    if(updatedItem.quantity<=0){
      updatedCart.splice(findIndex,1)
      }
    else{
      let temp =updatedItem.price * updatedItem.quantity
  updatedItem.total = temp
  console.log(temp)
      updatedCart[findIndex]=updatedItem;
    }
    this.setState({cart:updatedCart})
}

    



  render() { 
    return <ShopContext.Provider value={{
      products:this.state.products,
      cart:this.state.cart,
      dodaj:this.dodajUKorpu,
      izbaci:this.izbaciIzKorpe,
    }}>
{this.props.children}
    </ShopContext.Provider>;
  }
}
 
export default GlobalState;


