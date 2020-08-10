import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/searchBar";
// Main question, only one movie or a list???
class App extends React.Component {
  //Always initialized to an empty page
  //No need for wrapper yet?

  render() {
    return <SearchBar />;
  }
}

export default App;
