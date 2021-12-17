import { combineReducers } from "redux";
import login from "./loginReducer";
import user from "./userReducer";
import club from "./clubReducer";
import error from "./errorReducer";

const rootReducer = combineReducers({
  login,
  user,
  club,
  error,
  // ...reducers
});

export default rootReducer;
