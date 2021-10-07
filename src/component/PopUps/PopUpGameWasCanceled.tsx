import React from "react";
import { Button } from "../Button/Button";
import { ClosePopUp } from "./ClosePopUp";
import { Wrapper, Span, P, H2 } from "./PopUps.styled";

export const PopUpGameWasCanceled = (props: ClosePopUp): JSX.Element => {
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
          window.location.assign("/");
          props.close();
          //TODO when call popup add closeOnDocumentClick={false} so it doesn't close on document click
        }}
        isLightTheme={false}
      />
    </Wrapper>
  );
};
