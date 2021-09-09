import React from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import {
  Wrapper,
  IssueName,
  SVG,
  SVGWrapper,
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
        <SVG width="35.58" height="48.99" viewBox="0 0 35.58 48.99">
          <defs></defs>
          <title>Write</title>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Write">
              <path
                className="cls-1"
                d="M34.5 7L26.35.6a2.81 2.81 0 0 0-4 .47l-18.9 24A2.93 2.93 0 0 0 3 26.2L.23 38.07a2.79 2.79 0 0 0 1 2.84 2.75 2.75 0 0 0 3 .3l10.9-5.45a2.86 2.86 0 0 0 .95-.78L35 11a2.81 2.81 0 0 0-.5-4zm-22 24.49l-6.3 3.15 1.54-6.84 11-14.06 4.72 3.71zm14.15-18l-4.76-3.68L25 5.88l4.71 3.71z"
              />
            </g>
          </g>
        </SVG>
        <SVG
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 9H8V19H16V9ZM15.53 16.12L14.12 17.53L12 15.41L9.88 17.53L8.47 16.12L10.59 14L8.46 11.88L9.87 10.47L12 12.59L14.12 10.47L15.53 11.88L13.41 14L15.53 16.12Z"
            fill="#FFF176"
          />
          <path
            d="M14.12 10.47L12 12.59L9.87 10.47L8.46 11.88L10.59 14L8.47 16.12L9.88 17.53L12 15.41L14.12 17.53L15.53 16.12L13.41 14L15.53 11.88L14.12 10.47ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5ZM6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9Z"
            fill="#F68217"
          />
        </SVG>
      </SVGWrapper>
    </Wrapper>
  );
};
