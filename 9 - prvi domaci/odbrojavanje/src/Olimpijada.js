import React, { Component } from "react";

class Olimpijada extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preostale_sekunde: 0,
      preostale_minute: 0,
      preostali_sati: 0,
      preostali_dani: 0,
    };
    this.osvezavanje = this.osvezavanje.bind(this);
  }

  osvezavanje = () => {
    let pocetak_olimpijade = new Date("July 26, 2024 20:00:00 GMT+00:00");
    const pocetak_olimpijade_milisekunde = pocetak_olimpijade.getTime();
    let razlika = pocetak_olimpijade_milisekunde - this.props.sada_vreme;
    let sekunde = parseInt(Math.floor((razlika / 1000) % 60));
    let minuti = Math.floor((razlika / (1000 * 60)) % 60);
    let sati = Math.floor((razlika / (1000 * 60 * 60)) % 24);
    let dani = Math.floor(razlika / (1000 * 60 * 60 * 24));
    console.log(this.props.sada_vreme);
    this.setState({
      preostale_sekunde: sekunde,
      preostale_minute: minuti,
      preostali_sati: sati,
      preostali_dani: dani,
    });
  };

  componentDidMount() {
    this.osvezavanje();
  }

  componentDidUpdate(pP) {
    if (this.props.sada_vreme !== pP.sada_vreme) {
      this.osvezavanje();
    }
  }

  render() {
    return (
      <div>
        <h3>
          <p>Do olimpijade (26 Jul 2024 (Summer)) je ostalo jos: </p>
        </h3>
        <h2>
          Dana: {this.state.preostali_dani}, Sati: {this.state.preostali_sati},
          Minuta: {this.state.preostale_minute}, Sekundi:
          {this.state.preostale_sekunde}
        </h2>
      </div>
    );
  }
}

export default Olimpijada;
