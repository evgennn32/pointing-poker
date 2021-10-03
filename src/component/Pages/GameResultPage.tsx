import React from "react";
import statisticsObserver from "../../app/services/statistics";
import Chat from "../Chat/Chat";
import { Main } from "../styledComponents/Main/Main";
import Title from "../Title/Title";
import { VoteResults } from "../VoteResults/VoteResults";
import voteValue from "../VoteResults/VoteResults.test.value";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { GameRoomEntity } from "../../models/GameRoomEntity";

const GameResultPage = (): JSX.Element => {
  const game = useSelector<RootState, GameRoomEntity>(
    (state: { game: GameRoomEntity }) => state.game,
  );
  return (
    <Main>
      <Chat />
      <Title
        title={`${game.roomName} planning (issues${game.issues.map(
          (issue) => ` ${issue.issueName}`,
        )})`}
      />
      {game.rounds.map((result, index) => {
        const issue = game.issues.find((issue) => result.issueId === issue.id);
        return (
          result.statistics &&
          issue && (
            <VoteResults
              key={index}
              issueName={issue.issueName}
              priority={issue.priority}
              valueVoteArray={result.statistics ? result.statistics : []}
            />
          )
        );
      })}
    </Main>
  );
};

export default GameResultPage;
