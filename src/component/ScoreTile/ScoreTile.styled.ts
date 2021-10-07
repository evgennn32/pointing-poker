import styled from "styled-components";
import { MediaQuery } from "../styledComponents/MediaQuery/MediaQuery";

export const ScoreText = styled.span`
  font-family: Ruda-Bold, sans-serif;
  font-size: 40px;
  @media (${MediaQuery.tablet}) {
    font-size: 20px;
  }
`;
