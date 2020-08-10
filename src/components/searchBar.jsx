import React, { Component } from "react";
import Movie from "./movie";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      text: "Lara Croft",
      movie: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.setState({ text: event.target.text });
    fetch(
      "http://www.omdbapi.com/?apikey=dab9f982&t=" +
        this.state.text.split(" ").join("+")
    )
      .then((res) => res.json())
      .then((data) => this.setState({ text: this.state.text, movie: data }));
    event.preventDefault();
  }

  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} />
          <input type="submit" value="Search" />
        </form>
        <Movie key={this.state.movie.imbdID} movs={this.state.movie} />
      </div>
    );
  }
}

export default SearchBar;
