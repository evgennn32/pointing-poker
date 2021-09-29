import React, { useEffect } from "react";
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
import { useDispatch } from "react-redux";
import APIService from "../../app/services/APIservice";
import { PopUpKIckPlayer } from "../PopUps/PopUpKickPlayer";
import Popup from "reactjs-popup";

interface UserWithClassName extends User {
  className?: string;
}

export const UserAvatar = (props: UserWithClassName): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    APIService.handleSocketEvents(dispatch);
  });
  return (
    <Tile className={props.className}>
      <Avatar avatar={props.image}>
        {props.firstName !== "" && props.image === null && (
          <Initials>{props.firstName[0]}</Initials>
        )}
        {props.lastName !== "" && props.image === null && (
          <Initials>{props.lastName[0]}</Initials>
        )}
      </Avatar>
      <NameAndPosition>
        {props.currentUser && <SmallTxt>It&apos;s you!</SmallTxt>}
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
