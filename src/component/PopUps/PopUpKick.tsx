import React from "react";
import styled from "styled-components";
import {
  ButtonsWrapper,
  Button,
  CancelButton,
  Wrapper,
  Span,
  P,
  H2,
} from "./PopUps.styled";

type UserToKickOut = {
  firstNameKicking: string;
  lastNameKicking: string;
  firstNameToKick: string;
  lastNameToKick: string;
};

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
