import React from "react";
import { CartAdd } from "./PlayingCard.styled";
import { ReactComponent as PlusIcon } from "./../../assets/icons/plus-in-sircule.svg";

const PlayingCardAdd = (): JSX.Element => {
  return (
    <CartAdd>
      <PlusIcon />
    </CartAdd>
  );
};

export default PlayingCardAdd;
