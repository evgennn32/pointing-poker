import React from "react";
import Title from "../Title/Title";
import TitleEditable from "../Title/TitleEditable";
import { ReactComponent as CupIcon } from "./../../assets/icons/cup.svg";
import {
  BottomContent,
  Card,
  CenterContent,
  CheckedCover,
  Checkmark,
  Checkmark_bottom,
  Checkmark_circle,
  Checkmark_kick,
  Checkmark_stem,
  TopContent,
} from "./PlayingCard.styled";
import { useDispatch, useSelector } from "react-redux";
import { default as CardProps } from "../../models/Card";
import { cardUpdate } from "../../app/slices/gameSlice";
import { RootState } from "../../app/store";
import { GameRoomEntity } from "../../models/GameRoomEntity";

const PlayingCard = (props: CardProps): JSX.Element => {
  const dispatch = useDispatch();
  const game = useSelector<RootState, GameRoomEntity>(
    (state: { game: GameRoomEntity }) => state.game,
  );

  return (
    <Card>
      {props.editable ? (
        <TitleEditable
          title={props.value}
          changeTitle={(value: string) =>
            dispatch(
              cardUpdate({
                card: { ...props, value },
                roomId: game.roomID,
              }),
            )
          }
        />
      ) : (
        <TopContent>
          <span>
            <Title title={props.value}></Title>
          </span>
        </TopContent>
      )}
      <CenterContent>
        {props.type === "cup" ? <CupIcon /> : <span>{props.shortType}</span>}
      </CenterContent>
      <BottomContent>
        <span>
          <Title title={props.value}></Title>
        </span>
      </BottomContent>
      {props.selected && (
        <CheckedCover>
          <Checkmark>
            <Checkmark_circle />
            <Checkmark_stem />
            <Checkmark_kick />
            <Checkmark_bottom />
          </Checkmark>
        </CheckedCover>
      )}
    </Card>
  );
};

export default PlayingCard;
