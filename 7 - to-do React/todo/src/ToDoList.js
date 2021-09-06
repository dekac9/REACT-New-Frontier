import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./Todolist.css";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  let dodajUListu=()=>{

  }
  render() {
    var self = this;
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.dodajUListu}>
            <input
              ref={(a) => (self._inputElement = a)}
              type="text"
              placeholder="Unesite task"
            ></input>
            <button type="submit">Add</button>
          </form>
        </div>
        <TodoItems ementi={this.state.items}></TodoItems>
      </div>
    );
  }
}

export default ToDoList;
