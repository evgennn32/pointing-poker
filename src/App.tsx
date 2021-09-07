import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import { Footer } from "./component/Footer/Footer";
import { MainPage } from "./component/MainPage/MainPage";

function App(): JSX.Element {
  const location = useLocation();
  return (
    <div className="App">
      <Switch location={location}>
        <Route exact path="/">
          <MainPage />
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
