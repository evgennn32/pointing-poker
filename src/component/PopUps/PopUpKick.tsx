import React from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";
import { ButtonsWrapper, Wrapper, Span, P, H2 } from "./PopUps.styled";

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
        <Button textContent="Yes" isLightTheme={false}></Button>
        <Button textContent="No" isLightTheme={true}></Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};
