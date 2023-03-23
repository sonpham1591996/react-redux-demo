import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart-reducer";
import { globalToastReducer } from "./global-toast/global-toast-reducer";

export const rootReducers = combineReducers({
  cartReducer,
  globalToastReducer,
});
