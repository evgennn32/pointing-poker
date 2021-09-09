import React from "react";
import {
  TimerWrapper,
  TimerMinutesInput,
  TimerSecondsInput,
} from "./Timer.styled";

type Props = {
  readOnly: boolean;
};

const changeHandler = (value: string, max: string) => {
  let currentValue = String(Number(value));
  if (Number(currentValue) > Number(max)) {
    currentValue = max;
  }
  if (Number(currentValue) <= 0) currentValue = "0";
  if (Number(currentValue) < 10) currentValue = `0${currentValue}`;
  return currentValue;
};

/* eslint max-lines-per-function: 0 */

const Timer = ({ readOnly }: Props): JSX.Element => {
  const [minutesValue, setMinutesValue] = React.useState("02");
  const [secondsValue, setSecondsValue] = React.useState("30");
  const [ticking, setTicking] = React.useState(false);

  React.useEffect(() => {
    if (ticking) {
      const timerTimeout = setTimeout(() => {
        if (secondsValue === "00" && minutesValue !== "00") {
          setSecondsValue("59");
          const newMinutes = changeHandler(
            String(Number(minutesValue) - 1),
            "4",
          );
          setMinutesValue(newMinutes);
        } else if (secondsValue === "00" && minutesValue === "00") {
          setTicking(false);
        } else {
          const newSeconds = changeHandler(
            String(Number(secondsValue) - 1),
            "59",
          );
          setSecondsValue(newSeconds);
        }
        clearTimeout(timerTimeout);
      }, 1000);
    }
  }, [ticking, secondsValue]);
  return (
    <TimerWrapper>
      <TimerMinutesInput
        readOnly={readOnly}
        min="0"
        max="4"
        step="1"
        type="number"
        value={minutesValue}
        onChange={(e) => {
          const updatedValue = changeHandler(e.target.value, e.target.max);
          setMinutesValue(updatedValue);
        }}
      />
      <TimerSecondsInput
        readOnly={readOnly}
        min="0"
        max="59"
        step="1"
        type="number"
        value={secondsValue}
        onChange={(e) => {
          const updatedValue = changeHandler(e.target.value, e.target.max);
          setSecondsValue(updatedValue);
        }}
      />
    </TimerWrapper>
  );
};

export default Timer;
