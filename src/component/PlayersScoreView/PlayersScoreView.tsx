import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import User from "../../models/User";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import {
  MembersWrapper,
  ScoreWrapper,
  Wrapper,
} from "./PlayersScoreView.style";
import ScoreTile from "../ScoreTile/ScoreTile";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Round from "../../models/Round";

export const PlayersScoreView = (props: {
  users: User[];
  scoreType: string;
}): JSX.Element => {
  const round = useSelector<RootState, Round>(
    (state: { round: Round }) => state.round,
  );
  const [users, setUsers] = useState(props.users);
  useEffect(() => {
    console.log(round);
    setUsers(props.users);
  }, [round.roundInProgress, round.roundId]);
  return (
    <Wrapper>
      <ScoreWrapper>
        <Title title="Score:" />
        {users.map((singleUser) => (
          <ScoreTile
            score={
              round.roundEnded
                ? singleUser.score
                  ? singleUser.score
                  : "unknown"
                : "In progress"
            }
            scoreTypeShort={
              !round.roundEnded ||
              (round.roundEnded && singleUser.score === "unknown") ||
              (round.roundEnded && !singleUser.score)
                ? ""
                : props.scoreType
            }
            key={singleUser.id}
          />
        ))}
      </ScoreWrapper>
      <MembersWrapper>
        <Title title="Players:" />
        {props.users.map((singleUser) => (
          <UserAvatar {...singleUser} key={singleUser.id} />
        ))}
      </MembersWrapper>
    </Wrapper>
  );
};
