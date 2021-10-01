import React from "react";
import { IssuesWrapper } from "./IssuesBlock.styled";
import Issue from "../../models/Issue";
import { IssueTile } from "../CreateIssue/IssueTile";

const IssuesBlock = (props: { issues: Issue[] }): JSX.Element => {
  return (
    <IssuesWrapper>
      {props.issues.map((singleIssue) => (
        <IssueTile {...singleIssue} key={singleIssue.id} />
      ))}
    </IssuesWrapper>
  );
};

export default IssuesBlock;
