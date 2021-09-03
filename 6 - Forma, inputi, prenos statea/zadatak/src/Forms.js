import React, { Component } from "react";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", age: null, errorMessage: "" };
    this.promeni=this.promeni.bind(this);
  }
  promeni = (e) => {
    let name = e.target.name;
    let vrednost = e.target.value;
    let err = "";

    if (name === "age") {
      if (vrednost !== "" && !Number(vrednost)) {
        err = "Niste uneli ispravne podatke";
      }
    //this.setState({godine:vrednost});  
    }
    // else{
    // this.setState({username:vrednost});
    // }
    // this.setState({errorMessage:err});
    
    //OVO JE URADJENO AKO U STATEU PISE GODINE UMESTO AGE
    this.setState({[name]:vrednost});
    this.setState({errorMessage:err})
  };

  render() {
    return (
      <div>
        <form>
          <h1>
            Dobar dan: {this.state.username}, imas {this.state.age}
          </h1>
          <p>
            Unesite username:
            <input type="text" name="username" onChange={this.promeni} />
          </p>
          <p>
            Unesite godine:
            <input type="text" name="age" onChange={this.promeni} />
          </p>
          {this.state.errorMessage}
        </form>
      </div>
    );
  }
}

export default Forms;
