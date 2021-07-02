import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import store from "./redux/index";
import { Provider } from "react-redux";
import "./styles/index.css";
import App from "./App";

ReactDOM.render(
    <Provider store={store}><App /></Provider>, document.getElementById("app"));
