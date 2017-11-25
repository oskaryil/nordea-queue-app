import axios from "axios";
import { SET_CURRENT_USER, SIGNUP_IS_LOADING, SIGNUP_SUCCESS } from "./types";
//import jwt_decode from 'jwt-decode'

axios.defaults.baseURL = "";

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    user
  };
};

export const signup = (data, props) => async dispatch => {
  console.log('data',data)
  try {
    dispatch({ type: SIGNUP_IS_LOADING });
    const { status } = await axios({
      method: "post",
      data: {
        payload: data.phoneNumber
      },
      headers: {},
      url: "/users/signup"
    });
    dispatch({ type: SIGNUP_SUCCESS });
  } catch (err) {
    console.log(err);
  }
};

//   return dispatch => {
//     dispatch({ type: LOGIN_IS_LOADING })
//     axios
//       .post(`url/users/signup`, data)
//       .then(res => {
//         const token = res.data
//         localStorage.setItem('token', token)
//         dispatch({ type: LOGIN_SUCCESS, payload: token })
//         setAuthorizationToken(token)
//         dispatch(setCurrentUser(jwt_decode(token)))
//         //window.location.href = '/'
//       })
//       .catch(err => {
//         console.log("ops")
//       })
//   }
// }
