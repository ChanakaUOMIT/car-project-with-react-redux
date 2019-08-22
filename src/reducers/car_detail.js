export default function(state = [], action) {
  console.log("cars_reducers : action ", action);
  switch (action.type) {
    case "CAR_DETAIL":
      return action.payload;
    default:
      return state;
  }
}
