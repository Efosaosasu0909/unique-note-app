import { combineReducers } from "redux";
import auth from "./authReducer";
import { notes } from "./noteReducer";

export const reducers = combineReducers({
  auth,
  notes,
});
