import React from "react";
import { Avatar, Initials } from "../PopUps/PopUps.styled";
import {
  Button,
  CircleWithDiagonalSVG,
  Name,
  NameAndPosition,
  SmallTxt,
} from "./UserAvatar.styled";
import User from "../../models/User";
import { Tile } from "../styledComponents/Tile/Tile";
import { useDispatch, useSelector } from "react-redux";
import { PopUpKIckPlayer } from "../PopUps/PopUpKickPlayer";
import Popup from "reactjs-popup";
import { GameRoomEntity } from "../../models/GameRoomEntity";
import { RootState } from "../../app/store";

interface UserWithClassName extends User {
  className?: string;
}

export const UserAvatar = (props: UserWithClassName): JSX.Element => {
  const dispatch = useDispatch();
  const game = useSelector<RootState, GameRoomEntity>(
    (state: { game: GameRoomEntity }) => state.game,
  );
  const user = useSelector<RootState, User>(
    (state: { user: User }) => state.user,
  );
  return (
    <Tile className={props.className}>
      <Avatar avatar={props.image}>
        {props.firstName !== "" && !props.image && (
          <Initials>{props.firstName[0]}</Initials>
        )}
        {props.lastName !== "" && !props.image && (
          <Initials>{props.lastName[0]}</Initials>
        )}
      </Avatar>
      <NameAndPosition>
        {game.scrumMaster.id === user.id && (
          <SmallTxt>It&apos;s you! {user.observer ? "Observer" : ""}</SmallTxt>
        )}
        <Name>{props.firstName + " " + props.lastName}</Name>
        {props.position !== "" && <SmallTxt>{props.position}</SmallTxt>}
      </NameAndPosition>
      {props.ableToDelete && (
        <Button>
          <Popup
            trigger={<CircleWithDiagonalSVG />}
            position="right center"
            nested
            modal
          >
            {(close: () => void) => (
              <PopUpKIckPlayer user={props} close={close} dispatch={dispatch} />
            )}
          </Popup>
        </Button>
      )}
    </Tile>
  );
};
