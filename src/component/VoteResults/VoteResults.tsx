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
  valueVoteArray: Array<VoteValue>;
};

interface VoteValue {
  value: string;
  type: string;
  shortType: string;
}

/* eslint react/jsx-key: [0] */
// it is really unnecessary rule for vote cards, the don't have an ID

export const VoteResults = ({
  valueVoteArray,
  issueNumber,
}: Props): JSX.Element => {
  const [statisticsResult, setStatisticsResult] = React.useState([
    {
      value: "",
      type: "",
      shortType: "",
    },
  ]);
  const [statisticsMap, setStatisticsMap] = React.useState(new Map());

  React.useEffect(() => {
    const localStaticMap = new Map();
    valueVoteArray.map((card) => {
      localStaticMap.set(
        card.value,
        localStaticMap.get(card.value) ? localStaticMap.get(card.value) + 1 : 1,
      );
    });
    setStatisticsMap(localStaticMap);
    const uniqueVoteArray: Array<VoteValue> = [];
    valueVoteArray.forEach((card) => {
      if (
        !uniqueVoteArray.some((uniqueCard) => uniqueCard.value === card.value)
      ) {
        uniqueVoteArray.push(card);
      }
    });
    uniqueVoteArray.sort(
      (a, b) => localStaticMap.get(b.value) - localStaticMap.get(a.value),
    );
    setStatisticsResult(uniqueVoteArray);
  }, []);
  return (
    <StatisticsWrapper>
      <div>
        {
          issueNumber
          // issue Component
        }
      </div>
      <ResultWrapper>
        {statisticsResult.map((card) => {
          const length = valueVoteArray.length;
          const countCards = statisticsMap.get(card.value);
          const percent = Math.round((countCards / length) * 10000) / 100;
          return (
            <CardWrapper>
              <PlayingCard
                value={card.value}
                type={card.type}
                shortType={card.shortType}
                selected={false}
                editable={false}
                closed={false}
              />
              <PercentWrapper>{`${percent}%`}</PercentWrapper>
            </CardWrapper>
          );
        })}
      </ResultWrapper>
    </StatisticsWrapper>
  );
};
