"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Carousel({
  children: slides,
  autoSlide = true,
  autoSlideInterval,
  disableAutoSlide,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide || disableAutoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [disableAutoSlide]);
  return (
    <div className="overflow-hidden relative h-screen">
      <div
        className="flex transition-transform ease-out duration-500 bg-center bg-cover"
        style={{ transform: `translateX(-${curr * 100}%)`}}
      >
        {slides}
      </div>

      <div className="absolute right-0 left-0 top-0">
        <div className="flex justify-center gap-2">
          {slides.map((i, id) => (
            <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full 
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
              key={id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
