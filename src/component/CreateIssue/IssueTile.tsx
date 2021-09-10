import React from "react";
import {
  Wrapper,
  IssueName,
  SVGPencil,
  SVGWrapper,
  SVGDelete,
  Priority,
} from "./CreateIssueAndIssue.style";

type IssueNameProps = {
  issueName: string;
  priority: string;
};

export const IssueTile = (props: IssueNameProps): JSX.Element => {
  return (
    <Wrapper>
      <IssueName>{props.issueName}</IssueName>
      <Priority>{props.priority}</Priority>
      <SVGWrapper>
        <SVGPencil />
        <SVGDelete />
      </SVGWrapper>
    </Wrapper>
  );
};
