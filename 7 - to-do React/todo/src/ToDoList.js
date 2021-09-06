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
  dodajUListu = () => {
    let nizEl = this.state.items;
    if (self._inputElement.value !== "") {
      nizEl.unshift({ text: self._inputElement.value, vreme: Date.now() });
      this.setState({items:nizEl})
    }
    self._inputElement.value="";
  };
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
