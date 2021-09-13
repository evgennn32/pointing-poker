import React from "react";
import { Main } from "../styledComponents/Main/Main";
import { SideBar } from "../styledComponents/Sidebar/SideBar";
import { Page } from "../styledComponents/Page/Page";
import styled from "styled-components";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { initialData } from "../../TempData";
import Title from "../Title/Title";

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
  margin-left: 20px;
  position: relative;
  top: 10px;
`;

const LinkToLobbyLabel = styled.div`
  font-family: Roboto;
  font-style: italic;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #000;
`;

const LobbyPage = (): JSX.Element => {
  return (
    <Page sidebarActive={false}>
      <Main>
        <Container>
          <Title title={initialData.title} />
          <ScrumMasterLabel>Scram master:</ScrumMasterLabel>
          <UserAvatar {...initialData.scrumMuster} />
          <LinkToLobbyLabel>Link to lobby:</LinkToLobbyLabel>
        </Container>
      </Main>
      <SideBar>
        <div className="dd">dd</div>
      </SideBar>
    </Page>
  );
};

export default LobbyPage;
