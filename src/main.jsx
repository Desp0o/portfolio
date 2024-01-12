import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Provider } from "react-redux";
import store from "./store/redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <ScrollToTop />
    <React.Fragment>
      <Provider store={store}>
        <App />
      </Provider>
    </React.Fragment>
  </Router>
);
