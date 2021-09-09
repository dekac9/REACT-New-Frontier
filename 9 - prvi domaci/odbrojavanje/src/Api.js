import React, { Component } from "react";

class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ispis: 0,
    };
    this.pozivApi = this.pozivApi.bind(this);
    this.osvezi=this.osvezi.bind(this)
  }
  
  osvezi = (a) => {
    this.setState({ ispis: a });
  };
  pozivApi = () => {
    alert("usaoasd u poziv APIa");
    let grad = this.props.grad;
    let adresa =
      "https://api.covid19api.com/total/country/" +
      grad +
      "/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z";

    fetch(adresa, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "54844dcf6cmsh4da987bfe9e98aep174d83jsnc0c6a101636f",
      },
    })
      .then(function (response) {
        var temp;
        response.json().then((data) => {
          temp = data[data.length - 1].Cases;
          console.log(temp)
          this.osvezi(temp);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  componentDidMount() {
    if (this.props.grad !== "pocetno") {
      this.pozivApi();
    } else {
      alert("Ukucaj grad da vidis API");
      //
    }
  }

  componentDidUpdate(pP) {
    if (this.props.grad !== pP.grad) {
      this.pozivApi();
      console.log(this.props.grad);
    }
  }

  render() {
    return (
      <div>
        <h6 id="ispis">{this.state.ispis}</h6>
      </div>
    );
  }
}

export default Api;
