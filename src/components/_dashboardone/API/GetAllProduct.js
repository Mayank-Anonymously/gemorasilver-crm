import { host } from "../../../static";

export const GetAllProduct = ({ setProduct }) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  fetch(`${host}getAllProducts`, requestOptions)
    .then((response) => response.json())
    .then((result) => setProduct(result.response))
    .catch((error) => console.log("error", error));
};
