import { combineReducers } from "redux";

import { userItemReducer } from "./userItemReducer";

export const rootReducer = combineReducers({
  userItemReducer,
});
