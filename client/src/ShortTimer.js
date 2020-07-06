import React, { useEffect, useState } from "react";

function ShortCountdownTimer() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2020-07-10") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      <h4 style={{ color: "#2ecc71" }}>
        Registration Starts in:
        <h4 style={{ color: "white" }}>
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </h4>
      </h4>
    </div>
  );
}

export default ShortCountdownTimer;