import React from "react";
import PlayingCard from "../Cards/PlayingCard";
import { IssueTile } from "../CreateIssue/IssueTile";
import {
  CardWrapper,
  PercentWrapper,
  ResultWrapper,
  StatisticsWrapper,
} from "./VoteResults.styled";
import VoteResult from "../../models/VoteResult";

type Props = {
  issueName: string;
  priority: string;
  valueVoteArray: Array<VoteResult>;
  currentPage?: string;
};

interface VoteStatistics {
  card: {
    value: string;
    type: string;
    shortType: string;
    selected: false;
    closed: false;
  };
  value: string;
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
      {valueVoteArray.map((result, index) => (
        <CardWrapper key={index}>
          <PlayingCard
            id={result.card.id}
            value={result.card.value}
            type={result.card.type}
            shortType={result.card.shortType}
            selected={false}
            editable={false}
            closed={false}
          />
          <PercentWrapper>{result.value}</PercentWrapper>
        </CardWrapper>
      ))}
    </ResultWrapper>
  </StatisticsWrapper>
);
