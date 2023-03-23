import { applyMiddleware, compose, createStore } from "redux";
import { rootReducers } from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware())
);
