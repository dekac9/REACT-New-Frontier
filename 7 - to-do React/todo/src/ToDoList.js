import React, { Component } from "react";
import "./Todolist.css";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form>
            <input type="text" placeholder="Unesite task"></input>
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ToDoList;
