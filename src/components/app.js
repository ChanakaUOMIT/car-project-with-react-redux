import React, { Component } from "react";
import { ReactDOM } from "react-dom";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
// import Header from "../containers/header";
import Car from "./car";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* <Header /> */}
        <Switch>
          <Route path="/car/:id" component={Car} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
