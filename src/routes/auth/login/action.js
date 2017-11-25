import axios from "axios";
import setAuthorizationToken from "./setAuthorizationToken";
import jwt_decode from "jwt-decode";

axios.defaults.baseURL = "http://localhost:4000/api";

export function setCurrentUser(user) {
  return {
    type: "SET_CURRENT_USER",
    user
  };
}

export const login = (data, props) => {
  return dispatch => {
    dispatch({ type: "LOGIN_IS_LOADING" });
    axios
      .post(`http://localhost:4000/api/users/login`, data)
      .then(res => {
        const token = res.data;
        localStorage.setItem("token", token);
        dispatch({ type: "LOGIN_SUCCESS", payload: token });
        setAuthorizationToken(token);
        dispatch(setCurrentUser(jwt_decode(token)));
        window.location.href = "/";
      })
      .catch(err => {
        console.log("error:", err);
      });
  };
};

// import axios from "axios";
// import { SET_CURRENT_USER, SIGNUP_BEGIN, SIGNUP_SUCCESS } from "./types";

// axios.defaults.baseURL = "http://localhost:4000/api";

// export const signup = (data, props) => async dispatch => {
//   try {
//     dispatch({ type: SIGNUP_BEGIN });
//     await axios({
//       method: "post",
//       data: {
//         phoneNumber: data.phoneNumber
//       },
//       url: "/users/signup"
//     });
//     dispatch({ type: SIGNUP_SUCCESS });
//     window.location.href = "/verify";
//   } catch (err) {
//     console.error(err);
//   }
// };
