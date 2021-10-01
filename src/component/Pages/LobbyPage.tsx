import React, { useEffect } from "react";
import { Main } from "../styledComponents/Main/Main";
import { SideBar } from "../styledComponents/Sidebar/SideBar";
import { Page } from "../styledComponents/Page/Page";
import styled from "styled-components";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import Title from "../Title/Title";
import { Input } from "../styledComponents/Input/Input";
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
import { MediaQuery } from "../styledComponents/MediaQuery/MediaQuery";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: calc(100% - 40px);
  max-width: 1000px;
  margin: 20px auto 0px;
  padding: 0 20px 100px;
`;

const ScrumMasterLabel = styled.div`
  font-family: Ruda-Bold, sans-serif;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
`;

const LinkToLobbyLabel = styled.div`
  font-family: Roboto, sans-serif;
  font-style: italic;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #000;
`;

const UserAvatarStyled = styled(UserAvatar)`
  margin: 10px 0 20px 0;
`;

const CopyLinkWrap = styled.div`
  display: flex;
  @media (${MediaQuery.tablet}) {
    flex-wrap: wrap;
    & > input {
      border-right: 1px solid #2b3a67;
    }
  }
`;

const InputStyled = styled(Input)`
  border-right: none;
`;

const BtnsWrap = styled.div<{ alignRight?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) =>
    props.alignRight ? "flex-end" : "space-between"};
  margin: 30px 0;
  width: 100%;
  & :last-child {
    margin-right: 40px;
  }
`;

const IssuesWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

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
                    dispatch(startGame(game.roomID));
                  }}
                />
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
