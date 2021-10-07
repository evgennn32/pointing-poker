import React, { Dispatch, useState } from "react";
import {
  TimerWrapper,
  TimerMinutesInput,
  TimerSecondsInput,
} from "./Timer.styled";

type Props = {
  readOnly: boolean;
  started: boolean;
  cb?: (setTicking: Dispatch<boolean>) => void;
  roundTime?: number;
  updateTimer?: (timeValue: number) => void;
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

const Timer = (props: Props): JSX.Element => {
  const time = props.roundTime;
  let minutesString = "04";
  let secondsString = "00";
  if (time) {
    const seconds = time % 60;
    const minutes = (time - seconds) / 60;
    seconds < 10 ? (secondsString = `0${seconds}`) : seconds.toString();
    minutes < 10 ? (minutesString = `0${minutes}`) : minutes.toString();
  }
  const [minutesValue, setMinutesValue] = React.useState(minutesString);
  const [secondsValue, setSecondsValue] = React.useState(secondsString);
  const [ticking, setTicking] = React.useState(props.started);
  const [timerTimeout, setTimerTimeout] = useState(0);
  const updateTimer = (): void => {
    if (props.updateTimer) {
      const timerValue = Number(minutesValue) * 60 + Number(secondsValue);
      props.updateTimer(timerValue);
    }
  };
  React.useEffect(() => {
    setTicking(props.started);
    setMinutesValue(minutesString);
    setSecondsValue(secondsString);
    clearTimeout(timerTimeout);
  }, [props.started]);

  React.useEffect(() => {
    if (ticking) {
      const timer = window.setTimeout(() => {
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
        clearTimeout(timer);
      }, 1000);
      setTimerTimeout(timer);
    }

    if (!ticking && props.started && props.cb) {
      clearTimeout(timerTimeout);
      props.cb(setTicking);
    }
  }, [ticking, secondsValue]);
  return (
    <TimerWrapper>
      <TimerMinutesInput
        readOnly={props.readOnly}
        min="0"
        max="4"
        step="1"
        type="number"
        value={minutesValue}
        onBlur={updateTimer}
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
        onBlur={updateTimer}
        onChange={(e) => {
          const updatedValue = changeHandler(e.target.value, e.target.max);
          setSecondsValue(updatedValue);
        }}
      />
    </TimerWrapper>
  );
};

export default Timer;
