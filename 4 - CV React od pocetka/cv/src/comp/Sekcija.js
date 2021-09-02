import React, { Component } from "react";
import Article from "./Article";

class Sekcija extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <h2>{this.props.name}</h2>
        {this.props.articles
          .filter((article) => article.show !== false)
          .map((article) => {
            return <Article data={article}></Article>;
          })}
      </div>
    );
  }
}

export default Sekcija;
