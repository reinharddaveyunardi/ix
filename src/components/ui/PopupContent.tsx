"use client";
import React from "react";

type Props = {
  welcome: string;
  content: string;
};

export default function PopupContent({ welcome, content }: Props) {
  return (
    <div className="text-[#3a2f24] caslon">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 italic border-b border-[#3a2f24]/10 pb-4 tracking-tight">
        {welcome}
      </h2>
      <p className="text-lg md:text-xl leading-relaxed opacity-90 italic">
        {content}
      </p>
    </div>
  );
}
