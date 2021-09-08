import React, { Component } from 'react';
import Danas from './Danas';
import Olimpijada from './Olimpijada';

class Vreme extends Component {
  constructor(props) {
    super(props)
    this.state={
      datum:''
    };
this.osvezanje=this.osvezanje.bind(this);
  }

  
  componentDidMount(){
    let trenutno = new Date();
    const jsonDate = trenutno.toString()
    this.setState({datum:jsonDate})
    setInterval(() => {
      this.osvezanje()
    }, 1000);

    
  }
  osvezanje=()=>{
    let trenutno = new Date();
    const jsonDate = trenutno.toString()
    this.setState({datum:jsonDate})
  }

  
  render() { 

    return (<div>
      <Danas sada={this.state.datum}></Danas>
      <Olimpijada sada={this.state.datum}></Olimpijada>
    </div>);
  }

} 
export default Vreme;