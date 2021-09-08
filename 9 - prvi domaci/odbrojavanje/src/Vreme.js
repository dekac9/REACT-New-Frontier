import React, { Component } from 'react';
import Danas from './Danas';
import Olimpijada from './Olimpijada';

class Vreme extends Component {
  constructor(props) {
    super(props)
    this.state={
      trenutno_datum:'',
      trenutno_milisekunde:'',
    };
this.osvezanje=this.osvezanje.bind(this);
  }

  
  componentDidMount(){
    let trenutno_datum = new Date();
    let trenutno_vreme = Date.now();
    const jsonDate = trenutno_datum.toString()
    this.setState({trenutno_datum:jsonDate,trenutno_milisekunde:trenutno_vreme})
    setInterval(() => {
      this.osvezanje()
    }, 1000);

    
  }
  osvezanje=()=>{
    let trenutno = new Date();
    let trenutno_vreme = Date.now();
    const jsonDate = trenutno.toString()
    this.setState({trenutno_datum:jsonDate,trenutno_milisekunde:trenutno_vreme})
  
  }

  
  render() { 

    return (<div>
      <Danas sada_datum={this.state.trenutno_datum}></Danas>
      <Olimpijada sada_vreme={this.state.trenutno_milisekunde}></Olimpijada>
    </div>);
  }

} 
export default Vreme;