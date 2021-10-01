import React from "react";
import {
  TimerWrapper,
  TimerMinutesInput,
  TimerSecondsInput,
} from "./Timer.styled";

type Props = {
  readOnly: boolean;
  started: boolean;
  cb?: () => void;
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
  const time = props.roundTime;
  let minutesString = "00";
  let secondsString = "05";
  if (time) {
    const seconds = time % 60;
    const minutes = (time - seconds) / 60;
    seconds < 10 ? (secondsString = `0${seconds}`) : seconds.toString();
    minutes < 10 ? (minutesString = `0${minutes}`) : minutes.toString();
  }
  const [minutesValue, setMinutesValue] = React.useState(minutesString);
  const [secondsValue, setSecondsValue] = React.useState(secondsString);
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
    if (!ticking && props.started && props.cb) {
      props.cb();
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
