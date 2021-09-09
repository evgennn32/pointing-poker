import React from "react";
import { ReactComponent as CupIcon } from "./../../assets/icons/cup.svg";
import { ReactComponent as PenIcon } from "./../../assets/icons/pen.svg";
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
  EditIcon,
  TopContent,
} from "./PlayingCard.styled";

interface CardProps {
  value: string;
  type: string;
  shortType: string;
  selected: boolean;
  closed: boolean;
  editable: boolean;
}

const PlayingCard = (props: CardProps): JSX.Element => {
  return (
    <Card>
      {props.editable && (
        <EditIcon>
          <PenIcon />
        </EditIcon>
      )}
      <TopContent>
        <span>{props.value}</span>
      </TopContent>
      <CenterContent>
        {props.type === "cup" ? <CupIcon /> : <span>{props.shortType}</span>}
      </CenterContent>
      <BottomContent>
        <span>{props.value}</span>
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
