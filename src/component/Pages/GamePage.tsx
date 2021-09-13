import { title } from "process";
import React from "react";
import styled from "styled-components";
import {
  currentUser,
  gameSettings,
  initialData,
  issues,
  users,
  voteResultCards,
} from "../../TempData";
import { Button } from "../Button/Button";
import { CreateIssue } from "../CreateIssue/CreateIssue";
import IssuesBlock from "../IssuesBlock/IssuesBlock";
import { PlayersScoreView } from "../PlayersScoreView/PlayersScoreView";
import { Main } from "../styledComponents/Main/Main";
import { Page } from "../styledComponents/Page/Page";
import { SideBar } from "../styledComponents/Sidebar/SideBar";
import Timer from "../Timer/Timer";
import Title from "../Title/Title";
import TitleEditable from "../Title/TitleEditable";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { VoteResults } from "../VoteResults/VoteResults";

export const DIV = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const Paragraph = styled.p`
  margin-left: 20px;
  font-family: Ruda;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
`;
export const TimerAndBtn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  height: 110px;
  justify-content: space-between;
  align-self: baseline;
`;
export const NextIssueBtn = styled.div`
  margin-top: 155px;
  flex-grow: 1;
  text-align: end;
  align-self: start;
`;

const GamePage = (): JSX.Element => {
  return (
    <Page sidebarActive={true}>
      <Main>
        <TitleEditable
          title={initialData.tile}
          changeTitle={() => console.log(title)}
        />
        <DIV>
          <div>
            <Paragraph>Scram master:</Paragraph>
            <UserAvatar
              id="cds"
              image={null}
              firstName="cds"
              lastName="cds"
              position="sdc"
              currentUser={true}
              ableToDelete={true}
              score="sdc"
              scramMaster={true}
            />
          </div>
          <Button
            textContent={currentUser.scramMaster ? "Stop Game" : "Exit"}
            onClick={() => {
              console.log("");
            }}
            isLightTheme={true}
          />{" "}
        </DIV>
        <DIV>
          <div>
            <Title title="Issues:" />
            <IssuesBlock issues={issues} />
            <CreateIssue />
            <Title title="Statistics:" />
          </div>
          <TimerAndBtn>
            <Timer readOnly={false} />
            <Button
              textContent="Run Round"
              onClick={() => {
                console.log("");
              }}
              isLightTheme={false}
            />
          </TimerAndBtn>
          <NextIssueBtn>
            <Button
              textContent="Next Issue"
              onClick={() => {
                console.log("");
              }}
              isLightTheme={false}
            />
          </NextIssueBtn>
        </DIV>
        <VoteResults issueNumber={0} valueVoteArray={voteResultCards} />
      </Main>
      <SideBar>
        <PlayersScoreView
          users={users}
          scoreType={gameSettings.scoreTypeShort}
        />
      </SideBar>
    </Page>
  );
};

export default GamePage;
