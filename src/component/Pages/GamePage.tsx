import { title } from "process";
import React from "react";
import styled from "styled-components";
import Issue from "../../models/Issue";
import {
  cards,
  currentUser,
  gameSettings,
  initialData,
  issues,
  users,
  voteResultCards,
} from "../../TempData";
import { Button } from "../Button/Button";
import PlayingCard from "../Cards/PlayingCard";
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
import { MediaQuery } from "../styledComponents/MediaQuery/MediaQuery";

export const DIV = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: 20px;
`;
export const MasterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: 20px;
  @media (${MediaQuery.laptopWidth}) {
    width: max-content;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;
export const ButtomPart = styled(DIV)`
  justify-content: flex-start;
  flex-wrap: wrap;
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
export const StatistForPlayer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-self: center;
`;

const GamePage = (): JSX.Element => {
  return (
    <Page sidebarActive={true}>
      <Main>
        <TitleEditable
          title={initialData.title}
          changeTitle={() => console.log(title)}
        />
        <MasterWrapper>
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
          {initialData.scrumMaster.id !== currentUser.id && (
            <Timer readOnly={true} />
          )}
          <Button
            textContent={
              initialData.scrumMaster.id === currentUser.id
                ? "Stop Game"
                : "Exit"
            }
            onClick={() => {
              /* TODO Stop game or exit */
            }}
            isLightTheme={true}
          />
        </MasterWrapper>
        <DIV>
          <div>
            <Title title="Issues:" />
            <IssuesBlock
              issues={
                initialData.scrumMaster.id !== currentUser.id
                  ? issues.map<Issue>((iss) => {
                      return { ...iss, editable: false };
                    })
                  : issues
              }
            />
            {/* TODO add issues with no ability to edit/del */}
            {initialData.scrumMaster.id === currentUser.id && (
              <>
                <CreateIssue />
                <Title title="Statistics:" />
                {/* TODO show statistic only when the game ended */}
              </>
            )}
          </div>
          {initialData.scrumMaster.id === currentUser.id && (
            <>
              <TimerAndBtn>
                <Timer readOnly={false} />
                <Button
                  textContent="Run Round"
                  onClick={() => {
                    {
                      /* TODO start game */
                    }
                  }}
                  isLightTheme={false}
                />
              </TimerAndBtn>
              <NextIssueBtn>
                <Button
                  textContent="Next Issue"
                  onClick={() => {
                    /* TODO select next issue */
                  }}
                  isLightTheme={false}
                />
              </NextIssueBtn>
            </>
          )}
          {!initialData.scrumMaster.currentUser && (
            <StatistForPlayer>
              <Title title="Statistics:" />
              <VoteResults
                currentPage="game"
                issueName=""
                valueVoteArray={voteResultCards}
                priority=""
              />
            </StatistForPlayer>
          )}
        </DIV>
        <ButtomPart>
          {initialData.scrumMaster.id === currentUser.id ? (
            <VoteResults
              currentPage="game"
              issueName=""
              valueVoteArray={voteResultCards}
              priority=""
            />
          ) : (
            cards.map((el, ind) => <PlayingCard {...el} key={ind} />)
          )}
          {/* TODO editable:false for non master add show statistic only when the game ended */}
        </ButtomPart>
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
