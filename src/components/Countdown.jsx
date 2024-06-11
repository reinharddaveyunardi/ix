import React, { useState, useEffect } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    let nextTuesday = new Date(now);
    nextTuesday.setDate(now.getDate() + ((3 + 7 - now.getDay()) % 7));
    nextTuesday.setHours(0, 0, 0, 0);
    const difference = nextTuesday - now;
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

  const [timeLeft, setTimeLeft] = useState(
    typeof window !== "undefined" ? calculateTimeLeft() : {}
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="absolute flex w-full justify-center items-end left-0 text-4xl font-bold">
      {Object.values(timeLeft).map((value, index) => (
        <div key={index}>
          <p>
            {value}
            {index !== Object.values(timeLeft).length - 1 && ":"}{" "}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
