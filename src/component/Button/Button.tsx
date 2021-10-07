import React from "react";
import { ButtonStyled } from "./Button.styled";

type Props = {
  isLightTheme: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  textContent: string;
  disabled?: boolean;
};

export const Button = ({
  textContent,
  onClick,
  isLightTheme,
  disabled,
}: Props): JSX.Element => (
  <ButtonStyled onClick={onClick} isLight={isLightTheme} disabled={disabled}>
    {textContent}
  </ButtonStyled>
);
