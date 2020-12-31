import React from "react";
import Button from "../Button/Button";
import { useTimer } from "../../hooks/timer.hook";
import getTimeFormat from "../../utils/getTimeFormat";
import WaitButton from "./componetns/WaitButton/WaitButton";
import './styles.scss'

const Timer = () => {
  const {
    isTicking,
    timePassed,
    startStop,
    reset,
    pause
  } = useTimer();

  const { time } = getTimeFormat(timePassed);

  return (
    <div className="timer">
      <div className="timer__counter">
        <div className="timer__counter-digits">
          <span>{time}</span>
        </div>
      </div>
      <div className="timer__buttons">
        <Button
          clickHandler={startStop}
          modifier="timer"
          text={isTicking ? 'stop': 'start'}
        />
        <WaitButton
          disabled={!isTicking }
          pauseHandler={pause}
        />
        <Button
          disabled={!isTicking}
          clickHandler={reset}
          modifier="timer"
          text="reset"
        />
      </div>
    </div>
  );
};

export default Timer;