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
  justify-content: flex-end;
  @media (${MediaQuery.laptopWidth}) {
    justify-content: flex-start;
  }
  @media (${MediaQuery.tablet}) {
    width: max-content;
    justify-content: flex-start;
  }
  @media (${MediaQuery.mobile}) {
    flex-direction: column;
  }
`;
