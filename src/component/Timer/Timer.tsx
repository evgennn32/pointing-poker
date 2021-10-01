import React from "react";
import {
  TimerWrapper,
  TimerMinutesInput,
  TimerSecondsInput,
} from "./Timer.styled";
import { AppDispatch } from "../../app/store";

type Props = {
  readOnly: boolean;
  started: boolean;
  cb?: (dispatch: AppDispatch) => void;
  roundTime?: number;
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

const Timer = (props: Props): JSX.Element => {
  const [minutesValue, setMinutesValue] = React.useState("00");
  const [secondsValue, setSecondsValue] = React.useState("05");
  const [ticking, setTicking] = React.useState(props.started);
  React.useEffect(() => {
    setTicking(props.started);
  }, [props.started]);

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
  React.useEffect(() => {
    if (!ticking) {
      console.log("round end");
    }
  }, [ticking]);
  return (
    <TimerWrapper>
      <TimerMinutesInput
        readOnly={props.readOnly}
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
        readOnly={props.readOnly}
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
