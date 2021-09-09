import React from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import { PopUpCreateIssue } from "../PopUps/PopUpCreateIssue";
import { Wrapper, IssueName, SVG } from "./CreateIssueAndIssue.style";

export const CreateIssue = (): JSX.Element => {
  return (
    <Wrapper>
      <IssueName>Create new Issue</IssueName>
      <Popup
        trigger={
          <SVG
            className="svg-icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M544 464V160h-80v304H160v80h304v304h80V544h304v-80z"
              fill="#565D64"
            />
          </SVG>
        }
        modal
        nested
      >
        {(close: () => void) => <PopUpCreateIssue close={close} />}
      </Popup>
    </Wrapper>
  );
};
