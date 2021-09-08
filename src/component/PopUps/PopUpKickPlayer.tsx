import React from "react";
import styled from "styled-components";
import {
  H2,
  Span,
  Wrapper,
  P,
  ButtonsWrapper,
  Button,
  CancelButton,
} from "./PopUps.styled";

type UserToKickOut = {
  firstName: string;
  lastName: string;
};

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
