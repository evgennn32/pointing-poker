import React from "react";
import { ReactComponent as CupIcon } from "./../../assets/icons/cup.svg";
import { ReactComponent as PenIcon } from "./../../assets/icons/pen.svg";
import {
  BottomContent,
  Card,
  CenterContent,
  EditIcon,
  TopContent,
} from "./PlayingCard.styled";

interface CardProps {
  value: string;
  type: string;
  shortType: string;
  selected: boolean;
  closed: boolean;
}

const PlayingCard = (props: CardProps): JSX.Element => {
  return (
    <Card>
      <EditIcon isActive={true}>
        <PenIcon />
      </EditIcon>
      <TopContent>
        <span>{props.value}</span>
      </TopContent>
      <CenterContent>
        {props.type === "cup" ? <CupIcon /> : <span>{props.shortType}</span>}
      </CenterContent>
      <BottomContent>
        <span>{props.value}</span>
      </BottomContent>
    </Card>
  );
};

export default PlayingCard;
