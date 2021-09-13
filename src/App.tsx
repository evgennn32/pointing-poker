import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import { Footer } from "./component/Footer/Footer";
import { MainPage } from "./component/Pages/MainPage";
import Header from "./component/Header/Header";
import LobbyPage from "./component/Pages/LobbyPage";
import GamePage from "./component/Pages/GamePage";
import GameResultPage from "./component/Pages/GameResultPage";
import { gameSettings, initialData, issues, users } from "./TempData";

function App(): JSX.Element {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <Switch location={location}>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/lobby">
          <LobbyPage />
        </Route>
        <Route exact path="/game">
          <GamePage
            issues={issues}
            users={users}
            gameSettings={gameSettings}
            title={initialData.tile}
            currentUser={{
              id: "1",
              image: "test",
              firstName: "test",
              lastName: "test",
              position: "test",
              currentUser: true,
              ableToDelete: true,
              score: "test",
              scramMaster: true,
            }}
          />
        </Route>
        <Route exact path="/result">
          <GameResultPage />
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
