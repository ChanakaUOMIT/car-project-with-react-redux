const URL_ROOT = "http://localhost:3004";

export function getCars(keywords) {
  console.log(`${URL_ROOT}/carsIndex?q=${keywords}`);

  const request = fetch(`${URL_ROOT}/carsIndex?q=${keywords}`, {
    method: "GET"
  }).then(response => response.json());

  //   action
  //   fetch -> jsonserver -> search -> return data
  //   send to reducer

  return {
    type: "SEARCH_CARS",
    payload: request
  };
}

export function carDetail(id) {
  console.log("actions : carDetails :");

  const request = fetch(`${URL_ROOT}/carsIndex?id=${id}`, {
    method: "GET"
  }).then(response => response.json());

  console.log("action : carDetails : request : ", request);

  return {
    type: "CAR_DETAIL",
    payload: request
  };
}

export function clearDetail() {
  return {
    type: "CLEAR_DETAIL",
    payload: []
  };
}
