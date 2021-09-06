import React, { Component } from "react";
import FlipMove from 'react-flip-move';


class TodoItems extends Component {
  constructor(props) {
    super(props);
    this.kreirajTask=this.kreirajTask.bind(this);
    
  }
  kreirajTask = (item) => {
    return <li vreme={item.vreme} onClick={()=>(this.obrisiKomponentu(item.vreme))}>{item.text}<button>X</button></li>;
  };
  obrisiKomponentu(kljuc){
   this.props.delete(kljuc);
  }

  render() {
    let elementi=this.props.elementi;
    let listItems=elementi.map(this.kreirajTask);
    return (
      <ul className="theList">
        <FlipMove>
        {listItems}
        </FlipMove>
      </ul>
    );
  }
}

export default TodoItems;
