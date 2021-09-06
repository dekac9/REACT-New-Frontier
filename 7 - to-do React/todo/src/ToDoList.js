import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./Todolist.css";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.dodajUListu=this.dodajUListu.bind(this)
    this.obrisi=this.obrisi.bind(this);
  }
  obrisi=(el)=>{

    let revidirano = this.state.items.filter((elem)=> elem.vreme !== el);
    this.setState({items:revidirano})
    
      }
  dodajUListu = (e) => {
    e.preventDefault();
    let nizEl = this.state.items;
    if (this._inputElement.value !== "") {
      nizEl.unshift({ text: this._inputElement.value, vreme: Date.now() });
      this.setState({items:nizEl})
    }
    this._inputElement.value="";
  };
  render() {

    return (
      
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.dodajUListu}>
            <input
              ref={(a) => (this._inputElement = a)}
              type="text"
              placeholder="Unesite task"
            ></input>
            <button type="submit">Add</button>
          </form>
        </div>
        <TodoItems elementi={this.state.items} delete={this.obrisi}></TodoItems>
      </div>
    );
  }
}

export default ToDoList;
