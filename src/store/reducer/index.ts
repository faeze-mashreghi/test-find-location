import { combineReducers } from "redux";
import location from "./location";

const rootReducer = combineReducers({
  location,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
