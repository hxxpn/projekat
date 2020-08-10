import React, { Component } from "react";

class Movie extends Component {
  
  //api key dab9f982
  

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{this.props.movs.Title}</h2>
          <p className="card-subtitle mb-2 text-muted">{this.props.movs.Director}</p>
        </div>
      </div>
    );
  }
}

export default Movie;
