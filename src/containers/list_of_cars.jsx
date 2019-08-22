import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ListOfCars extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  listOfCars = ({ list }) => {
    console.log("list_of_cars : listOfCars : ", list);
    if (list) {
      return list.map(car => {
        return (
          <Link to={`/car/${car.id}`} key={car.id} className="car_item">
            <div className="left">
              <img src={`/images/${car.image}`} />
            </div>
            <div className="right">
              <h4>{car.model}</h4>
              <h6>{car.brand}</h6>
            </div>
          </Link>
        );
      });
    }
  };
  render() {
    console.log("ListOfCars : return : ", this.props);
    return <div>{this.listOfCars(this.props.cars)}</div>;
  }
}

function mapStateToProps(state) {
  console.log("list_of_cars : mapStateToProps ", state);
  return {
    cars: state.cars
  };
}

export default connect(
  mapStateToProps,
  null
)(ListOfCars);
