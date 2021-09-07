import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import { Footer } from "./component/Footer/Footer";

function App(): JSX.Element {
  const location = useLocation();
  return (
    <div className="App">
      <Switch location={location}>
        <Route exact path="/">
          Main page
        </Route>
        <Route exact path="/404">
          404
        </Route>
        <Redirect to="/404" />
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
