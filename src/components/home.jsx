import React, { Component } from "react";
import { ReactDOM } from "react-dom";
import { Switch, Route } from "react-router-dom";
import Header from "./../containers/header";
import "../app.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div>Home</div>
      </div>
    );
  }
}

export default Home;
