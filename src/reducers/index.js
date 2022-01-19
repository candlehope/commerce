import { combineReducers } from "redux";
import authReducer from "./authReducer";
import listingReducer from "./listingReducer";
import mechanicsReducer from "./mechanicsReducer";
import conditionReducer from "./conditionReducer";

export default combineReducers({
  auth: authReducer,
  listings: listingReducer,
  mechanics: mechanicsReducer,
  condition: conditionReducer,
});
