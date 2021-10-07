import React from "react";
import { CartAdd } from "./PlayingCard.styled";
import { ReactComponent as PlusIcon } from "./../../assets/icons/plus-in-sircule.svg";

type onClick = {
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const PlayingCardAdd = (props: onClick): JSX.Element => {
  return (
    <CartAdd onClick={props.onClick}>
      <PlusIcon />
    </CartAdd>
  );
};

export default PlayingCardAdd;
