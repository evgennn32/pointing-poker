import React from "react";
import {
  Wrapper,
  IssueName,
  SVGDelete,
  Priority,
} from "./CreateIssueAndIssue.style";
import Issue from "../../models/Issue";
import { Tile } from "../styledComponents/Tile/Tile";
import TitleEditable from "../Title/TitleEditable";

export const IssueTile = (props: Issue): JSX.Element => {
  return (
    <Tile selected={props.selected}>
      <Wrapper>
        {props.editable ? (
          <>
            <TitleEditable
              title={props.issueName}
              changeTitle={() => console.log(props.issueName)}
            />
            <SVGDelete />
          </>
        ) : (
          <IssueName>{props.issueName}</IssueName>
        )}
        <Priority>{props.priority}</Priority>
      </Wrapper>
    </Tile>
  );
};
