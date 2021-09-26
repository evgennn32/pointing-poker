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
      {props.editable ? (
        <TitleEditable
          title={props.value}
          changeTitle={() => console.log(props.value)}
        ></TitleEditable>
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
