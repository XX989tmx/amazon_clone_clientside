import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import React from "react";
import "./App.css";

function App() {
  let routes;
  routes = (
    <Switch>
      <Route></Route>
    </Switch>
  );

  return (
    <div>
      <Router>{routes}</Router>
    </div>
  );
}

export default App;
