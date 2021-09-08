import React from "react";
import styled from "styled-components";
import { Button, CancelButton } from "./PopUpCreateIssue";
import { ButtonsWrapper } from "./PopUpKickPlayer";

type UserToKickOut = {
  firstNameKicking: string;
  lastNameKicking: string;
  firstNameToKick: string;
  lastNameToKick: string;
};

export const Wrapper = styled.div`
  width: calc(100% - 45%);
  background-color: white;
  height: 450px;
  border: 1px solid grey;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: 20;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`;
export const H2 = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 75px;
  margin: 0;
`;
const P = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: #000000;
`;
const Span = styled.span`
  color: #60dabf;
`;
export const PopUpKIck = (props: UserToKickOut): JSX.Element => {
  return (
    <Wrapper>
      <H2>Kick</H2>
      <P>
        <Span> {props.firstNameKicking + " " + props.lastNameKicking} </Span>
        want to kick member
        <Span> {props.firstNameToKick + " " + props.lastNameToKick} </Span>from
        game session. Do you agree with it?
      </P>
      <ButtonsWrapper>
        <Button type="submit">Confirm</Button>
        <CancelButton type="button">Cancel</CancelButton>
      </ButtonsWrapper>
    </Wrapper>
  );
};
