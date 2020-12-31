import React from 'react';
import {useState, useEffect} from "react";
import {bool, func} from 'prop-types';
import Button from "../../../Button/Button";

const WaitButton = ({ disabled, pauseHandler }) => {
  const [clicksCount, setClicksCount] = useState(0);
  const [active, setActive] = useState(false);
  const [lastClickTime, setLastClickTime] = useState(0);
  const [timer, setTimer] = useState(0);

  const clickCounter = () => {
    if(clicksCount >= 2) {
      setClicksCount(0);
    } else {
      setClicksCount(c => ++c)
    }
    setTimeout(() => setClicksCount(0),300)
    setLastClickTime(Date.now());
    setTimer(Date.now() - lastClickTime);
  };

  useEffect( () => {
    if(clicksCount ) {
      if(timer <= 300) {
        setActive(true);
      }
    } else {
      setActive(false)
    }
  }, [timer, clicksCount]);

  useEffect( () => {
    if(active) {
      setClicksCount(0);
      pauseHandler();
    }
  }, [active]);

  return (
    <Button
      disabled={disabled}
      clickHandler={clickCounter}
      text='wait'
      modifier='timer'
    />
  );
}

export default WaitButton;

WaitButton.propTypes = {
  disabled: bool,
  pauseHandler: func.isRequired
}

WaitButton.defaultProps = {
  disabled: false
}