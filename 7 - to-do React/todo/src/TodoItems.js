import React, { Component } from "react";
import ToDoList from "./ToDoList";

class TodoItems extends Component {
  constructor(props) {
    super(props);
    this.kreirajTask=this.kreirajTask.bind(this);
  }
  kreirajTask = (item) => {
    return <li vreme={item.vreme}>{item.text}</li>;
  };
  render() {
    let elementi=this.props.elementi;
    let listItems=elementi.map(this.kreirajTask);
    return (
      <ul className="theList">
        <li>{listItems}</li>
      </ul>
    );
  }
}

export default ToDoList;
