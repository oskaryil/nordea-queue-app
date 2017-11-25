import axios from "axios";
import { VERIFY_BEGIN, VERIFY_SUCCESS } from "./types";
// import setAuthorizationToken from "./setAuthorizationToken";

axios.defaults.baseURL = "http://localhost:4000/api";

export const verify = (data, props) => async dispatch => {
  try {
    dispatch({ type: VERIFY_BEGIN });
    await axios({
      method: "post",
      data: {
        verificationCode: data.verificationCode 
      },
      url: "/users/verifycode"
    });
    dispatch({ type: VERIFY_SUCCESS });
  } catch (err) {
    console.error(err);
  }
};
