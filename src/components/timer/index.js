import { useState, useEffect } from "react";


let timeId = ''

const Timer = ({ time, cb, resetCounter }) => {
  const [seconds, setSeconds] = useState(time);

  useEffect(() => {
    if (resetCounter) {
      clearTimeout(timeId)
      setSeconds(time)
    }
  }, [resetCounter]);

  useEffect(() => {
    if (seconds > 0) {
      timeId = setTimeout(() => {
        setSeconds(seconds - 1);
        if (cb) cb(time - seconds);
      }, 1000);
    }

  }, [seconds]);

  const timeDisplay = (seconds) => {
    const remainingMinutes = parseInt(seconds / 60, 10);
    const remainingSeconds = seconds % 60;
    return `${remainingMinutes > 9 ? remainingMinutes : `0${remainingMinutes}`
      }:${remainingSeconds > 9 ? remainingSeconds : `0${remainingSeconds}`} `;
  };

  return <div className="h2 p-2" >{timeDisplay(seconds)}</div>;
};

export default Timer;
