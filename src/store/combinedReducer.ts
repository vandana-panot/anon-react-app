import { combineReducers } from "redux";
import authReducer from "./reducers/authSlice";
import cartReducer from "./reducers/cartSlice";;

export default combineReducers({
  auth: authReducer,
  cart: cartReducer
});
