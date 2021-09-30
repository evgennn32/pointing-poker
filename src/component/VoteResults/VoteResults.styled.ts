import styled from "styled-components";
import { MediaQuery } from "../styledComponents/MediaQuery/MediaQuery";

export const StatisticsWrapper = styled.aside`
  width: calc(100% - 40px);
  padding: 20px;
  @media (${MediaQuery.mobile}) {
    padding: 20px 5px;
  }
`;

export const ResultWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const PercentWrapper = styled.div``;
