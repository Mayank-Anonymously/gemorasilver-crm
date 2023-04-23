import { host } from "../../../static";

export const GetAllRoom = () => {
  var myHeaders = new Headers();
  myHeaders.append("Content/type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  fetch(`${host}AddCategory`, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
