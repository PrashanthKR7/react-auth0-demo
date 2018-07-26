import React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";
import App from "./App";
import history from "./history";
import "./Styles/index.css";

render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);
