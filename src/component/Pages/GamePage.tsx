import { title } from "process";
import React from "react";
import styled from "styled-components";
import Issue from "../../models/Issue";
import { Button } from "../Button/Button";
import { CreateIssue } from "../CreateIssue/CreateIssue";
import { IssueTile } from "../CreateIssue/IssueTile";
import IssuesBlock from "../IssuesBlock/IssuesBlock";
import Timer from "../Timer/Timer";
import Title from "../Title/Title";
import TitleEditable from "../Title/TitleEditable";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { VoteResults } from "../VoteResults/VoteResults";

export const DIV = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 70%;
  @media (max-width: 950px) {
    max-width: 100%;
  }
`;
export const DIVV = styled(DIV)`
  justify-content: flex-start;
  align-items: start;
`;
export const P = styled.p`
  margin-left: 20px;
  font-family: Ruda;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
`;
export const DIVVV = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  height: 110px;
  justify-content: space-between;
`;

const GamePage = (props: { issues: Issue[] }): JSX.Element => {
  return (
    <main>
      <TitleEditable
        title={"Spring 23 planning"}
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
          textContent="Stop Game"
          onClick={() => {
            console.log("");
          }}
          isLightTheme={true}
        />
      </DIV>
      <DIVV>
        <div>
          <Title title="Issues:" />
          <IssuesBlock issues={props.issues} />
          <CreateIssue />
        </div>
        <DIVVV>
          <Timer readOnly={false} />
          <Button
            textContent="Run Round"
            onClick={() => {
              console.log("");
            }}
            isLightTheme={false}
          />
        </DIVVV>
      </DIVV>
      <VoteResults
        issueNumber={5}
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
        ]}
      />
    </main>
  );
};

export default GamePage;
