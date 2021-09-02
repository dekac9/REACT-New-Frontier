import React, { Component } from 'react';


class Article extends Component {

  render() { 
    return (<div>
      <h1>{this.props.data.title}</h1>
      <p>{this.props.data.desc}</p>
    </div>  );
  }
}
 
export default Article;