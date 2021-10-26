import React from "react";
import SignIn from "./Goodluck/SignIn";
import AdminSignIn from "./Goodluck/AdminSignIn";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/admin" component={AdminSignIn} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
