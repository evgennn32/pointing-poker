import React from "react";
import statisticsObserver from "../../app/services/statistics";
import Chat from "../Chat/Chat";
import { Main } from "../styledComponents/Main/Main";
import Title from "../Title/Title";
import { VoteResults } from "../VoteResults/VoteResults";
import voteValue from "../VoteResults/VoteResults.test.value";

const GameResultPage = (): JSX.Element => {
  return (
    <Main>
      <Chat />
      <Title
        title={`${voteValue.title} planning (issues${voteValue.issues.map(
          (issue) => ` ${issue.issueName}`,
        )})`}
      />
      {voteValue.issues.map((result) => (
        <VoteResults
          key={result.issueName}
          issueName={result.issueName}
          priority={result.priority}
          valueVoteArray={statisticsObserver(result.results)}
        />
      ))}
    </Main>
  );
};

export default GameResultPage;
