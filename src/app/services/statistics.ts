interface VoteValue {
  value: string;
  type: string;
  shortType: string;
}

const statisticsObserver = (
  valueVoteArray: Array<VoteValue>,
): {
  id: string;
  percent: number;
  value: string;
  type: string;
  shortType: string;
}[] => {
  const localStaticMap = new Map();
  const numberOfAllVotes = valueVoteArray.length;
  valueVoteArray.map((card) => {
    localStaticMap.set(
      card.value,
      localStaticMap.get(card.value) ? localStaticMap.get(card.value) + 1 : 1,
    );
  });
  const uniqueVoteArray: Array<VoteValue> = [];
  valueVoteArray.forEach((card) => {
    if (
      !uniqueVoteArray.some((uniqueCard) => uniqueCard.value === card.value)
    ) {
      uniqueVoteArray.push(card);
    }
  });
  const resultStatisticsArray = uniqueVoteArray.map((card, index) => {
    const countCard = localStaticMap.get(card.value);
    const percent = Math.round((countCard / numberOfAllVotes) * 10000) / 100;
    return { ...card, id: `${index}`, percent: percent };
  });
  resultStatisticsArray.sort(
    (firstCard, secondCard) => secondCard.percent - firstCard.percent,
  );
  return resultStatisticsArray;
};

export default statisticsObserver;
