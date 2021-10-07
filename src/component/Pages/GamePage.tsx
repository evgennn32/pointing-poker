import React, { useEffect, useState } from "react";
import Issue from "../../models/Issue";
import { Button } from "../Button/Button";
import PlayingCard from "../Cards/PlayingCard";
import { CreateIssue } from "../CreateIssue/CreateIssue";
import IssuesBlock from "../IssuesBlock/IssuesBlock";
import { PlayersScoreView } from "../PlayersScoreView/PlayersScoreView";
import { Main } from "../styledComponents/Main/Main";
import { Page } from "../styledComponents/Page/Page";
import { SideBar } from "../styledComponents/Sidebar/SideBar";
import Timer from "../Timer/Timer";
import Title from "../Title/Title";
import TitleEditable from "../Title/TitleEditable";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { VoteResults } from "../VoteResults/VoteResults";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import APIService from "../../app/services/APIservice";
import { RootState } from "../../app/store";
import { GameRoomEntity } from "../../models/GameRoomEntity";
import User from "../../models/User";
import Round from "../../models/Round";
import {
  roundAddVote,
  roundCreate,
  roundStart,
  roundStop,
} from "../../app/slices/roundSlice";
import Card from "../../models/Card";
import {
  ButtomPart,
  DIV,
  IssuesBlockWrap,
  MasterWrapper,
  NextIssueBtn,
  Paragraph,
  StatistForPlayer,
  TimerAndBtn,
} from "./GamePage.styled";
import {
  gameUpdateName,
  stopGame,
  updateGameState,
} from "../../app/slices/gameSlice";
import UserVoteResult from "../../models/UserVoteResult";
import Chat from "../Chat/Chat";

const GamePage = (): JSX.Element => {
  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    APIService.handleSocketEvents(dispatch);
  });
  const game = useSelector<RootState, GameRoomEntity>(
    (state: { game: GameRoomEntity }) => state.game,
  );
  const user = useSelector<RootState, User>(
    (state: { user: User }) => state.user,
  );
  const round = useSelector<RootState, Round>(
    (state: { round: Round }) => state.round,
  );
  const [timerStarted, setTimerStarted] = useState(round.roundInProgress);
  const [playingCards, setPlayingCards] = useState(game.cards);
  const [voteResult, setVoteResult] = useState<UserVoteResult | undefined>(
    undefined,
  );
  useEffect(() => {
    setTimerStarted(round.roundInProgress);
  }, [round.roundInProgress]);
  useEffect(() => {
    const cards = playingCards.map((card) => ({ ...card, selected: false }));
    setPlayingCards(cards);
    dispatch(updateGameState(game.roomID));
    const roundVoteResult = round.usersVoteResults.find(
      (result) => user.id === result.id,
    );
    setVoteResult(roundVoteResult);
  }, [round.roundId, round.statistics]);

  if (!game.roomID || !user.id) {
    window.location.replace("/");
  }

  const voteHandler = (selectedCard: Card) => {
    if (
      round.roundInProgress ||
      (game.gameSettings.changingCardInRoundEnd && round.roundEnded)
    ) {
      const cards = playingCards.map((card) => {
        if (card.id === selectedCard.id) {
          const data = {
            roomId: game.roomID,
            roundId: round.roundId,
            userId: user.id,
            score: selectedCard.value,
          };
          dispatch(roundAddVote(data));
          if (card.selected) {
            // TODO cancel vote
            return { ...card, selected: false };
          }
          return { ...card, selected: true };
        }
        return { ...card, selected: false };
      });
      setPlayingCards(cards);
    }
  };
  const stopTimerHandler = () => {
    dispatch(roundStop({ roundId: round.roundId, roomId: game.roomID }));
  };
  const createNewRound = () => {
    let nextIssueIndex = 0;
    game.issues.forEach((issue, index) => {
      if (issue.id === round.issueId && index + 1 < game.issues.length) {
        nextIssueIndex = index + 1;
      }
    });
    if (
      game.issues.length &&
      game.issues[nextIssueIndex].id !== round.issueId
    ) {
      dispatch(
        roundCreate({
          issueId: game.issues[nextIssueIndex].id,
          roomId: game.roomID,
        }),
      );
    }
  };
  if (!game.gameSettings.gameInProgress) {
    history.replace("/result");
  }

  return (
    <Page sidebarActive={true}>
      <Main>
        <TitleEditable
          title={game.roomName}
          changeTitle={(name) => {
            dispatch(gameUpdateName({ name, roomId: game.roomID }));
          }}
        />
        <MasterWrapper>
          <div>
            <Paragraph>Scrum master:</Paragraph>
            <UserAvatar {...game.scrumMaster} />
          </div>
          {game.scrumMaster.id !== user.id &&
            game.gameSettings.isTimerNeeded && (
              <Timer
                readOnly={true}
                started={timerStarted}
                roundTime={game.gameSettings.roundTime}
              />
            )}
          <Button
            textContent={game.scrumMaster.id === user.id ? "Stop Game" : "Exit"}
            onClick={() => {
              if (!user.scrumMaster) {
                return window.location.replace("/");
              }
              dispatch(stopGame(game.roomID));
            }}
            isLightTheme={true}
          />
        </MasterWrapper>
        <DIV isPlayer={game.scrumMaster.id !== user.id}>
          <IssuesBlockWrap>
            <Title title="Issues:" />
            <IssuesBlock
              issues={
                game.scrumMaster.id !== user.id
                  ? game.issues.map<Issue>((iss) => {
                      const selected = iss.id === round.issueId;
                      return { ...iss, editable: false, selected: selected };
                    })
                  : game.issues.map<Issue>((iss) => {
                      const selected = iss.id === round.issueId;
                      return { ...iss, selected: selected };
                    })
              }
            />
            {game.scrumMaster.id === user.id && <CreateIssue />}
            {game.scrumMaster.id !== user.id &&
              !round.roundInProgress &&
              !!round.statistics?.length && <Title title="Statistics:" />}
          </IssuesBlockWrap>
          {game.scrumMaster.id === user.id && (
            <>
              <TimerAndBtn>
                {game.gameSettings.isTimerNeeded && (
                  <Timer
                    readOnly={true}
                    started={round.roundInProgress}
                    cb={stopTimerHandler}
                    roundTime={game.gameSettings.roundTime}
                  />
                )}
                {!round.roundInProgress && (
                  <Button
                    textContent={
                      round.roundEnded ? "Restart Round" : "Run Round"
                    }
                    onClick={() => {
                      {
                        dispatch(
                          roundStart({
                            roundId: round.roundId,
                            roomId: game.roomID,
                          }),
                        );
                      }
                    }}
                    isLightTheme={false}
                  />
                )}
                {round.roundInProgress && (
                  <Button
                    textContent="Round Stop"
                    onClick={() => {
                      {
                        if (round.roundInProgress) {
                          dispatch(
                            roundStop({
                              roundId: round.roundId,
                              roomId: game.roomID,
                            }),
                          );
                        }
                      }
                    }}
                    isLightTheme={false}
                  />
                )}
              </TimerAndBtn>
              <NextIssueBtn>
                <Button
                  textContent="Next Issue"
                  onClick={createNewRound}
                  isLightTheme={false}
                  disabled={round.roundInProgress}
                />
              </NextIssueBtn>
            </>
          )}
          {game.scrumMaster.id === user.id &&
            !round.roundInProgress &&
            !!round.statistics?.length && (
              <StatistForPlayer>
                <Title title="Statistics:" />
                <VoteResults
                  currentPage="game"
                  issueName=""
                  valueVoteArray={round.statistics ? round.statistics : []}
                  priority=""
                />
              </StatistForPlayer>
            )}
        </DIV>
        <ButtomPart>
          {game.scrumMaster.id !== user.id &&
            !round.roundInProgress &&
            !!round.statistics?.length && (
              <VoteResults
                currentPage="game"
                issueName=""
                valueVoteArray={round.statistics ? round.statistics : []}
                priority=""
              />
            )}
          {game.gameSettings.scrumMasterAsPlayer && !user.observer
            ? playingCards.map((el, ind) => {
                if (voteResult && el.value === voteResult.score)
                  el.selected = true;
                return (
                  <div
                    onClick={() => {
                      voteHandler(el);
                    }}
                    key={el.id}
                  >
                    <PlayingCard {...el} editable={false} key={ind} />
                  </div>
                );
              })
            : null}
        </ButtomPart>
      </Main>
      <SideBar>
        <Chat />
        <PlayersScoreView
          users={round.usersVoteResults}
          scoreType={game.gameSettings.scoreTypeShort}
        />
      </SideBar>
    </Page>
  );
};

export default GamePage;
