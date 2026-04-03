"use client";

import React from "react";
import "../../../styles/paperPop.css";

type Props = {
  dear: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
};

export default function WelcomeBody({ dear, p1, p2, p3, p4, p5 }: Props) {
  return (
    <div className="max-h-[75vh] overflow-y-auto custom-scrollbar bg-[var(--parchment)] p-10 md:p-16 shadow-2xl border-x-[16px] border-[var(--brass)]/10 caslon relative">
      {/* Paper Texture Overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/old-map.png')]" />
      
      {/* Decorative Stamp/Seal */}
      <div className="absolute top-10 right-10 w-24 h-24 border-2 border-[var(--brass)]/30 rounded-full flex items-center justify-center rotate-12 opacity-40">
        <div className="absolute inset-1 border border-[var(--brass)]/20 rounded-full" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-center font-bold text-[var(--brass)]">Official<br/>Archive<br/>MMXXIV</span>
      </div>

      <div className="max-w-2xl mx-auto space-y-8 text-[var(--walnut)] relative z-10">
        <p className="text-3xl font-bold mb-12 italic brass-text">{dear}</p>
        
        <div className="space-y-6 text-xl leading-[1.8] opacity-90 serif">
          <p>{p1}</p>
          <p>{p2}</p>
          <p>{p3}</p>
          <p>{p4}</p>
          <p>{p5}</p>
        </div>

        <div className="mt-20 pt-12 border-t border-[var(--walnut)]/10">
          <p className="italic mb-6 text-[var(--walnut)]/70 text-lg">With utmost respect and prayers,</p>
          <div className="space-y-2">
            <p className="font-bold text-2xl brass-text">Boedi Tjusila & Fenny Sukamto</p>
            <p className="text-sm text-[var(--walnut)]/60 uppercase tracking-[0.3em] font-semibold">School General Manager</p>
            <div className="h-px w-20 bg-[var(--brass)]/30 my-4" />
            <p className="text-[11px] text-[var(--walnut)]/50 max-w-sm leading-relaxed uppercase tracking-wider">
              Sekolah Citra Kasih / Sekolah Citra Berkat / Sekolah Ciputra Kasih
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Corner Accents */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[var(--brass)]/20" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[var(--brass)]/20" />
    </div>
  );
}
