import React from "react";
import Popup from "reactjs-popup";
import { PopUpCreateIssue } from "../PopUps/PopUpCreateIssue";
import { IssueName, SVGPlus } from "./CreateIssueAndIssue.style";
import { Tile } from "../styledComponents/Tile/Tile";

export const CreateIssue = (): JSX.Element => {
  return (
    <Tile>
      <IssueName>Create new Issue</IssueName>
      <Popup trigger={<SVGPlus />} modal nested>
        {(close: () => void) => <PopUpCreateIssue close={close} />}
      </Popup>
    </Tile>
  );
};
