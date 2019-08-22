import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getCars } from "./../actions";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }

  searchCars = event => {
    event.preventDefault();
    console.log("header : searchCars : ", this.state);
  };

  handleChange = event => {
    this.setState({ keyword: event.target.value });
  };

  componentDidMount() {
    console.log("header handleChange : cdm :", this.state);
  }
  render() {
    console.log("header handleChange : ", this.state);

    return (
      <div className="main_search">
        <form onSubmit={this.searchCars}>
          <input
            type="text"
            value={this.state.keyword}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

// mapStateToProps={
//   return(

//   )
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCars }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(Header);
