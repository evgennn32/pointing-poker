import { settings } from "cluster";
import { title } from "process";
import React from "react";
import styled from "styled-components";
import GameSettings from "../../models/GameSettings";
import Issue from "../../models/Issue";
import User from "../../models/User";
import { Button } from "../Button/Button";
import { CreateIssue } from "../CreateIssue/CreateIssue";
import { IssueTile } from "../CreateIssue/IssueTile";
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
export const P = styled.p`
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

const GamePage = (props: {
  issues: Issue[];
  users: User[];
  gameSettings: GameSettings;
  title: string;
  currentUser: User;
}): JSX.Element => {
  return (
    <Page sidebarActive={true}>
      <Main>
        <TitleEditable
          title={props.title}
          changeTitle={() => console.log(title)}
        />
        <DIV>
          <div>
            <P>Scram master:</P>
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
            textContent={props.currentUser.scramMaster ? "Stop Game" : "Exit"}
            onClick={() => {
              console.log("");
            }}
            isLightTheme={true}
          />{" "}
        </DIV>
        <DIV>
          <div>
            <Title title="Issues:" />
            <IssuesBlock issues={props.issues} />
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
        <VoteResults
          issueNumber={0}
          valueVoteArray={[
            {
              value: "12",
              type: "",
              shortType: "SP",
              percent: 5,
            },
            {
              value: "12",
              type: "",
              shortType: "SP",
              percent: 5,
            },
            {
              value: "12",
              type: "SP",
              shortType: "SP",
              percent: 5,
            },
            {
              value: "12",
              type: "SP",
              shortType: "SP",
              percent: 5,
            },
          ]}
        />
      </Main>
      <SideBar>
        <PlayersScoreView
          users={props.users}
          scoreType={props.gameSettings.scoreTypeShort}
        />
      </SideBar>
    </Page>
  );
};

export default GamePage;
