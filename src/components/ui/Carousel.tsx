"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "react-feather";

interface CarouselProps {
  children: React.ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
  className?: string;
}

export default function Carousel({
  children: slides,
  autoSlide = true,
  autoSlideInterval = 5000,
  className = "",
}: CarouselProps) {
  const [curr, setCurr] = useState(0);

  const next = useCallback(() => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  }, [slides.length]);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);

  return (
    <div className={`relative overflow-hidden w-full h-[60vh] md:h-screen bg-[var(--background)] ${className}`}>
      {/* Deep Vignette */}
      <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />
      
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={curr}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          {slides[curr]}
          {/* Subtle Paper Texture Overlay on Slides */}
          <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/old-map.png')]" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls - Archival Style */}
      <div className="absolute inset-0 flex items-center justify-between p-6 z-20">
        <button
          onClick={prev}
          className="p-4 rounded-full bg-[var(--background)]/40 hover:bg-[var(--background)]/80 text-[var(--brass)] transition-all duration-500 border border-[var(--brass)]/20 backdrop-blur-md group hover:scale-110"
        >
          <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={next}
          className="p-4 rounded-full bg-[var(--background)]/40 hover:bg-[var(--background)]/80 text-[var(--brass)] transition-all duration-500 border border-[var(--brass)]/20 backdrop-blur-md group hover:scale-110"
        >
          <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Indicators - Brass Tabs */}
      <div className="absolute bottom-12 left-0 right-0 z-20">
        <div className="flex items-center justify-center gap-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurr(i)}
              className={`
                transition-all duration-700 h-1.5 rounded-full
                ${curr === i ? "w-12 bg-[var(--brass)] shadow-[0_0_10px_var(--brass)]" : "w-3 bg-[var(--brass)]/20 hover:bg-[var(--brass)]/40"}
              `}
            />
          ))}
        </div>
      </div>

      {/* Decorative Corner Filigree (Optional/Subtle) */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[var(--brass)]/10 m-8 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[var(--brass)]/10 m-8 pointer-events-none" />
    </div>
  );
}
