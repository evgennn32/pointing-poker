import React, { useEffect, useState } from "react";
import { Main } from "../styledComponents/Main/Main";
import { SideBar } from "../styledComponents/Sidebar/SideBar";
import { Page } from "../styledComponents/Page/Page";
import Title from "../Title/Title";
import { Button } from "../Button/Button";
import Members from "../Members/Members";
import { IssueTile } from "../CreateIssue/IssueTile";
import { CreateIssue } from "../CreateIssue/CreateIssue";
import { GameSettingsView } from "../GameSettingsView/GameSettingsView";
import Chat from "../Chat/Chat";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { GameRoomEntity } from "../../models/GameRoomEntity";
import User from "../../models/User";
import { Redirect, useHistory } from "react-router";
import GameSettings from "../../models/GameSettings";
import {
  deleteGame,
  startGame,
  updateGameSettings,
  updateGameUsers,
} from "../../app/slices/gameSlice";
import { roundUpdateState } from "../../app/slices/roundSlice";
import APIService from "../../app/services/APIservice";
import { Error } from "../PopUps/PopUps.styled";
import {
  BtnsWrap,
  Container,
  CopyLinkWrap,
  InputStyled,
  IssuesWrap,
  LinkToLobbyLabel,
  ScrumMasterLabel,
  UserAvatarStyled,
} from "./LobbyPage.styled";

const LobbyPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    APIService.handleSocketEvents(dispatch);
  });
  const game = useSelector<RootState, GameRoomEntity>(
    (state: { game: GameRoomEntity }) => state.game,
  );
  const user = useSelector<RootState, User>(
    (state: { user: User }) => state.user,
  );
  const [allowedToStartGame, setAllowedToStartGame] = useState(true);
  const userInGameState = game.users.find((res) => res.id === user.id);
  if (!userInGameState) {
    const users = [...game.users];
    users.push(user);
    dispatch(updateGameUsers(users));
  }
  const chatActive = useSelector((state: RootState) => state.chat.isActive);

  const updateSettings = (settings: GameSettings) => {
    dispatch(updateGameSettings({ settings, roomId: game.roomID }));
  };
  const gameLink = game.roomID
    ? `${window.location.host}?gameId=${game.roomID}`
    : "No game";

  useEffect(() => {
    if (game.gameSettings.gameInProgress && game.rounds.length) {
      dispatch(roundUpdateState(game.rounds[0]));
      history.replace("/game");
    }
  }, [game]);
  if (!game.roomID) {
    return <Redirect to="/" />;
  }

  return (
    <Page sidebarActive={chatActive}>
      <Main>
        <Container>
          <Title title={game.roomName} />
          <ScrumMasterLabel>Scram master:</ScrumMasterLabel>
          <UserAvatarStyled {...game.scrumMaster} />
          {user.id === game.scrumMaster.id && (
            <>
              <LinkToLobbyLabel>Link to lobby:</LinkToLobbyLabel>
              <CopyLinkWrap>
                <InputStyled value={gameLink} />
                <Button
                  isLightTheme={false}
                  textContent="Copy"
                  onClick={() => {
                    navigator.clipboard.writeText(gameLink);
                  }}
                />
              </CopyLinkWrap>
              <BtnsWrap>
                <Button
                  isLightTheme={false}
                  textContent="Start Game"
                  onClick={() => {
                    game.issues.length === 0
                      ? setAllowedToStartGame(false)
                      : dispatch(startGame(game.roomID));
                  }}
                />
                {!allowedToStartGame && <Error>Add issue(s) to start</Error>}
                <Button
                  isLightTheme={true}
                  textContent="Cancel Game"
                  onClick={() => {
                    dispatch(deleteGame(game.roomID));
                    // window.location.href = "/";
                  }}
                />
              </BtnsWrap>
            </>
          )}
          {user.id !== game.scrumMaster.id && (
            <BtnsWrap alignRight={true}>
              <Button
                isLightTheme={true}
                textContent="Exit"
                onClick={() => {
                  window.location.replace("/");
                }}
              />
            </BtnsWrap>
          )}
          <Members users={game.users} />
          {user.id === game.scrumMaster.id && (
            <>
              <Title title="Issues:" />
              <IssuesWrap>
                {game.issues.map((issue) => (
                  <IssueTile
                    id={issue.id}
                    issueName={issue.issueName}
                    priority={issue.priority}
                    selected={issue.selected}
                    key={issue.id}
                    link={issue.link}
                    editable={true}
                  />
                ))}
                <CreateIssue />
              </IssuesWrap>
              <GameSettingsView setGameSetting={updateSettings} />
            </>
          )}
        </Container>
      </Main>
      <SideBar>
        <Chat />
      </SideBar>
    </Page>
  );
};

export default LobbyPage;
