import axios from "axios";
import { VERIFY_BEGIN, VERIFY_SUCCESS } from "./types";
import setAuthorizationToken from "../setAuthorizationToken";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER } from "./types";
import { route } from 'preact-router'

axios.defaults.baseURL = "http://localhost:4000/api";

export function setCurrentUser(user) {
  console.log(user)
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export const verify = values => async dispatch => {
  try {
    dispatch({ type: VERIFY_BEGIN });
    const { data } = await axios({
      method: "post",
      data: {
        verificationCode: values.verificationCode
      },
      url: `/users/verifycode`,
      withCredentials: true
    });
    setAuthorizationToken(data.user.token);
    dispatch(setCurrentUser(jwt_decode(data.user.token)));
    dispatch({ type: VERIFY_SUCCESS, payload: data.user });
    route("/nordea", true)

  } catch (err) {
    console.error(err);
  }
};
