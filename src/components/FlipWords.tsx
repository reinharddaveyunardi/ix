import React from "react";
import { FlipWords } from "./ui/flip-words";

type Props = {
  title: string;
};

export default function FlipWord({ title }: Props) {
  const words = [" ", "A", "B", "C"];

  return (
    <div className="inline-flex items-baseline gap-2">
      <span>{title}</span>
      <FlipWords words={words} className="text-[#d4c3a1] italic underline decoration-[#d4c3a1]/20 underline-offset-8" />
    </div>
  );
}
