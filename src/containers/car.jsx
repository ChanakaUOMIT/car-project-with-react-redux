import React, { Component } from "react";
import { ReactDOM } from "react-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { carDetail, clearDetail } from "../actions";

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("Car : constructor : props : ", props);
    console.log("Car : props : ", props.carDetail);
  }

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    this.props.carDetail(this.props.match.params.id);
  }

  componentDidMount() {
    console.log("car : componentDidMount ", this.props);
  }

  componentWillUnmount() {
    this.props.clearDetail();
  }

  renderDetail = ({ detail }) => {
    if (detail) {
      return detail.map(item => {
        return (
          <div key={item.id} className="car_detail">
            <img src={`/images/${item.image}`} alt="a" />
            <div className="content">
              <h2>{item.model}</h2>
              <h4>{item.brand}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        );
      });
    }
  };

  render() {
    console.log("car : render : props ", this.props);
    return <div>{this.renderDetail(this.props.cars)}</div>;
  }
}

function mapStateToProps(state) {
  console.log("car : mapStateToProps : ", state);
  return {
    cars: state.cars
  };
}

//connect reducer
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ carDetail, clearDetail }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Car);
