import React from "react";
import Chat from "../Chat/Chat";
import { Main } from "../styledComponents/Main/Main";
import Title from "../Title/Title";
import { VoteResults } from "../VoteResults/VoteResults";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { GameRoomEntity } from "../../models/GameRoomEntity";
import { Button } from "../Button/Button";
import voteValue from "../VoteResults/VoteResults.test.value";

const GameResultPage = (): JSX.Element => {
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
        textContent={"Download in .cvs"}
        onClick={() => {
          const head = "Issue Name, Priority, Type, Short Type, Value, Percent";
          let csv = "";
          let csvv = "";
          game.gameResults.forEach((el) => {
            csv += el.issue.issueName.concat(",", el.issue.priority);
            el.voteResults.forEach((el) => {
              csvv += el.card.type
                .concat(",", el.card.value)
                .concat(",", el.value);
            });
            csv += "," + csvv;
            csv += "\n";
          });
          // voteValue.issues.forEach(function (el) {
          //   csv += el.issueName.concat(",", el.priority);
          //   statisticsObserver(el.results).forEach((el) => {
          //     csvv +=
          //       el.shortType
          //         .concat(",", el.type)
          //         .concat(",", el.shortType)
          //         .concat(",", el.value)
          //         .concat(",", el.percent.toString()) + ",";
          //   });
          //   csv += "," + csvv;
          //   csv += "\n";
          // });
          csv = head + "\n" + csv;
          console.log(csv);
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
