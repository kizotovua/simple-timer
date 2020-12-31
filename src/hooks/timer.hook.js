import { useState } from "react";
import clearAllIntervals from "../utils/clearAllIntervals";
import startCounting from "../utils/intervalSetter";

export const useTimer = () => {
  const [timePassed, setTimePassed] = useState(0);
  const [isTicking, setTicking] = useState(false);
  const [isPaused, setPaused] = useState(false);

  const startStop = (ev) => {
    ev.preventDefault();
    setTicking(!isTicking);
    setPaused(false);
    if(!isTicking) {
      if(isPaused) {
        startCounting(Date.now(), 1000, setTimePassed, true);
      } else {
        setPaused(false);
        startCounting(Date.now(), 1000, setTimePassed);
      }

    }  else {
      clearAllIntervals();
      setTimePassed(0);
    }
  };

  const pause = () => {
    clearAllIntervals();
    setTicking(false);
    setPaused(true);
  };

  const reset = (ev) => {
    ev.preventDefault();
    clearAllIntervals();
    setTimePassed(0);
    setTicking(true);
    startCounting(Date.now(), 1000, setTimePassed);
  };

  return { isTicking, timePassed, startStop, reset, pause }
};
