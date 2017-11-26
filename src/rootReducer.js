import { combineReducers } from "redux";
import nordeaCallback from "./routes/nordea-redirect/reducer";
import authReducer from "./routes/auth/verify/reducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  nordeaCallback,
  authReducer,
  form: formReducer
});
