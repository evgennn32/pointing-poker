import React from "react";
import PlayingCard from "../Cards/PlayingCard";
import {
  CardWrapper,
  PercentWrapper,
  ResultWrapper,
  StatisticsWrapper,
} from "./VoteResults.styled";

type Props = {
  issueNumber: number;
  valueVoteArray: Array<VoteStatistics>;
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
  issueNumber,
}: Props): JSX.Element => (
  <StatisticsWrapper>
    <div>
      {
        issueNumber
        // TODO issue Component
      }
    </div>
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
