import React from "react";
import {
  Wrapper,
  IssueName,
  SVGDelete,
  Priority,
} from "./CreateIssueAndIssue.style";
import Issue from "../../models/Issue";
import { Tile } from "../styledComponents/Tile/Tile";
import TitleEditable from "../Title/TitleEditable";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { GameRoomEntity } from "../../models/GameRoomEntity";
import { issueDelete, issueUpdate } from "../../app/slices/gameSlice";

export const IssueTile = (props: Issue): JSX.Element => {
  const dispatch = useDispatch();
  const game = useSelector<RootState, GameRoomEntity>(
    (state: { game: GameRoomEntity }) => state.game,
  );
  return (
    <Tile selected={props.selected}>
      <Wrapper>
        {props.editable ? (
          <>
            <TitleEditable
              title={props.issueName}
              changeTitle={(issueName: string) =>
                dispatch(
                  issueUpdate({
                    issue: { ...props, issueName },
                    roomId: game.roomID,
                  }),
                )
              }
            />
            <SVGDelete
              onClick={() => {
                dispatch(
                  issueDelete({
                    issueId: props.id,
                    roomId: game.roomID,
                  }),
                );
              }}
            />
          </>
        ) : (
          <IssueName>{props.issueName}</IssueName>
        )}
        <Priority>{props.priority}</Priority>
      </Wrapper>
    </Tile>
  );
};
