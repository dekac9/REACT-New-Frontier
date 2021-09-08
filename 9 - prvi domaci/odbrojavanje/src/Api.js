import React, { Component } from 'react';

class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.pozivApi=this.pozivApi.bind(this); 
  }

 

//   posalji=()=>{

//   }

//   componentDidMount(){
//     console.log(props)
//     fetch("https://api.ambeedata.com/latest/by-city?city=Bengaluru", {
// 	"method": "GET",
// 	"headers": {
// 		"x-api-key": "API_KEY",
// 		"Content-type": "application/json"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });
//   }



  render() { 
    
    return ( <div>
      <h6>Evo me</h6>
    </div> );
  }
}
 
export default Api;