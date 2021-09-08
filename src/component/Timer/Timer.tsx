import React from "react";
import {
  TimerWrapper,
  TimerMinutesInput,
  TimerSecondsInput,
} from "./Timer.styled";

type Props = {
  readOnly: boolean;
};

const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
  e.target.value = String(Number(e.target.value));
  if (Number(e.target.value) > Number(e.target.max)) {
    e.target.value = e.target.max;
  }
  if (Number(e.target.value) <= 0) e.target.value = "0";
  if (Number(e.target.value) < 10) e.target.value = `0${e.target.value}`;
};

const Timer = ({ readOnly }: Props): JSX.Element => {
  return (
    <TimerWrapper>
      <TimerMinutesInput
        readOnly={readOnly}
        min="0"
        max="5"
        step="1"
        type="number"
        onChange={(e) => changeHandler(e)}
      />
      <TimerSecondsInput
        readOnly={readOnly}
        min="0"
        max="60"
        step="1"
        type="number"
        onChange={(e) => changeHandler(e)}
      />
    </TimerWrapper>
  );
};

export default Timer;
