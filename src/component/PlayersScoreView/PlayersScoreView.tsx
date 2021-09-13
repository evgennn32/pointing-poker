import React from "react";
import Title from "../Title/Title";
import User from "../../models/User";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import {
  MembersWrapper,
  ScoreWrapper,
  Wrapper,
} from "./PlayersScoreView.style";
import ScoreTile from "../ScoreTile/ScoreTile";

export const PlayersScoreView = (props: {
  users: User[];
  scoreType: string;
}): JSX.Element => {
  return (
    <Wrapper>
      <ScoreWrapper>
        <Title title="Score:" />
        {props.users.map((singleUser) => (
          <ScoreTile
            score={singleUser.score}
            scoreTypeShort={
              singleUser.score === "unknown" ||
              singleUser.score === "In progress"
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
