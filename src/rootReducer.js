import { combineReducers } from "redux";
// import { firstReducer } from "./routes/home/reducer";
import { sendCode } from "./routes/nordea-redirect/reducer";
import authReducer from "./routes/auth/verify/reducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  // firstReducer,
  sendCode,
  authReducer,
  form: formReducer
});
