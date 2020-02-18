import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./App.js";
import store from "./redux/store";
import "./styles/css/index.min.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
