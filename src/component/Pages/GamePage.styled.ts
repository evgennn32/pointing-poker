import styled from "styled-components";
import { MediaQuery } from "../styledComponents/MediaQuery/MediaQuery";

export const DIV = styled.div<{ isPlayer: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: 20px;
  column-gap: 15px;
  @media (${MediaQuery.laptopWidth}) {
    padding: 0 20px;
    align-items: self-start;
  }
  @media (max-width: 670px) {
    ${(props) =>
      !props.isPlayer
        ? "display: flex;flex-direction: column;"
        : "display: grid;justify-items: start;grid-template-columns: 50% 50%;grid-template-rows: 27% 50%;"}
  }
`;
export const MasterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: 20px;
  @media (${MediaQuery.laptopWidth}) {
    width: max-content;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;
export const IssuesBlockWrap = styled.div`
  @media (max-width: 670px) {
    grid-row-start: span 2;
  }
  @media (${MediaQuery.mobile}) {
    grid-column-start: span 2;
  }
`;
export const ButtomPart = styled.div`
  display: flex;
  align-items: flex-end;
  padding-left: 20px;
  column-gap: 15px;
  justify-content: flex-start;
  flex-wrap: wrap;
  @media (${MediaQuery.mobile}) {
    padding-left: 0px;
  }
`;
export const TitleMedia = styled.div`
  @media (${MediaQuery.mobile}) {
    position: absolute;
    bottom: 430px;
  }
`;
export const Paragraph = styled.p`
  margin-left: 20px;
  font-family: Ruda;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
`;
export const TimerAndBtn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  height: 110px;
  justify-content: space-between;
  align-self: baseline;
  @media (${MediaQuery.mobile}) {
    margin-top: 20px;
  }
`;
export const NextIssueBtn = styled.div`
  margin-top: 155px;
  flex-grow: 1;
  text-align: end;
  align-self: start;
  @media (${MediaQuery.mobile}) {
    margin-top: 85px;
  }
`;
export const StatistForPlayer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-self: center;
`;
