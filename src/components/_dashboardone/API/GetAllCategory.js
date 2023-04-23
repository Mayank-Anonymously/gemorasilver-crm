import { host } from "../../../static";

export const GetAllCategory = ({ setCategory }) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  fetch(`${host}getAllCategories`, requestOptions)
    .then((response) => response.json())
    .then((result) => setCategory(result.response))
    .catch((error) => console.log("error", error));
};
