import { combineReducers } from "redux";
// import { firstReducer } from "./routes/home/reducer";
import { sendCode } from "./routes/nordea-redirect/reducer";
import { userReducer } from "./routes/auth/reducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  // firstReducer,
  sendCode,
  userReducer,
  form: formReducer
});
