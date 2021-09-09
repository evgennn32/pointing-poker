import React from "react";
import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from "./Switcher.styled";

interface SwitcherProps {
  id: string;
  isSwitched: boolean;
  onSwitch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switcher = (props: SwitcherProps): JSX.Element => {
  return (
    <CheckBoxWrapper>
      <CheckBox
        id={props.id}
        type="checkbox"
        checked={props.isSwitched}
        onChange={props.onSwitch}
      />
      <CheckBoxLabel htmlFor={props.id} />
    </CheckBoxWrapper>
  );
};

export default Switcher;
