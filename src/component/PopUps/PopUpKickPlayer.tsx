import React from "react";
import styled from "styled-components";
import { Button, CancelButton } from "./PopUpCreateIssue";

type UserToKickOut = {
  firstName: string;
  lastName: string;
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
  justify-content: space-between;
  align-items: center;
  text-align: center;
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
export const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const PopUpKIckPlayer = (props: UserToKickOut): JSX.Element => {
  return (
    <Wrapper>
      <H2>Kick player?</H2>
      <P>
        Are you really want to remove player
        <Span> {props.firstName + " " + props.lastName} </Span>
        from game session?
      </P>
      <ButtonsWrapper>
        <Button type="submit">Confirm</Button>
        <CancelButton type="button">Cancel</CancelButton>
      </ButtonsWrapper>
    </Wrapper>
  );
};
