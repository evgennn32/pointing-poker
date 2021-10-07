import React from "react";
import { Tile } from "../styledComponents/Tile/Tile";
import { ScoreText } from "./ScoreTile.styled";

const ScoreTile = (props: {
  score: string;
  scoreTypeShort: string;
}): JSX.Element => {
  return (
    <Tile>
      <ScoreText>
        {props.score} {props.scoreTypeShort}
      </ScoreText>
    </Tile>
  );
};

export default ScoreTile;
