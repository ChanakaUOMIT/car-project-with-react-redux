import React, { Component } from "react";
import { ReactDOM } from "react-dom";
import { Switch, Route } from "react-router-dom";
import Header from "./../containers/header";
import "../app.css";
import ListOfCars from "../containers/list_of_cars";

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
        <ListOfCars />
      </div>
    );
  }
}

export default Home;
