import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "core-js/stable";
import "regenerator-runtime/runtime";

import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
