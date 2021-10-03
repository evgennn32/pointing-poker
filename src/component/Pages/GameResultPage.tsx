import React from "react";
import Chat from "../Chat/Chat";
import { Main } from "../styledComponents/Main/Main";
import Title from "../Title/Title";
import { VoteResults } from "../VoteResults/VoteResults";
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
      {console.log(game.rounds)}
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
