import { combineReducers } from "redux";
import cars from "./cars_reducer";
import carDetail from "./car_detail";

const roorReducer = combineReducers({
  cars
});

export default roorReducer;
