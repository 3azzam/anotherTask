import { useState, useEffect } from "react";
const Timer = ({ time, cb }) => {
  const [seconds, setSeconds] = useState(time);

  useEffect(() => {
    clearTimeout();
  }, [time]);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else {
      if (cb) cb();
    }
  }, [seconds]);

  const timeDisplay = () => {
    const remainingMinutes = parseInt(seconds / 60, 10);
    const remainingSeconds = seconds % 60;
    return `${
      remainingMinutes > 9 ? remainingMinutes : `0${remainingMinutes}`
    }:${remainingSeconds > 9 ? remainingSeconds : `0${remainingSeconds}`} `;
  };

  return <div className="h2 text-white bg-dark p-2" >{timeDisplay()}</div>;
};

export default Timer;
