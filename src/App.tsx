import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import { Footer } from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import PlayingCard from "./component/Cards/PlayingCard";

function App(): JSX.Element {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <Switch location={location}>
        <Route exact path="/">
          Main page
          <PlayingCard
            value="11"
            closed={false}
            selected={false}
            type="regular"
          />
          <PlayingCard value="12" closed={false} selected={false} type="cup" />
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
