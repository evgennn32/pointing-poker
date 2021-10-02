import React from "react";
import { ButtonStyled } from "./Button.styled";


type Props = {
  isLightTheme: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  textContent: string;
};

export const Button = ({
  textContent,
  onClick,
  isLightTheme,
}: Props): JSX.Element => (
  <ButtonStyled onClick={onClick} isLight={isLightTheme}>
    {textContent}
  </ButtonStyled>
);
