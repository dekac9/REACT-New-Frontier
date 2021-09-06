import React, { Component } from 'react';
import IPAdress from './IPAdress';
var xhr;
class IpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      ip_adress:"...."
     }
     this.pokreniRequest=this.pokreniRequest.bind(this)
  }

componentDidMount(){
  xhr=new XMLHttpRequest();
  xhr.open("GET","https://ipinfo.io/json");
  xhr.send();
  xhr.addEventListener("readystatechange",this.pokreniRequest);
}
pokreniRequest(){
  if(xhr.readyState===4 && xhr.readyState===200){
  var response=JSON.parse(xhr.responseText);
  console.log(response);
  this.setState({ip_adress:response.ip})
} 

}
  render() { 
    return (<IPAdress ip={this.state.ip_adress}></IPAdress>)
  }

};
export default IpContainer; 