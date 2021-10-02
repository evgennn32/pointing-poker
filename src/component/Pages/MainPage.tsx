import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import { Button } from "../Button/Button";
import { PopUpConnectToLobby } from "../PopUps/PopUpConnectToLobby";
import "reactjs-popup/dist/index.css";
import Chat from "../Chat/Chat";
import { useDispatch, useSelector } from "react-redux";
import { GameRoomEntity } from "../../models/GameRoomEntity";
import { RootState } from "../../app/store";
import { Redirect } from "react-router";
import { getUrlParam } from "../../shared/helpers";
import User from "../../models/User";
import { joinGame } from "../../app/slices/gameSlice";
import Loader from "../Loader/Loader";
import { Error } from "../PopUps/PopUps.styled";
import {
  Content,
  Input,
  InputWrapper,
  Label,
  Main,
  MainLogo,
  MainPageTitle,
} from "./MainPage.styled";

export const MainPage = (): JSX.Element => {
  const [connectPopUpOpen, setConnectPopUpOpen] = useState(false);
  const [connectUrl, setConnectUrl] = useState("");
  const [correctURL, setCorrectUrl] = useState(true);
  const dispatch = useDispatch();
  const game = useSelector<RootState, GameRoomEntity>(
    (state: { game: GameRoomEntity }) => state.game,
  );
  const user = useSelector<RootState, User>(
    (state: { user: User }) => state.user,
  );
  useEffect(() => {
    if (game.roomID && !game.error && !game.isLoading) {
      setConnectPopUpOpen(true);
    }
  }, [game]);
  if (game.roomID && user.id) {
    return <Redirect to="/lobby" />;
  }
  const connectHandler = (): void => {
    const gameId = getUrlParam(connectUrl, "gameId");
    if (game.roomID) {
      return setConnectPopUpOpen(true);
    }
    if (gameId) {
      dispatch(joinGame(gameId));
    } else {
      setCorrectUrl(false);
    }
  };

  const closeConnectModal = (): void => setConnectPopUpOpen(false);

  return (
    <Main>
      <Loader show={game.isLoading ? game.isLoading : false} />
      <Chat />
      <MainLogo src="./images/MainLogo.png" />
      <Content>
        <MainPageTitle>Start your planning:</MainPageTitle>
        <Label>
          Create session:
          <Popup
            trigger={
              <Button textContent="Start new game" isLightTheme={false} />
            }
            position="right center"
            nested
            modal
          >
            {(close: () => void) => (
              <PopUpConnectToLobby
                close={close}
                createNewSession={true}
                dispatch={dispatch}
              />
            )}
          </Popup>
        </Label>
        <MainPageTitle>OR</MainPageTitle>
        <Label>
          Connect to lobby by URL:
          <InputWrapper>
            <Input
              value={connectUrl}
              onChange={(event) => {
                if (event.currentTarget.value) {
                  setConnectUrl(event.currentTarget.value);
                }
              }}
            />
            <Popup
              open={connectPopUpOpen}
              onClose={closeConnectModal}
              position="right center"
              nested
              modal
            >
              {(close: () => void) => (
                <PopUpConnectToLobby
                  close={close}
                  createNewSession={false}
                  dispatch={dispatch}
                />
              )}
            </Popup>
            <Button
              textContent="Connect"
              onClick={connectHandler}
              isLightTheme={false}
            />
            {!correctURL && <Error>Invalid URL</Error>}
            {game.error === "No such game or URL is incorrect" && (
              <Error>Game doesn&apos;t exist</Error>
            )}
            {game.error !== "No such game or URL is incorrect" &&
              game.error && <Error>Something goes wrong...Try again</Error>}
          </InputWrapper>
        </Label>
      </Content>
    </Main>
  );
};
