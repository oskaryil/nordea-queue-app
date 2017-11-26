import { combineReducers } from "redux";
import nordeaCallback from "./routes/nordea-redirect/reducer";
import authReducer from "./routes/auth/verify/reducer";
import { reducer as formReducer } from "redux-form";
import chat from './routes/chatbot-prep/reducer';

export default combineReducers({
  nordeaCallback,
  authReducer,
  form: formReducer,
    chat
});
