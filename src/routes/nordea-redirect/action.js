import axios from "axios";
import config from "../../config/config.js";

export const sendCode = code => async dispatch => {
  try {
    await axios.post("", code);
    const data = res.data;
    dispatch({
      type: "SENDING_CODE",
      data
    });
  } catch (err) {
    console.log(err);
  }
};
