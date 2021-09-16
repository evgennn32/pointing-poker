import React from "react";
import PlayingCard from "../Cards/PlayingCard";
import { IssueTile } from "../CreateIssue/IssueTile";
import {
  CardWrapper,
  PercentWrapper,
  ResultWrapper,
  StatisticsWrapper,
} from "./VoteResults.styled";

type Props = {
  issueName: string;
  priority: string;
  valueVoteArray: Array<VoteStatistics>;
  currentPage?: string;
};

interface VoteStatistics {
  value: string;
  type: string;
  shortType: string;
  percent: number;
}

/* eslint react/jsx-key: [0] */
// it is really unnecessary rule for vote cards, the don't have an ID

export const VoteResults = ({
  valueVoteArray,
  issueName,
  priority,
  currentPage,
}: Props): JSX.Element => (
  <StatisticsWrapper>
    {currentPage !== "game" && (
      <IssueTile
        issueName={issueName}
        selected={false}
        priority={priority}
        editable={false}
        id=""
        link=""
      />
    )}
    <ResultWrapper>
      {valueVoteArray.map((card) => (
        <CardWrapper>
          <PlayingCard
            value={card.value}
            type={card.type}
            shortType={card.shortType}
            selected={false}
            editable={false}
            closed={false}
          />
          <PercentWrapper>{`${card.percent}%`}</PercentWrapper>
        </CardWrapper>
      ))}
    </ResultWrapper>
  </StatisticsWrapper>
);
