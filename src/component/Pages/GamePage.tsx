import { title } from "process";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
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
import { MediaQuery } from "../styledComponents/MediaQuery/MediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import APIService from "../../app/services/APIservice";
import { RootState } from "../../app/store";
import { GameRoomEntity } from "../../models/GameRoomEntity";
import User from "../../models/User";
import Round from "../../models/Round";
import {
  roundAddVote,
  roundStart,
  roundStop,
} from "../../app/slices/roundSlice";
import Card from "../../models/Card";

export const DIV = styled.div<{ isPlayer: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: 20px;
  column-gap: 15px;
  @media (${MediaQuery.laptopWidth}) {
    padding: 0 20px;
    align-items: self-start;
  }
  @media (max-width: 670px) {
    ${(props) =>
      !props.isPlayer
        ? "display: flex;flex-direction: column;"
        : "display: grid;justify-items: start;grid-template-columns: 50% 50%;grid-template-rows: 27% 50%;"}
  }
`;
export const MasterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: 20px;
  @media (${MediaQuery.laptopWidth}) {
    width: max-content;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;
export const IssuesBlockWrap = styled.div`
  @media (max-width: 670px) {
    grid-row-start: span 2;
  }
  @media (${MediaQuery.mobile}) {
    grid-column-start: span 2;
  }
`;
export const ButtomPart = styled.div`
  display: flex;
  align-items: flex-end;
  padding-left: 20px;
  column-gap: 15px;
  justify-content: flex-start;
  flex-wrap: wrap;
  @media (${MediaQuery.mobile}) {
    padding-left: 0px;
  }
`;
export const TitleMedia = styled.div`
  @media (${MediaQuery.mobile}) {
    position: absolute;
    bottom: 430px;
  }
`;
export const Paragraph = styled.p`
  margin-left: 20px;
  font-family: Ruda;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
`;
export const TimerAndBtn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  height: 110px;
  justify-content: space-between;
  align-self: baseline;
  @media (${MediaQuery.mobile}) {
    margin-top: 20px;
  }
`;
export const NextIssueBtn = styled.div`
  margin-top: 155px;
  flex-grow: 1;
  text-align: end;
  align-self: start;
  @media (${MediaQuery.mobile}) {
    margin-top: 85px;
  }
`;
export const StatistForPlayer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-self: center;
`;

const GamePage = (): JSX.Element => {
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
  useEffect(() => {
    setTimerStarted(round.roundInProgress);
  }, [round.roundInProgress]);

  if (!game.roomID || !user.id) {
    window.location.replace("/");
  }

  const voteResultCards = round.statistics?.map((res) => {
    return { ...res.card, percent: +res.result };
  });

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
  const sopTimerHandler = () => {
    console.log("stop timer");
    dispatch(roundStop({ roundId: round.roundId, roomId: game.roomID }));
  };

  return (
    <Page sidebarActive={true}>
      <Main>
        <TitleEditable
          title={game.roomName}
          changeTitle={() => {
            // TODO change game title
            console.log(title);
          }}
        />
        <MasterWrapper>
          <div>
            <Paragraph>Scram master:</Paragraph>
            <UserAvatar {...game.scrumMaster} />
          </div>
          {game.scrumMaster.id !== user.id && (
            <Timer
              readOnly={true}
              started={timerStarted}
              roundTime={game.gameSettings.roundTime}
            />
          )}
          <Button
            textContent={game.scrumMaster.id === user.id ? "Stop Game" : "Exit"}
            onClick={() => {
              if (!user.scramMaster) {
                return window.location.replace("/");
              }
              /* TODO Stop game */
              history.replace("/result");
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
                      return { ...iss, editable: false, selected: true };
                    })
                  : game.issues
              }
            />
            {/* TODO add issues with no ability to edit/del */}

            {game.scrumMaster.id === user.id && <CreateIssue />}
            {user.scramMaster && !round.roundInProgress && voteResultCards && (
              <Title title="Statistics:" />
            )}
          </IssuesBlockWrap>
          {game.scrumMaster.id === user.id && (
            <>
              <TimerAndBtn>
                <Timer
                  readOnly={false}
                  started={round.roundInProgress}
                  cb={sopTimerHandler}
                />
                {!round.roundInProgress && (
                  <Button
                    textContent="Run Round"
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
                {/* TODO round restart button and action */}
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
                  onClick={() => {
                    /* TODO create new round */
                  }}
                  isLightTheme={false}
                />
              </NextIssueBtn>
            </>
          )}
          {!user.scramMaster && !round.roundInProgress && voteResultCards && (
            <StatistForPlayer>
              <Title title="Statistics:" />
              <VoteResults
                currentPage="game"
                issueName=""
                valueVoteArray={voteResultCards}
                priority=""
              />
            </StatistForPlayer>
          )}
        </DIV>
        <ButtomPart>
          {game.scrumMaster.id === user.id &&
            !round.roundInProgress &&
            voteResultCards && (
              <VoteResults
                currentPage="game"
                issueName=""
                valueVoteArray={voteResultCards}
                priority=""
              />
            )}
          {game.gameSettings.scrumMasterAsPlayer
            ? playingCards.map((el, ind) => (
                <div
                  onClick={() => {
                    voteHandler(el);
                  }}
                  key={el.id}
                >
                  <PlayingCard {...el} editable={false} key={ind} />
                </div>
              ))
            : null}
          {/* TODO editable:false for non master add show statistic only when the game ended */}
        </ButtomPart>
      </Main>
      <SideBar>
        <PlayersScoreView
          users={round.usersVoteResults}
          scoreType={game.gameSettings.scoreTypeShort}
        />
      </SideBar>
    </Page>
  );
};

export default GamePage;
