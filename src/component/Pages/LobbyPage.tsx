import React from "react";
import { Main } from "../styledComponents/Main/Main";
import { SideBar } from "../styledComponents/Sidebar/SideBar";
import { Page } from "../styledComponents/Page/Page";
import styled from "styled-components";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { currentUser, initialData, issues, users } from "../../TempData";
import Title from "../Title/Title";
import { Input } from "../styledComponents/Input/Input";
import { Button } from "../Button/Button";
import Members from "../Members/Members";
import { IssueTile } from "../CreateIssue/IssueTile";
import { CreateIssue } from "../CreateIssue/CreateIssue";
import { GameSettingsView } from "../GameSettingsView/GameSettingsView";
import GameSettings from "../../models/GameSettings";
import Chat from "../Chat/Chat";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

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
`;

const InputStyled = styled(Input)`
  border-right: none;
`;

const BtnsWrap = styled.div<{ alignRight?: boolean }>`
  display: flex;
  justify-content: ${(props) =>
    props.alignRight ? "flex-end" : "space-between"};
  margin: 30px 0;
  width: 100%;
`;

const IssuesWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const updateSettings = (gameSettings: GameSettings) => {
  /*TODO UPDATE SETTINGS*/
};

const LobbyPage = (): JSX.Element => {
  const chatActive = useSelector((state: RootState) => state.chat.isActive);
  return (
    <Page sidebarActive={chatActive}>
      <Main>
        <Container>
          <Title title={initialData.title} />
          <ScrumMasterLabel>Scram master:</ScrumMasterLabel>
          <UserAvatarStyled {...initialData.scrumMuster} />
          {currentUser.id === initialData.scrumMuster.id && (
            <>
              <LinkToLobbyLabel>Link to lobby:</LinkToLobbyLabel>
              <CopyLinkWrap>
                <InputStyled value="http://pockerplanning.c..." />
                <Button
                  isLightTheme={false}
                  textContent="Copy"
                  onClick={() => {
                    // TODO handle copy click
                  }}
                />
              </CopyLinkWrap>
              <BtnsWrap>
                <Button
                  isLightTheme={false}
                  textContent="Start Game"
                  onClick={() => {
                    // TODO handle start game click
                  }}
                />
                <Button
                  isLightTheme={true}
                  textContent="Cancel Game"
                  onClick={() => {
                    // TODO handle cancel game click
                  }}
                />
              </BtnsWrap>
            </>
          )}
          {currentUser.id !== initialData.scrumMuster.id && (
            <BtnsWrap alignRight={true}>
              <Button
                isLightTheme={true}
                textContent="Exit"
                onClick={() => {
                  // TODO handle exit game click
                }}
              />
            </BtnsWrap>
          )}
          <Members users={users} />
          {currentUser.id === initialData.scrumMuster.id && (
            <>
              <Title title="Issues:" />
              <IssuesWrap>
                {issues.map((issue) => (
                  <IssueTile {...issue} key={issue.id} />
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
