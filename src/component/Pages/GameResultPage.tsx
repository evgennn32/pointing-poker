import React, { useEffect } from "react";
import Chat from "../Chat/Chat";
import { Main } from "../styledComponents/Main/Main";
import Title from "../Title/Title";
import { VoteResults } from "../VoteResults/VoteResults";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { GameRoomEntity } from "../../models/GameRoomEntity";
import { Button } from "../Button/Button";

const GameResultPage = (): JSX.Element => {
  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  const game = useSelector<RootState, GameRoomEntity>(
    (state: { game: GameRoomEntity }) => state.game,
  );
  if (!game.roomID) {
    window.location.replace("/");
  }
  return (
    <Main>
      <Chat />
      <Title
        title={`${game.roomName} planning (issues${game.issues.map(
          (issue) => ` ${issue.issueName}`,
        )})`}
      />
      <Button
        isLightTheme={false}
        textContent={"Download in .csv"}
        onClick={() => {
          let csv = "Issue Name, Priority, Type, Short Type, Value, Percent\n";
          game.rounds.forEach((el) => {
            const issue = game.issues.find((issue) => el.issueId === issue.id);
            csv += issue?.issueName.concat(",", issue.priority) + ",";
            csv += el.statistics
              ?.map((el) => [
                el.card.type,
                el.card.shortType,
                el.card.value,
                el.value,
                "\n",
                "",
              ])
              .join(",");
            csv += "\n";
          });
          const hiddenElement = document.createElement("a");
          hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
          hiddenElement.target = "_blank";
          hiddenElement.download = "data.csv";
          hiddenElement.click();
        }}
      ></Button>
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
