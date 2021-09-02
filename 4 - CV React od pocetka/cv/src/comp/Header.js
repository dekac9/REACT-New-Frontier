import React, { Component } from 'react';
import slika from '../img/profile.png';

class Header extends Component {
  render() { 
    console.log(this.props);
    return (<div>
      <h1>{this.props.ime} {this.props.prezime}</h1>
      <img src={slika}></img>
      <div>
        <span>{this.props.zemlja}</span>

      </div>
      <div>
        <span>{this.props.grad}</span>
        
      </div>
      <div>
        <span>{this.props.ulica} {this.props.broj}</span>
        
      </div>
    </div>  );
  }
}
 
export default Header;





