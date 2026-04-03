"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const Countdown = () => {
  const calculateTimeLeft = useCallback((): TimeLeft => {
    const now = new Date();
    // Target date set to a symbolic graduation date
    const targetDate = new Date("2024-06-15T00:00:00");
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, []);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const timeItems = [
    { label: "Days", value: timeLeft.days ?? 0 },
    { label: "Hours", value: timeLeft.hours ?? 0 },
    { label: "Minutes", value: timeLeft.minutes ?? 0 },
    { label: "Seconds", value: timeLeft.seconds ?? 0 },
  ];

  return (
    <div className="flex items-center justify-center gap-6 md:gap-12 bg-[var(--background)]/20 backdrop-blur-md p-8 border border-[var(--brass)]/10 shadow-2xl relative group">
      {/* Decorative Corner Accents */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[var(--brass)]/20" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[var(--brass)]/20" />
      
      {timeItems.map((item, index) => (
        <div key={item.label} className="flex flex-col items-center">
          <div className="relative">
            <motion.span
              key={item.value}
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-[var(--brass)] caslon italic tabular-nums"
            >
              {item.value.toString().padStart(2, "0")}
            </motion.span>
            {index < timeItems.length - 1 && (
              <span className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 text-[var(--brass)]/20 text-3xl md:text-5xl font-light">
                /
              </span>
            )}
          </div>
          <span className="text-[9px] md:text-[11px] uppercase tracking-[0.4em] text-[var(--brass)]/40 mt-4 caslon italic font-bold">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
