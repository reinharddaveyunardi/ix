"use client";

import { useTranslations } from "next-intl";
import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";

const awards = [
  { img: "/awards/funniest.JPG", name: "Funniest" },
  { img: "/awards/icebreak.JPG", name: "Icebreakers" },
  { img: "/awards/warmest.JPG", name: "Warmest" },
  { img: "/awards/academic.JPG", name: "Academic Achiever" },
  { img: "/awards/galak.JPG", name: "Fierce" },
  { img: "/awards/introvert.JPG", name: "Introvert" },
  { img: "/awards/sweetest.JPG", name: "Sweetest" },
  { img: "/awards/extrovert.JPG", name: "Extrovert" },
];

export default function CategoryTabs() {
  const t = useTranslations("IndexPage");

  return (
    <div className="flex flex-col antialiased items-center justify-center relative overflow-hidden bg-[var(--background)] py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[var(--brass)]/40 to-transparent" />

      <div className="mb-20 text-center">
        <h3 className="text-[var(--brass)] caslon italic text-sm tracking-[0.5em] uppercase mb-4 opacity-60">
          {t("recognition")}
        </h3>
        <h2 className="text-5xl py-2 md:text-6xl text-[var(--parchment)] caslon italic tracking-tight brass-text leading-tight">
          {t("superlatives")}
        </h2>
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-[var(--brass)]/30 to-transparent mx-auto mt-8" />
      </div>

      <div className="w-full relative">
        {/* Subtle Side Gradients for Scroll */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

        <InfiniteMovingCards items={awards} direction="right" speed="slow" />
      </div>
    </div>
  );
}
