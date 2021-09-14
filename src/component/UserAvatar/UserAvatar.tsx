import React from "react";
import { Avatar, Initials } from "../PopUps/PopUps.styled";
import { Button, Name, NameAndPosition, SmallTxt } from "./UserAvatar.styled";
import User from "../../models/User";
import { Tile } from "../styledComponents/Tile/Tile";
import { ReactComponent as CircleWithDiagonal } from "./../../assets/icons/circle-diagonal-line.svg";

interface UserWithClassName extends User {
  className?: string;
}

export const UserAvatar = (props: UserWithClassName): JSX.Element => {
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
          <CircleWithDiagonal />
        </Button>
      )}
    </Tile>
  );
};
