import React, { Component } from "react";
import Danas from "./Danas";
import Olimpijada from "./Olimpijada";
import Api from "./Api";

class Vreme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trenutno_datum: "",
      trenutno_milisekunde: "",
      grad:"pocetno"
    };
    this.osvezanje = this.osvezanje.bind(this);
    this.onSubmit=this.onSubmit.bind(this)
  }

  componentDidMount() {
    let trenutno_datum = new Date();
    let trenutno_vreme = Date.now();
    const jsonDate = trenutno_datum.toString();
    this.setState({
      trenutno_datum: jsonDate,
      trenutno_milisekunde: trenutno_vreme,
    });
    setInterval(() => {
      this.osvezanje();
    }, 1000);
  }
  osvezanje = () => {
    let trenutno = new Date();
    let trenutno_vreme = Date.now();
    const jsonDate = trenutno.toString();
    this.setState({
      trenutno_datum: jsonDate,
      trenutno_milisekunde: trenutno_vreme,
    });
  };

onSubmit=()=>{
  let ime=document.getElementById('grad').value;
  this.setState({grad:ime})
  //console.log(ime)
}

  render() {
    return (
      <div>
        <Danas sada_datum={this.state.trenutno_datum}></Danas>
        <Olimpijada sada_vreme={this.state.trenutno_milisekunde}></Olimpijada>
        <div>
          <input id="grad"
            type="text"
            placeholder="Unesite ime zemlje"
          ></input>
          <button type="submit" onClick={this.onSubmit}>Add</button>
        </div>
        <Api grad={this.state.grad}></Api>
      </div>
    );
  }
}
export default Vreme;
