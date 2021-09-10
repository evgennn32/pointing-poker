import React from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
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

export const Issue = (props: IssueNameProps): JSX.Element => {
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
