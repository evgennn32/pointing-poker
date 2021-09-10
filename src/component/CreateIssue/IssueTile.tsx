import React from "react";
import {
  Wrapper,
  IssueName,
  SVGPencil,
  SVGWrapper,
  SVGDelete,
  Priority,
} from "./CreateIssueAndIssue.style";
import Issue from "../../models/Issue";
import { Tile } from "../styledComponents/Tile/Tile";

export const IssueTile = (props: Issue): JSX.Element => {
  return (
    <Tile>
      <Wrapper>
        <IssueName>{props.issueName}</IssueName>
        <Priority>{props.priority}</Priority>
        <SVGWrapper>
          <SVGPencil />
          <SVGDelete />
        </SVGWrapper>
      </Wrapper>
    </Tile>
  );
};
