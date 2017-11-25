import axios from "axios";
import { SET_CURRENT_USER, SIGNUP_BEGIN, SIGNUP_SUCCESS } from "./types";

axios.defaults.baseURL = "http://localhost:4000/api";

export const signup = (data, props) => async dispatch => {
  try {
    dispatch({ type: SIGNUP_BEGIN });
    await axios({
      method: "post",
      data: {
        phoneNumber: data.phoneNumber
      },
      url: "/users/signup"
    });
    dispatch({ type: SIGNUP_SUCCESS });
    window.location.href = "/verify";
  } catch (err) {
    console.error(err);
  }
};
