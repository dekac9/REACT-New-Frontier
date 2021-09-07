import React, { Component } from 'react';
import Danas from './Danas';

class Vreme extends Component {
  constructor(props) {
    super(props)
    this.state={
      datum:'trenascscutno'
    };

  }
 
  
  componentDidMount(){
    let trenutno = Date.now();
    console.log(trenutno)
    this.setState({datum:trenutno})

  }
  
  render() { 

    return (<div>
      
      <Danas trenutno={this.state.datum}></Danas>
    </div>);
  }

} 
export default Vreme;