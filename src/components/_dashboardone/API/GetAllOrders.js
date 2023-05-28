import { host } from "../../../static";

export const GetAllOrders = ({ setOrders }) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  fetch(`${host}order/getAllOrders`, requestOptions)
    .then((response) => response.json())
    .then((result) => setOrders(result.response))
    .catch((error) => console.log("error", error));
};
