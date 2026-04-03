"use client";

import React from "react";
import { motion } from "framer-motion";

const events = [
  { date: "2021", event: "The Beginning", description: "First day of Year 7 together." },
  { date: "2022", event: "Mid-Journey", description: "Overcoming challenges in Year 8." },
  { date: "2023", event: "Final Stretch", description: "Preparing for the grand finale." },
  { date: "2024", event: "Graduation", description: "Where paths diverge but memories stay." },
];

export default function HistoryTimeline() {
  return (
    <section className="bg-[var(--background)] py-32 px-6 overflow-hidden relative">
      {/* Decorative radial background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[var(--brass)]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <header className="mb-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-[var(--brass)] caslon italic text-sm tracking-[0.4em] uppercase opacity-60">
              The Chronicles
            </span>
          </motion.div>
          <h2 className="text-[var(--parchment)] caslon italic text-5xl md:text-6xl tracking-tight brass-text">Our Journey Through Time</h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[var(--brass)]/30 to-transparent mx-auto mt-8" />
        </header>

        <div className="relative">
          {/* Main Timeline Line - Brass Gradient */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--brass)]/40 to-transparent hidden md:block" />

          <div className="space-y-20">
            {events.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col md:flex-row items-center justify-center gap-12 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card - Archival Note Style */}
                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="paper-card p-8 rounded-sm shadow-2xl inline-block max-w-md relative group hover:-translate-y-1 transition-transform duration-500">
                    {/* Corner Tag */}
                    <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden pointer-events-none">
                      <div className="absolute top-0 right-0 w-[200%] h-[200%] bg-[var(--brass)]/5 -rotate-45 translate-x-1/2 -translate-y-1/2" />
                    </div>
                    
                    <span className="text-[var(--walnut)]/50 caslon text-sm tracking-[0.3em] mb-4 block italic font-bold">
                      {item.date}
                    </span>
                    <h3 className="text-[var(--walnut)] caslon text-3xl mb-4 italic tracking-tight">{item.event}</h3>
                    <p className="text-[var(--walnut)]/80 text-base italic serif leading-relaxed border-l-2 border-[var(--brass)]/20 pl-4 py-1">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center Marker - Brass Seal Style */}
                <div className="relative z-10 hidden md:flex items-center justify-center w-14 h-14 rounded-full border-2 border-[var(--brass)]/30 bg-[var(--background)] shadow-[0_0_25px_rgba(197,160,89,0.15)] group">
                  <div className="w-3 h-3 rounded-full bg-[var(--brass)] shadow-[0_0_10px_var(--brass)]" />
                  <div className="absolute inset-0 rounded-full border border-[var(--brass)]/10 scale-125 animate-pulse" />
                </div>

                {/* Empty Space for balancing */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
