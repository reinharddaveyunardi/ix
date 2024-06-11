"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function GroupCategory() {
  return (
    <div className="flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={info} direction="right" speed="slow" />
    </div>
  );
}

const info = [
  {
    img: "/awards/funniest.JPG",
    name: "Funniest",
  },
  {
    img: "/awards/icebreak.JPG",
    name: "Icebreakers",
  },
  {
    img: "/awards/warmest.JPG",
    name: "Warmest",
  },
  {
    img: "/awards/academic.JPG",
    name: "Academic Achiever",
  },
  {
    img: "/awards/galak.JPG",
    name: "Galak",
  },
  {
    img: "/awards/introvert.JPG",
    name: "Introvert",
  },
  {
    img: "/awards/sweetest.JPG",
    name: "Sweetest",
  },
  {
    img: "/awards/extrovert.JPG",
    name: "Extrovert",
  },
];
