import axios from "axios";
import config from "../../config/config.js";

axios.defaults.baseURL = "http://localhost:4000/api";
import setAuthorizationToken from '../auth/setAuthorizationToken'

export const sendCode = code => async dispatch => {
  console.log('coddsadae', code)
  try {
    const { data } = await axios({
      method: "post",
      data: {
        code
        
      },
      url: "/nordea/auth",
      withCredentials: true
    });
    dispatch(setAuthorizationToken(code))
    dispatch({
      type: "CODE_SENT",
      code
    });
  } catch (err) {
    console.log(err);
  }
};
