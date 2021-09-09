import React, { Component } from "react";

class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.pozivApi = this.pozivApi.bind(this);
  }


  pozivApi = () => {
    alert("usaoasd u poziv APIa");
    let grad = this.props.grad
    let adresa="https://community-open-weather-map.p.rapidapi.com/weather?q="+grad+"%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml";

fetch(adresa, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "54844dcf6cmsh4da987bfe9e98aep174d83jsnc0c6a101636f"
	}
})
	

.then(response => {
  let temp =response.text()
	console.log(temp);
})
.catch(err => {
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

  componentDidUpdate(pP){
    if(this.props.grad!==pP.grad){
     this.pozivApi()
     console.log(this.props.grad);
    }
  }

  render() {
    return (
      <div>
        <h6>Evo me</h6>
      </div>
    );
  }
}

export default Api;
