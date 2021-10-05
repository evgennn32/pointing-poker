import styled from "styled-components";
import { MediaQuery } from "../styledComponents/MediaQuery/MediaQuery";

export const ButtonStyled = styled.button<{
  isLight: boolean;
  disabled?: boolean;
}>`
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
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border: 1px solid #496a81;
  border-radius: 3px;
  box-sizing: border-box;
  ${(props) =>
    props.isLight
      ? "background-color: white; color: #2b3a67;"
      : "background-color: #2b3a67; color: white;"}
  @media (${MediaQuery.tablet}) {
    width: 200px;
  }
  @media (${MediaQuery.mobile}) {
    width: 70%;
    min-width: 135px;
  }
`;
