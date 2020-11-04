import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./static/pages/Home";

function App() {
  let routes;
  routes = (
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  );

  return (
    <div>
      <Router>
      {/* temporary header */}
        <div>
          <nav>
            <ul>
              <li>
                <Link to={"/home"}>Home Page</Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* main */}
        <main> {routes}</main>
      </Router>
    </div>
  );
}

export default App;
