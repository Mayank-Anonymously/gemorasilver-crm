import jwtDecode from "jwt-decode";
import { verify, sign } from "jsonwebtoken";
//
import axios from "./axios";

// ----------------------------------------------------------------------

const isValidToken = (jwttoken) => {
  if (!jwttoken) {
    return false;
  }

  const decoded = jwtDecode(jwttoken);
  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

//  const handleTokenExpired = (exp) => {
//   let expiredTimer;

//   window.clearTimeout(expiredTimer);
//   const currentTime = Date.now();
//   const timeLeft = exp * 1000 - currentTime;
//   console.log(timeLeft);
//   expiredTimer = window.setTimeout(() => {
//     console.log('expired');
//     // You can do what ever you want here, like show a notification
//   }, timeLeft);
// };

const setSession = (jwttoken) => {
  if (jwttoken) {
    localStorage.setItem("jwttoken", jwttoken);
    axios.defaults.headers.common.Authorization = `Bearer ${jwttoken}`;
    // This function below will handle when token is expired
    // const { exp } = jwtDecode(jwttoken);
    // handleTokenExpired(exp);
  } else {
    localStorage.removeItem("jwttoken");
    delete axios.defaults.headers.common.Authorization;
  }
};

export { isValidToken, setSession, verify, sign };
