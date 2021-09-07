import React, { Component } from 'react';
import Danas from './Danas';

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
      
      <Danas trenutno={this.state.datum}></Danas>
    </div>);
  }

} 
export default Vreme;