import axios from "axios";
import { SET_CURRENT_USER, SIGNUP_BEGIN, SIGNUP_SUCCESS } from "./types";
import setAuthorizationToken from "./setAuthorizationToken";

axios.defaults.baseURL = "http://localhost:4000/api";

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    user
  };
};

export const signup = (data, props) => async dispatch => {
  try {
    dispatch({ type: SIGNUP_BEGIN });
    const { data } = await axios({
      method: "post",
      data: {
        phoneNumber: data.phoneNumber
      },
      url: "/users/signup"
    });
    dispatch({ type: SIGNUP_SUCCESS });
  } catch (err) {
    console.error(err);
  }
};
