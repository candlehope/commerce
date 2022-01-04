import { combineReducers } from "redux";
import authReducer from "./authReducer";
import listingReducer from "./listingReducer";
import mechanicsReducer from "./mechanicsReducer";

export default combineReducers({
  auth: authReducer,
  listings: listingReducer,
  mechanics: mechanicsReducer,
});
