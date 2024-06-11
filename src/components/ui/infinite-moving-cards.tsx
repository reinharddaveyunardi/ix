"use client";

import { cn } from "../../app/utils/cn";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  className,
}: {
  items: {
    img: string;
    name: string;
    // title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative max-w-7xl sm:max-w-full overflow-hidden bg-[#1d170f] ",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll "
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative flex-shrink-0 py-6 md:w-[360px]"
            style={{
              background: "linear-gradient(180deg, #4b3e2b, #2b2419",
            }}
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="flex justify-center relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                <img
                  className="w-[300px] lg:w-[295px] h-[180px] lg:h-[170px] bg-center bg-cover bg-no-repeat"
                  src={item.img}
                  alt=""
                  title={item.name}
                />
              </span>
              <div>
                <div className="flex justify-center items-center h-full text-white mt-2">
                  <div className="flex items-center justify-center h-full">
                    <div className="flex items-center gap-2">
                      <p>✧⁠ |</p>
                    </div>
                    <h1 className="text-center lg:text-md text-sm font-bold text-white px-4">
                      The {item.name}
                    </h1>
                    <div className="flex items-center gap-2">
                      <p>| ✧⁠</p>
                    </div>
                  </div>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
