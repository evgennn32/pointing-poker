import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import { Footer } from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Timer from "./component/Timer/Timer";

function App(): JSX.Element {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <Switch location={location}>
        <Route exact path="/">
          <Timer readOnly={false} />
        </Route>
        <Route exact path="/404">
          404
        </Route>
        <Redirect to="/404" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
