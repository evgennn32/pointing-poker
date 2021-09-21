import styled from "styled-components";
import { MediaQuery } from "../styledComponents/MediaQuery/MediaQuery";

export const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MembersWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Wrapper = styled.div`
  display: flex;
  width: 688px;
  @media (${MediaQuery.tablet}) {
    width: max-content;
  }
`;
