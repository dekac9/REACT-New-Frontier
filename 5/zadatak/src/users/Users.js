import React, { Component } from 'react';
import User from './User';
// import Users from './users/User';


class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { ime: "Pera", godine: 30 },
        { ime: "Mica", godine: 35 },
        { ime: "Milos", godine: 37 },
      ],
      naslov: "Lista korisnika",
    };
    this.smanjiGodine=this.smanjiGodine.bind(this);
  }

  smanjiGodine = () => {
    const novoStanje = this.state.users.map((element) => {
      element.godine = element.godine - 1;
      return element;
    });
    this.setState({ novoStanje });
  };
  render() {
    return (
      <div>
        <button onClick={this.smanjiGodine}>Smanji godine</button>
        <h1>{this.state.naslov}</h1>
        {this.state.users.map((element) => {
          return <User godine={element.godine}>{element.ime}</User>;
        })}
      </div>
    );
  }
}

export default Users;
