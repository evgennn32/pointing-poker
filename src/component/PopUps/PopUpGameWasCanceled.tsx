import React from "react";
import { useHistory } from "react-router";
import { Button } from "../Button/Button";
import { ClosePopUp } from "./ClosePopUp";
import { Wrapper, Span, P, H2 } from "./PopUps.styled";

export const PopUpGameWasCanceled = (props: ClosePopUp): JSX.Element => {
  const history = useHistory();
  return (
    <Wrapper>
      <H2>Oops...</H2>
      <P>
        The game has been canceled. Do you want to return to the
        <Span> home page </Span>?
      </P>
      <Button
        textContent="Yes"
        onClick={() => {
          history.push("/");
          props.close();
        }}
        isLightTheme={false}
      ></Button>
    </Wrapper>
  );
};
