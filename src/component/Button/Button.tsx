import React from "react";
import styled from "styled-components";
import "./Button.css";

type Props = {
  isLightTheme: boolean;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  textContent: string;
};

const ButtonStyled = styled.button`
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
`;

export const Button = ({
  textContent,
  onClick,
  isLightTheme,
}: Props): JSX.Element => (
  <ButtonStyled
    onClick={onClick}
    className={isLightTheme ? "lightButton" : "darkButton"}
  >
    {textContent}
  </ButtonStyled>
);
