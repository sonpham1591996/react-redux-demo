import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { ListProducts } from "./components/list-products";
import { ShoppingCart } from "./components/shopping-cart";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store/store";

const routers = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
  {
    path: "/products",
    element: <ListProducts />,
  },
  {
    path: "/cart",
    element: <ShoppingCart />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routers} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
