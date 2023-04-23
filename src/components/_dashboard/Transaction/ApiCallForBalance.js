import React, { useEffect } from "react";

const getAlltranscation = () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    userid: 2,
    type: "dr",
  });

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://10.10.8.53:7500/all/users/transactions", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
useEffect(() => getAlltranscation(), []);

export const ApiCallForBalance = () => {
  return <div>ApiCallForBalance</div>;
};
