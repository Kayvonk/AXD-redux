import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/detail" component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
