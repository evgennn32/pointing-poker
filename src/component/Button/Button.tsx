import React from "react";
import styled from "styled-components";

type Props = {
  isLightTheme: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  textContent: string;
};

const ButtonStyled = styled.button<{ isLight: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 45px;
  font-family: Ruda;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  cursor: pointer;
  border: 1px solid #496a81;
  border-radius: 3px;
  box-sizing: border-box;
  ${(props) =>
    props.isLight
      ? "background-color: white; color: #2b3a67;"
      : "background-color: #2b3a67; color: white;"}
`;

export const Button = ({
  textContent,
  onClick,
  isLightTheme,
}: Props): JSX.Element => (
  <ButtonStyled onClick={onClick} isLight={isLightTheme}>
    {textContent}
  </ButtonStyled>
);
