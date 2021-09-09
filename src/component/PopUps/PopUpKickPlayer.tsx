import React from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";
import { H2, Span, Wrapper, P, ButtonsWrapper } from "./PopUps.styled";

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
        <Button textContent="Yes" isLightTheme={false}></Button>
        <Button textContent="No" isLightTheme={true}></Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};
