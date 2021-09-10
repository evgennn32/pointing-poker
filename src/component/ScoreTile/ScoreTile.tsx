import React from "react";
import { Tile } from "../styledComponents/Tile/Tile";
import { ScoreText } from "./ScoreTile.styled";

const ScoreTile = (props: { score: string }): JSX.Element => {
  return (
    <Tile>
      <ScoreText>{props.score}</ScoreText>
    </Tile>
  );
};

export default ScoreTile;
