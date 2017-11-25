import axios from "axios";
import { VERIFY_BEGIN, VERIFY_SUCCESS } from "./types";
// import setAuthorizationToken from "./setAuthorizationToken";

axios.defaults.baseURL = "http://localhost:4000/api";

export const verify = (values) => async dispatch => {
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
    dispatch({ type: VERIFY_SUCCESS, payload: data.user });
  } catch (err) {
    console.error(err);
  }
};
