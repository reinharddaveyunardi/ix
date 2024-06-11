import React from "react";
import { FlipWords } from "./ui/flip-words";

type Props = {
  title: string;
};

export default function FlipWord({ title }: Props) {
  const words = [" ", "A", "B", "C"];

  return (
    <div className="h-[60vh] flex justify-center items-center text-center">
      <div className="text-4xl text-white font-semibold max-w-[700px] min-w-[350px] text-center flex">
        <div>{title}</div>
        <div className="w-[40px] text-left">
          <FlipWords words={words} />
        </div>
      </div>
    </div>
  );
}
