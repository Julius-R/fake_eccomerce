import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import store from "./redux/index";
import { Provider, useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  return (
    <Provider store={store}>
      {console.log(store.getState())}
      <div>Test</div>
    </Provider>
  );
}
